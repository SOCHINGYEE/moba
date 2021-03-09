<template>
  <div class="page-hero" v-if="model">
    <!-- 顶部导航 -->
    <div class="topbar bg-black py-2 text-white px-3 d-flex ai-center">
      <img src="../../public/images/logo.png" height="30" />
      <div class="px-3 flex-1">
        <span class="text-grey-dark ml-2">攻略站</span>
      </div>
      <router-link to="/" tag="div">
        更多英雄 &gt;
      </router-link>
    </div>
    <div class="top" :style="{ 'background-image': `url(${model.banner})` }">
      <div class="info text-white p-3 h-100 d-flex flex-column jc-end">
        <h3 class="my-2">{{ model.name }}</h3>
        <div>{{ model.categories.map((v) => v.name).join("") }}</div>

        <div class="py-2" v-if="model.stars">
          <div class="d-flex ai-center ">
            <div class="text-white fs-sm mr-2">
              生存能力
            </div>
            <div class="progress-bar">
              <div
                class="progress bg-blue"
                :style="{ width: `${model.stars.survive}` + '0%' }"
              ></div>
            </div>
          </div>
          <div class="d-flex ai-center ">
            <div class="text-white fs-sm mr-2">
              攻击伤害
            </div>
            <div class="progress-bar">
              <div
                class="progress bg-yellow"
                :style="{ width: `${model.stars.attack}` + '0%' }"
              ></div>
            </div>
          </div>
          <div class="d-flex ai-center ">
            <div class="text-white fs-sm mr-2">
              技能效果
            </div>
            <div class="progress-bar">
              <div
                class="progress bg-green"
                :style="{ width: `${model.stars.skill}` + '0%' }"
              ></div>
            </div>
          </div>
          <div class="d-flex ai-center ">
            <div class="text-white fs-sm mr-2">
              上手难度
            </div>
            <div class="progress-bar">
              <div
                class="progress bg-red"
                :style="{ width: `${model.stars.difficult}` + '0%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- end of top -->
    <div>
      <div class="px-3 bg-white">
        <div class="nav d-flex jc-around pt-1 pb-1 border-bottom">
          <div class="nav-item active">
            <div class="nav-link">
              英雄初识
            </div>
          </div>
          <div class="nav-item">
            <div class="nav-link">
              进阶攻略
            </div>
          </div>
        </div>
      </div>

      <!-- end of 英雄初识 -->
      <swiper>
        <swiper-slide>
          <div>
            <div class="p-2 bg-white border-bottom">
              <div class="d-flex">
                <router-link tag="button" to="/" class="flex-1 btn btn-lg">
                  <i class="iconfont icon-wenjianjia"></i>
                  英雄视频介绍
                </router-link>

                <router-link tag="button" to="/" class="flex-1 ml-2 btn btn-lg">
                  <i class="iconfont icon-card-hero "></i>
                  一图识英雄
                </router-link>
              </div>

              <!-- skill -->
              <div class="skills bg-white mt-4">
                <div class="d-flex jc-around">
                  <img
                    :src="item.icon"
                    v-for="(item, index) in model.skills"
                    :key="item._id"
                    class="icon"
                    :class="{ active: currentSkillIndex === index }"
                    @click="currentSkillIndex = index"
                  />
                  <!-- 点击赋值改变currentSkillIndex -->
                </div>

                <div v-if="currentSkill">
                  <div class="pt-3 d-flex pb-2">
                    <b class="m-0">
                      {{ currentSkill.name }}
                    </b>
                    <span class="text-grey ml-4 fs-sm">
                      ({{ currentSkill.cd }})
                    </span>
                  </div>

                  <p>{{ currentSkill.description }}</p>
                </div>
              </div>
            </div>

            <m-card plain icon="remind_fill" title="出装推荐" class="hero-items">
              <div class="fs-md py-2">
                顺风出装
              </div>

              <div class="d-flex jc-around text-center">
                <div v-for="item in model.leading_weapons" :key="item.name">
                  <img :src="item.icon" />
                  <div class="fs-xs pb-2">{{ item.name }}</div>
                </div>
              </div>

              <div class="fs-md py-2 border-top">
                逆风出装
              </div>

              <div class="d-flex jc-around text-center">
                <div v-for="item in model.losing_weapons" :key="item.name">
                  <img :src="item.icon" />
                  <div class="fs-xs">{{ item.name }}</div>
                </div>
              </div>
            </m-card>

            <!-- 推荐出装卡片  end-->

            <m-card plain icon="people_fill" title="英雄关系">
              <div class="nav jc-between">
                <div
                  class="nav-item"
                  :class="{ active: active === index }"
                  v-for="(category, index) in model.partners.map(
                    (v) => v.relationship
                  )"
                  :key="index"
                  @click="$refs.list.swiper.slideTo(index)"
                >
                  <div class="nav-link">
                    {{ category }}
                  </div>
                </div>
              </div>

              <div class="slider"></div>
      <!-- active下滑块 -->
      <!-- 标题导航结束 -->
      <div class="content pt-2">
        <swiper ref="list" :options="{autoHeight:true}"
        @slide-change="() => active = $refs.list.swiper.realIndex">
          <swiper-slide v-for="(partner,i) in model.partners" :key="i">
           <div class="d-flex hero-items">
              <div v-for="hero in partner.hero" :key="hero._id" class="px-3">
              
                <img :src="hero.avatar">
              
            </div>
            <div>{{partner.description}}</div>
           </div>
              
          </swiper-slide>
        </swiper>
      </div>
            </m-card>
          </div>
        </swiper-slide>

        <swiper-slide> </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      required: true,
    },
  },
  data() {
    return {
      model: null,
      currentSkillIndex: 0,
      active:0,
    };
  },

  computed: {
    currentSkill() {
      return this.model.skills[this.currentSkillIndex];
    },
  },

  methods: {
    async fetch() {
      const res = await this.$http.get(`heroes/${this.id}`);
      this.model = res.data;
    },

    addActive(e) {
      console.log(e);
    },
  },

  created() {
    this.fetch();
  },
};
</script>

<style lang="scss">
@import "../assets/scss/_variable.scss";
.page-hero {
  .top {
    height: 44vw;
    background: #fff no-repeat top center;
    background-size: 100% auto;
  }
}

.progress-bar {
  width: 30%;
  height: 5px;
  background-color: #000000;
  border-radius: 3px;
  .progress {
    height: 100%;
    border-radius: 3px;
  }
}

.info {
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
}

.skills {
  img.icon {
    width: 50px;
    height: 50px;
    border: 3px solid map-get($colors, "white");
    &.active {
      border-color: map-get($colors, "primary");
      border-radius: 45%;
    }
  }
}

.hero-items {
  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
}
</style>
