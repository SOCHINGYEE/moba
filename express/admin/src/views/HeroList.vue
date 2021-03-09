<template>
  <div>
    <h1>
      英雄列表
    </h1>
    <el-table :data="items.slice((currentPage-1)*pagesize,currentPage*pagesize)">
      <el-table-column prop="_id" label="id" width="230"></el-table-column>
      <el-table-column
        prop="name"
        label="分类名称"
        width="240"
      ></el-table-column>
      <el-table-column prop="avatar" label="avatar" width="240">
        <template slot-scope="scope">
          <img :src="scope.row.avatar" alt="" class="avatar" />
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="$router.push(`/heroes/edit/${scope.row._id}`)"
            >编辑</el-button
          >
          <el-button size="mini" type="danger" @click="del(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination  
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    :page-sizes="[5,10,20]"
    :page-size="pagesize"
    background layout="total, sizes, prev, pager, next" 
    :total="items.length">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      currentPage:1,
      pagesize:10,
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("rest/heroes");
      this.items = res.data;
    },

    async del(row) {
      this.$confirm(`是否确定要删除分类 ${row.name}`, "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      }).then(async () => {
        await this.$http.delete(`rest/heroes/${row._id}`);
        this.$message({
          type: "success",
          message: "删除成功",
        });
        this.fetch();
      });
    },

    handleSizeChange(size) {
      this.pagesize = size
    },

    handleCurrentChange(currentPage) {
      this.currentPage = currentPage
    }

    
  },
  created() {
    this.fetch();
  },

  // deactivated() {
  //   window.localStorage.setItem(this)
  // },
};
</script>

<style scoped>
.avatar {
  width: 75px;
  height: 75px;
  display: block;
}
</style>
