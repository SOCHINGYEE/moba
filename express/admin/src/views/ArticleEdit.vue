<template>
  <div class="about">
    <h1>{{ id ? "编辑" : "新建" }}图文攻略</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="所属分类">
        <el-select v-model="model.categories" multiple>
          <el-option
            v-for="item in categories"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="文章内容">
        <vue-editor v-model="model.content" useCustomImageHandler @image-added="handleImageAdded"
        ></vue-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  props: {
    id: {}, //路由解耦
  },
  components: {
    VueEditor,
  },
  data() {
    return {
      model: {},
      categories: [],
    };
  },
  created() {
    this.id && this.fetchEdit();
    this.fetchCategories();
  },

  methods: {
    async save() {
      if (this.id) {
        await this.$http.put(`rest/articles/${this.id}`, this.model);
      } else {
        await this.$http.post("rest/articles", this.model);
      }

      this.$router.push("/articles/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },

    async fetchEdit() {
      let res = await this.$http.get(`rest/articles/${this.id}`);
      this.model = res.data;
    },

    async fetchCategories() {
      const res = await this.$http.get(`rest/categories`);
      this.categories = res.data;
    },

    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {

      let formData = new FormData();
      formData.append("file", file); //浏览器的键名，跟服务端对齐

      const res = await this.$http.post("upload/text", formData);
      Editor.insertEmbed(cursorLocation, "image", res.data.url);
      resetUploader();
    },
  },
};
</script>
