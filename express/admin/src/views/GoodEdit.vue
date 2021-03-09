<template>
  <div class="about">
    <h1>{{ id ? "编辑" : "新建" }}物品</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="icon">
        <el-upload
          class="avatar-uploader"
          :action="$http.defaults.baseURL + '/upload/goods'"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :headers="getAuthHeaders()" 
          >
          <img v-if="model.icon" :src="model.icon" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
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
      model: {},
      imageUrl: ''
    };
  },
  created() {
    this.id && this.fetchEdit();
  },

  methods: {
    async save() {
      if (this.id) {
        await this.$http.put(`rest/goods/${this.id}`, this.model);
      } else {
        await this.$http.post("rest/goods", this.model);
      }

      this.$router.push("/goods/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },

    async fetchEdit() {
      let res = await this.$http.get(`rest/goods/${this.id}`);
      this.model = res.data;
      console.log(this.model)
      
    },

    handleAvatarSuccess(res) {
        this.$set(this.model, 'icon', res.url)
      },

  },


  
  beforeRouteLeave (to, from, next) {
    console.log('从这个路由来'+ from.path)
    console.log('将要跳转'+to.path)
    if (from.path == '/goods/create') {
      to.meta.keepAlive = false
    }
    next()
  }
};
</script>

