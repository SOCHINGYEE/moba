<template>
  <div class="login-container">
    <el-card header="登录" class="login-card">
      <el-form
        :rules="loginRules"
        :model="model"
        @submit.native.prevent="login"
      >
        <el-form-item label="用户名" prop="username">
          <el-input placeholder="" v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            placeholder=""
            v-model="model.password"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" native-type="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {},

      loginRules: {
        username: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "密码不能为空或格式不对",
            trigger: "blur",
            pattern:/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,20}$/g
          },
        ],
      },
    };
  },

  methods: {
    

    async login() {
    
      const res = await this.$http.post("login", this.model);
      localStorage.token = res.data.token;
      this.$router.push("/");
      this.$message({
        type: "success",
        message: "登录成功",
      });
      
    },
  },
};
</script>

<style scoped>
.login-card {
  width: 30rem;
  margin: 10rem auto;
}
</style>
