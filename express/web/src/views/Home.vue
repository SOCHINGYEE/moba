<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item in Ads.items" :key="item._id">
        <router-link to="/">
          <img
          class="w-100"
          :src="item.image"
        />
        </router-link>
      </swiper-slide>
    
      <div
        class="swiper-pagination text-right pagination-custom"
        slot="pagination"
      ></div>
    </swiper>

    <!-- 轮播图结束 -->
    <div class="nav-icons mt-2 text-center pt-3 text-grey-dark mx-3">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-2" v-for="n in 4" :key="n">
          <i class="sprite sprite-present"></i>
          <div>战绩</div>
        </div>
      </div>
      
    </div>

    <!-- 图标结束 -->

    <m-list-card icon="menu" title="新闻资讯" :categories="newsCats">
      <template #item="{category}">
        <router-link tag="div"
        :to="`/articles/${news._id}`"
        class="py-2 fs-lg d-flex" v-for="(news,i) in category.newsList" :key="i">
        <span class="text-grey">
          [{{news.categoryName}}]
        </span>
        <span class="px-2">|</span>
        <span class="flex-1 text-dark text-ellipsis pr-2">{{news.title}}</span>
        <span class="text-grey fs-sm">{{news.createdAt | date}}</span>
      </router-link>
      </template>
      
    </m-list-card>

    <!-- 英雄列表展示 -->
      <m-list-card icon="card-hero" title="英雄列表" :categories="heroCats">
      <template #item="{category}">
        <div class="d-flex flex-wrap">
          <router-link 
          tag="div"
          :to="`/heroes/${hero._id}`"
          class="p-2 text-center" style="width:20%" v-for="(hero,i) in category.heroList" :key="i">
            <img :src="hero.avatar" class="w-100">
              <div>{{hero.name}}</div>
          </router-link>
        </div> 
        
      </template>
      
    </m-list-card>


  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: "carrousel",
  filters:{
    date(val){
      return dayjs(val).format('MM/DD')
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".pagination-custom",
        },

        autoplay:{
          disableOnInteraction:false,
          delay:2000,
        }
        // Some Swiper option/callback...
      },
      newsCats: [],
      heroCats:[],
      Ads:[]
    };
  },
  methods: {
    async fetchNewsCats() {
      const res = await this.$http.get('news/list')
      this.newsCats = res.data
    },

    async fetchHeroCats() {
      const res = await this.$http.get('heroes/list')
      this.heroCats = res.data
    },

    async fetchAds(){
      const res = await this.$http.get('ads')
      this.Ads = res.data
    }
  },

  created() {
    this.fetchNewsCats();
    this.fetchHeroCats();
    this.fetchAds()
  },
};
</script>

<style lang="scss">
@import "../assets/scss/_variable.scss";

.pagination-custom {
  .swiper-pagination-bullet {
    border-radius: 2px;
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "primary");
    }
  }
}

.nav-icons {
  background: linear-gradient(135deg, #4b484e, #2f2c30);
  border-radius: 10px;

  .nav-item {
    width: 25%;
  }
}

.card {
  border-radius: 10px;
}

.slider {
  position: relative; //设置成这个属性 left才会有效
  background-color: map-get($colors, "primary");
  height: 4px;
  width: 20px;
  border-radius: 10px;
  left: 0px;
}
</style>
