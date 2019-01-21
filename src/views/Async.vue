<template>
  <div class="async">
    <h2>{{userHeadline}}</h2>
    <ul>
      <li v-for="user in userlist" :key="user.id">
        name: {{ user.name }} -> e-mail: {{ user.email }}
      </li>
    </ul>
    <hr>
    <h2>{{commentHeadline}}</h2>
    <ul>
      <li v-for="comment in commentlist" :key="comment.id">
        name: {{ comment.name }} -> e-mail: {{ comment.email }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'async',
  props: {
    userHeadline: null,
    userlist: {},
    commentHeadline: null,
    commentlist: {},
  },
};
</script>


<style scoped>
.async {
  text-align: left;
  max-width: 600px;
  width: 95%;
  margin: 0 auto;
}
</style>
