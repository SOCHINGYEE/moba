<template>
    <m-card :icon="icon" :title="title">
      <div class="nav jc-between">
        <div class="nav-item" :class="{active:active === index}" 
        v-for="(category,index) in categories" :key="index"
        @click="$refs.list.swiper.slideTo(index)">
          <div class="nav-link">
            {{category.name}}
          </div>
        </div>
        
        
      </div>
      <!-- <div class="slider"></div> -->
      <!-- active下滑块 -->
      <!-- 标题导航结束 -->
      <div class="content pt-2">
        <swiper ref="list" :options="{autoHeight:true}"
        @slide-change="() => active = $refs.list.swiper.realIndex">
          <swiper-slide v-for="(category,i) in categories" :key="i">
            <slot name="item" :category="category"></slot>
          </swiper-slide>
        </swiper>
      </div>
    </m-card>
</template>


<script>
export default {
    props:{
      title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    categories:{
        type:Array,
        required:true
    }
    },
    data(){
      return {
        active:0,
      }
    }
}
</script>