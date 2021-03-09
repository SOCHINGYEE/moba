<template>
    <div>
        <h1>
            图文攻略列表
        </h1>
        <el-table :data="items">
          <el-table-column prop='_id' label="id" width=230></el-table-column>
          <el-table-column prop='title' label="标题" width="240"></el-table-column>
          <el-table-column prop="categories" width="240" label="分类"></el-table-column>
          <el-table-column label="操作">
              <template slot-scope="scope">
                  <el-button size="mini" @click="$router.push(`/articles/edit/${scope.row._id}`)">编辑</el-button>
                  <el-button size="mini" type="danger" @click="del(scope.row)">删除</el-button>
              </template>
          </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {

    data() {
        return {
            items: []
        }
    },
    methods: {
        async fetch(){
            const res = await this.$http.get('rest/articles')
            this.items = res.data
        },

        async del(row) {
            this.$confirm(`是否确定要删除图文攻略 《${row.title}》`, '提示', {
                confirmButtonText: '确认',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(async() => {
                await this.$http.delete(`rest/articles/${row._id}`)
                this.$message({
                    type:"success",
                    message:"删除成功"
                })
                this.fetch()
            })
            
        }

    },
    created() {
        this.fetch()
    },
}
</script>