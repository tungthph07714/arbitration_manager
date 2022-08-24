<template>
  <a-calendar @select="onSelect" />
</template>
<script>
export default {
  methods: {
    onSelect(value) {
      console.log(value);
    },
  },
};
</script>
