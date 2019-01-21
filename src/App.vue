<template>
  <div id="app">
    <div id="nav">
      <router-link to="/object">static object data</router-link> |
      <router-link to="/category/435678">function</router-link> |
      <router-link to="/home/username/post/4567876">params from url</router-link> |
      <router-link to="/userlist">async from api</router-link> |
      <router-link to="/userlist-cache">async onetime cache</router-link>
    </div>
    <router-view/>
    <div v-if="$routerLoading" id="loading-overlay">Loading...</div>
  </div>
</template>

<script>export default {
  name: 'app',
};
</script>

<style>
#loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999999999;
  background-color: blue;
  width: 100%;
  overflow: hidden;
  pointer-events: none;
  color: #fff;
  text-align: center;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
