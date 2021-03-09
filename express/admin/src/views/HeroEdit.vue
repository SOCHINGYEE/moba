<template>
  <div class="about">
    <h1>{{ id ? "编辑" : "新建" }}英雄</h1>

    <el-form label-width="120px" @submit.native.prevent="save">
      <el-tabs value="information">
        <el-tab-pane label="基础信息配置" name="information">
          <el-form-item label="头像">
            <el-upload
              class="avatar-uploader"
              :action="$http.defaults.baseURL + '/upload/heroes'"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :headers="getAuthHeaders()"
            >
              <img v-if="model.avatar" :src="model.avatar" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>

          <el-form-item label="横幅">
            <el-upload
              class="avatar-uploader"
              :action="$http.defaults.baseURL + '/upload/banners'"
              :show-file-list="false"
              :on-success="handleBannerSuccess"
              :headers="getAuthHeaders()"
            >
              <img v-if="model.banner" :src="model.banner" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>

          <el-form-item label="名称">
            <el-input v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item label="类型">
            <el-select v-model="model.categories" multiple>
              <el-option
                v-for="item of categories"
                :key="item._id"
                :value="item._id"
                :label="item.name"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="难度">
            <el-rate
              :max="9"
              show-score
              style="margin-top:0.6rem"
              v-model="model.stars.difficult"
              placeholder=""
            ></el-rate>
          </el-form-item>
          <el-form-item label="技能">
            <el-rate
              :max="9"
              show-score
              style="margin-top:0.6rem"
              v-model="model.stars.skill"
              placeholder=""
            ></el-rate>
          </el-form-item>
          <el-form-item label="攻击">
            <el-rate
              :max="9"
              show-score
              style="margin-top:0.6rem"
              v-model="model.stars.attack"
              placeholder=""
            ></el-rate>
          </el-form-item>
          <el-form-item label="生存">
            <el-rate
              :max="9"
              show-score
              style="margin-top:0.6rem"
              v-model="model.stars.survive"
              placeholder=""
            ></el-rate>
          </el-form-item>
          <el-form-item label="顺风出装">
            <el-select v-model="model.leading_weapons" multiple>
              <el-option
                v-for="item of goods"
                :key="item._id"
                :value="item._id"
                :label="item.name"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="逆风出装">
            <el-select v-model="model.losing_weapons" multiple>
              <el-option
                v-for="item of goods"
                :key="item._id"
                :value="item._id"
                :label="item.name"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="使用技巧">
            <el-input
              type="textarea"
              v-model="model.usefulSkill"
              placeholder=""
            ></el-input>
          </el-form-item>
        </el-tab-pane>

        <el-tab-pane label="技能配置" name="skill"
          >技能配置
          <el-button @click="model.skills.push({})"
            ><i class="el-icon-plus"></i>添加技能</el-button
          >
          <el-row type="flex" style="flex-wrap:wrap">
            <el-col
              :md="12"
              v-for="(item, index) in model.skills"
              :key="index"
              style="margin-top:20px"
            >
              <el-form-item label="技能名称">
                <el-input v-model="item.name"></el-input>
              </el-form-item>

              <el-form-item label="技能图标">
                <el-upload
                  class="avatar-uploader"
                  :action="$http.defaults.baseURL + '/upload/skills'"
                  :show-file-list="false"
                  :on-success="(res) => $set(item, 'icon', res.url)"
                  :headers="getAuthHeaders()"
                >
                  <img v-if="item.icon" :src="item.icon" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>

              <el-form-item label="技能描述">
                <el-input v-model="item.description" type="textarea"></el-input>
              </el-form-item>

              <el-form-item label="冷却值 消耗">
                <el-input v-model="item.cd" type="textarea"></el-input>
              </el-form-item>

              <el-form-item>
                <el-button
                  size="small"
                  type="danger"
                  @click="model.skills.splice(index, 1)"
                  >删除</el-button
                >
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>

        <el-tab-pane label="英雄关系" name="relationship"
          >最佳搭档
          <el-button @click="model.partners.push({})"
            ><i class="el-icon-plus"></i>添加英雄</el-button
          >
          <el-row type="flex" style="flex-wrap:wrap">
            <el-col
              :md="12"
              v-for="(item, index) in model.partners"
              :key="index"
              style="margin-top:20px"
            >
              
              <el-form-item label="关系">
                <el-input v-model="item.relationship"></el-input>
              </el-form-item>

              <el-form-item label="英雄">
                <el-select filterable  v-model="item.hero" multiple>
                  <el-option v-for="hero in heroes " :key="hero._id"
                  :value="hero._id"
                  :label="hero.name"></el-option>
                </el-select>
              </el-form-item>

              

              <el-form-item label="描述">
                <el-input v-model="item.description" type="textarea"></el-input>
              </el-form-item>


              <el-form-item>
                <el-button
                  size="small"
                  type="danger"
                  @click="model.partners.splice(index, 1)"
                  >删除</el-button
                >
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-form-item style="margin-top:1rem">
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}, //路由解耦
  },
  data() {
    return {
      categories: [], //英雄分类
      goods: [], //武器
      heroes:[],
      
      model: {
        name: "",
        avatar: "",
        stars: {
          difficult: 0,
        },
        skills: [],
        partners:[],
      },
    };
  },
  created() {
    this.id && this.fetchEdit();
    this.fetchCategories();
    this.fetchGoods();
    this.fetchHeroes();
  },

  methods: {
    async save() {
      if (this.id) {
        await this.$http.put(`rest/heroes/${this.id}`, this.model);
      } else {
        await this.$http.post("rest/heroes", this.model);
      }

      this.$router.push("/heroes/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },

    async fetchEdit() {
      let res = await this.$http.get(`rest/heroes/${this.id}`);
      this.model = Object.assign({}, this.model, res.data);
    },

    async fetchCategories() {
      const res = await this.$http.get(`rest/categories`);
      this.categories = res.data;
    },

    async fetchGoods() {
      const res = await this.$http.get(`rest/goods`);
      this.goods = res.data;
    },

     async fetchHeroes() {
      const res = await this.$http.get(`rest/heroes`);
      this.heroes = res.data;
    },

    handleAvatarSuccess(res) {
      this.$set(this.model, "avatar", res.url);
    },

    handleBannerSuccess(res) {
      this.$set(this.model, "banner", res.url);
    },


  },

    beforeRouteLeave (to, from, next) {
      console.log(from.path)
    if (from.path == '/heroes/create') {
      to.meta.keepAlive = false
    }
    console.log(to.path)
    next()
  },

};
</script>
