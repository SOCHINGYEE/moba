<template>
  <div class="about">
    <h1>{{ id ? "编辑" : "新建" }}首页轮播</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>

    <el-form-item label="广告">
              <el-button @click="model.items.push({})"
        ><i class="el-icon-plus"></i>添加广告</el-button
      >
      <el-row type="flex" style="flex-wrap:wrap">
        <el-col
          :md="24"
          v-for="(item, index) in model.items"
          :key="index"
          style="margin-top:20px"
        >
          <el-form-item label="链接">
            <el-input v-model="item.url"></el-input>
          </el-form-item>

          <el-form-item label="封面" style="margin-top:20px">
            <el-upload
              class="avatar-uploader"
              :action="$http.defaults.baseURL + '/upload/ads'"
              :show-file-list="false"
              :on-success="(res) => $set(item, 'image', res.url)"
              :headers="getAuthHeaders()"
            >
              <img v-if="item.image" :src="item.image" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>

          <el-form-item>
            <el-button
              size="small"
              type="danger"
              @click="model.items.splice(index, 1)"
              >删除</el-button
            >
          </el-form-item>
        </el-col>
      </el-row>
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
      model: {
        items: [],
      },
    };
  },
  created() {
    this.id && this.fetchEdit();
  },

  methods: {
    async save() {
      if (this.id) {
        await this.$http.put(`rest/ads/${this.id}`, this.model);
      } else {
        await this.$http.post("rest/ads", this.model);
      }

      this.$router.push("/ads/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },

    async fetchEdit() {
      let res = await this.$http.get(`rest/ads/${this.id}`);
      this.model = Object.assign({}, this.model, res.data);
    },

    handleAvatarSuccess(res) {
        this.$set(this.model, 'icon', res.url)
      },
  },
};
</script>


