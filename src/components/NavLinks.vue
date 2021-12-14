<template>
  <div>
    <img :src="require(`@/assets/${icon}.svg`)" :alt="caption" />
    {{ caption }}
  </div>
</template>
<script>
export default {
  props: {
    caption: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: "",
    },
  },
};
</script>
