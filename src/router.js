import Vue from 'vue';
import uuid from 'uuid';
import Router from './module/vue-router-async';
import Resolver from './service/resolver';
import ObjectView from './views/Object.vue';
import AsyncView from './views/Async.vue';
import FunctionView from './views/Function.vue';
import ParamsView from './views/Params.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/object',
      name: 'object',
      component: ObjectView,
      props: {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
      },
    },
    {
      path: '/category/:id',
      name: 'function',
      component: FunctionView,
      props: function props(route) {
        return {
          id: route.params.id,
          view: 'category',
          randomId: uuid.v4(),
        };
      },
    },
    {
      path: '/home/:username/post/:postId',
      name: 'params',
      component: ParamsView,
      props: true,
    },
    {
      path: '/userlist',
      name: 'async',
      component: AsyncView,
      props: async () => ({
        userHeadline: 'Userlist',
        commentHeadline: 'Comments',
        userlist: await Resolver.userlist,
        commentlist: await Resolver.commentlist,
      }),
    },
  ],
});
