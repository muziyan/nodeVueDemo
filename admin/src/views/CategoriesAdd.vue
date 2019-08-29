<template>
    <div class="CategoriesAdd">
        <h1>{{id ? "编辑" : "新建"}}分类</h1>
        <el-form label-width="120px" @submit.native.prevent="save()">
            <el-form-item label="上级分类">
                <el-select v-model="model.parent">
                    <el-option v-for="parent in parents" :key="parent._id" :label="parent.name" :value="parent._id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="名称">
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item v-if="model.name">
                <el-button type="primary"  native-type="submit" >保存</el-button>
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
                parents:[],
            }
        },
        methods:{
            async save(){
                let res;
                //如果有id，就执行修改，否则就执行添加
                if (this.id){
                    res =await this.$http.put(`rest/categories/${this.id}`,this.model);
                }else{
                    res =await this.$http.post("rest/categories",this.model);
                }
                this.$router.push('/categories/list');
                this.$message({
                    type:"success",
                    message:"保存成功！"
                })
            },
            async fetch(){
                const res = await this.$http.get(`rest/categories/${this.id}`);
                this.model = res.data;
            },
            async fetchParentOptions(){
                const res = await this.$http.get(`rest/categories`);
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