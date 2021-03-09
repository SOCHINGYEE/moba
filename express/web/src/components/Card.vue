<template>
  <div class="card p-3 bg-white mt-3">
    <div class="card-header d-flex ai-center">
      <i class="iconfont text-grey-dark" :class="`icon-${icon}`"></i>
      <div class="fs-xxl flex-1 px-2">{{ title }}</div>
      <i class="iconfont icon-moreread text-grey-dark" v-if="!plain"></i>
    </div>
    <div class="card-body d-flex flex-column">
        <slot></slot>
      
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    plain:{
      type:Boolean
    }
  },
};
</script>

<style></style>
