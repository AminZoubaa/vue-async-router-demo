<template>
  <div class="home">
    {{ $props }}
  </div>
</template>

<script>
export default {
  name: 'home',
  props: {
    username: '',
    postId: null,
  },
};
</script>
