<template>
    <div class="about">
        <h1>{{id ? '编辑' : '新建'}}管理员</h1>
        <el-form label-width="120px" @submit.native.prevent="save">
            <el-form-item label="用户名">
                <el-input v-model="model.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="model.password"></el-input>
            </el-form-item>
            <el-form-item >
                <el-button type="primary" native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>


<script>
export default {
    props:{
        id: {}  //路由解耦
    },
    data() {
        return {
            model:{},
           
        }
    },
    created() {
        this.id && this.fetchEdit()

    },

    methods: {
        async save() {
            if (this.id) {
                await this.$http.put(`rest/adminUsers/${this.id}`, this.model)      
            }else{
                await this.$http.post('rest/adminUsers',this.model)
            }
            
            this.$router.push('/adminUsers/list')
            this.$message({
                type: 'success',
                message:'保存成功'
            })
        },

        async fetchEdit() {
            let res = await this.$http.get(`rest/adminUsers/${this.id}`)
            this.model = res.data
        },

    },
}
</script>