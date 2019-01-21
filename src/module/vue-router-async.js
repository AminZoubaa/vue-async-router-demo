import VueRouter from 'vue-router';
import Vue from 'vue';

const asyncStatus = new Vue({
  data: {
    asyncCount: 0,
  },
  computed: {
    loading: function loading() {
      return this.asyncCount > 0;
    },
  },
  methods: {
    addCount() {
      this.asyncCount += 1;
    },
    removeCount() {
      if (this.asyncCount - 1 < 0) {
        this.asyncCount = 0;
      } else {
        this.asyncCount -= 1;
      }
    },
  },
});

Object.defineProperty(Vue.prototype, '$asyncStatus', {
  get: function get() {
    return asyncStatus;
  },
});

Object.defineProperty(Vue.prototype, '$routerLoading', {
  get: function get() {
    return asyncStatus.loading;
  },
});

VueRouter.prototype.originalBeforeAsyncInit = VueRouter.prototype.init;
VueRouter.prototype.init = function init(app, ...args) {
  const octx = this;

  if (
    octx.beforeHooks !== undefined
    && Array.isArray(octx.beforeHooks)
  ) {
    octx.beforeHooks.push(

      (to, from, next) => {
        to.matched.forEach((match) => {
          /* eslint no-param-reassign: ["error", { "props": false }] */
          const matchProps = Object.keys(match.props);

          if (matchProps.length === 0) {
            next();
          } else {
            matchProps.forEach((propKey) => {
              const props = match.props[propKey];

              if (typeof props === 'function') {
                if (!match.cache_props) {
                  match.cache_props = props;
                }

                const result = match.cache_props(to);

                if (Promise.resolve(result) === result) {
                  asyncStatus.addCount();

                  result.then((data) => {
                    match.props[propKey] = () => data;
                    asyncStatus.removeCount();
                    next();
                  }).catch((e) => {
                    console.error(e);
                    asyncStatus.removeCount();
                    next(false);
                  });
                } else {
                  match.props[propKey] = result;
                  next();
                }
              } else {
                next();
              }
            });
          }
        });
      },
    );
  }

  this.originalBeforeAsyncInit(app, ...args);
};
export default VueRouter;
