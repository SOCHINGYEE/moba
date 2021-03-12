<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-2 border-bottom">
      
      <i class="iconfont icon-Active text-blue" @click="$router.go(-1)"></i>
     
      <strong class="flex-1 text-blue pl-2">
        {{model.title}}
      </strong>
      <div class="text-grey fs-xs">
        2019-06-19
      </div>
    </div>

    <div v-html="model.content" class="px-3 fs-lg page-article"></div>
    <div class="px-3 border-top py-3">
      <div class="d-flex ai-center">
        <i class="iconfont icon-flashlight_fill text-primary"></i>
        <strong class="text-blue fs-lg ml-1">相关资讯</strong>
      </div>
      <div class="pt-2">
        <router-link tag="div"
        class="py-1"
          :to="`${item._id}`"
          v-for = "item in model.related"
          :key="item._id"
        >
          {{item.title}}
        </router-link>
      </div>
    </div>

  </div>
</template>


<script>
export default {
  props:{
    id:{required:true} //路由参数映射成组件参数
  },

  data() {
    return {
      model:null
    }
  },

  methods: {
    async fetch() {
      const res = await this.$http.get(`articles/${this.id}`)
      this.model = res.data

    }
  },

  watch:{
    id() {
      this.fetch()
    }
  },

  created() {
    this.fetch()
  },
}
</script>


<style lang="scss">
  .page-article {
    img {
      max-width: 100%;
      height: auto
    }
  };
  .icon-Active {
    font-size: 1.6923rem
  }
</style>
