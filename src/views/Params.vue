<template>
  <div class="home">
    {{ $props }}
  </div>
</template>

<script>
export default {
  name: 'home',
  props: {
    username: null,
    postId: null,
  },
};
</script>
