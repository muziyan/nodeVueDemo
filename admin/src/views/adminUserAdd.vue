<template>
    <div class="CategoriesAdd">
        <h1>{{id ? "编辑" : "新建"}}管理员</h1>
        <el-form label-width="120px" @submit.native.prevent="save()">
            <el-form-item label="用户名">
                <el-input v-model="model.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="model.password"></el-input>
            </el-form-item>
            <el-form-item v-if="model.username && model.password">
                <el-button type="primary"  native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "CategoriesAdd",
        props:{
            id:{}
        },
        data(){
            return {
                model:{},
            }
        },
        methods:{
            async save(){
                let res;
                //如果有id，就执行修改，否则就执行添加
                if (this.id){
                    res =await this.$http.put(`rest/admin_user/${this.id}`,this.model);
                }else{
                    res =await this.$http.post("rest/admin_user",this.model);
                }
                this.$router.push('/admin_user/list');
                this.$message({
                    type:"success",
                    message:"保存成功！"
                })
            },
            async fetch(){
                const res = await this.$http.get(`rest/admin_user/${this.id}`);
                this.model = res.data;
            },
            async fetchParentOptions(){
                const res = await this.$http.get(`rest/admin_user`);
                this.parents = res.data;
            }
        },
        created() {
            this.fetchParentOptions();
            this.id && this.fetch();
        }
    }
</script>

<style scoped>

</style>