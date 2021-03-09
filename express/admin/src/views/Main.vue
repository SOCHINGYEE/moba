<template>
    <el-container style="height: 100vh; ">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu router :default-openeds="['3']" unique-opened :default-active="$route.path">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>内容管理</template>
        <el-menu-item-group>
          <template slot="title">分类</template>
          <el-menu-item index="/categories/create">创建分类</el-menu-item>
          <el-menu-item index="/categories/list">分类列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="物品">
          <el-menu-item index="/goods/create">新建物品</el-menu-item>
          <el-menu-item index="/goods/list">物品列表</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">英雄</template>
          <el-menu-item index="/heroes/create">创建英雄</el-menu-item>
          <el-menu-item index="/heroes/list">英雄列表</el-menu-item>
        </el-submenu>
        <el-submenu index="1-5">
          <template slot="title">内容中心</template>
          <el-menu-item index="/articles/create">新建图文攻略</el-menu-item>
          <el-menu-item index="/articles/list">图文攻略列表</el-menu-item>
          
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>运营管理</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="/ads/create">首页轮播管理</el-menu-item>
          <el-menu-item index="/ads/list">首页轮播列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>用户管理</template>
        <el-menu-item-group>
          <template slot="title">管理员
          </template>
          <el-menu-item index="/adminUsers/create">新建管理员</el-menu-item>
          <el-menu-item index="/adminUsers/list">管理员列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template slot="title">选项4</template>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    
    <el-main>
      <keep-alive>
          <router-view v-if="$route.meta.keepAlive" :key="$route.path"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" :key="$route.path"></router-view>
      
    </el-main>
  </el-container>
</el-container>

</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>




<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>