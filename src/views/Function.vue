<template>
  <div class="function">
    {{ $props }}
  </div>
</template>

<script>
export default {
  name: 'function',
  props: {
    id: null,
    view: null,
    randomId: null,
  },
};
</script>
