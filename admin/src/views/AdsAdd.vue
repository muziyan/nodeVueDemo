<template>
    <div class="AdsAdd">
        <h1>{{id ? "编辑" : "新建"}}广告位</h1>
        <el-form label-width="120px" @submit.native.prevent="save()">
            <el-form-item label="名称">
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item label="广告">
                <el-button type="samll" @click="model.items.push({})"><i class="el-icon-plus"></i>添加广告</el-button>
                <el-row type="flex" style="flex-wrap:wrap">
                    <el-col :md="24" style="margin:.5rem 0;" v-for="(item,index) in model.items" :key="index">
                        <el-form-item label="跳转链接(URL)">
                            <el-input v-model="item.url"></el-input>
                        </el-form-item>
                        <el-form-item label="图片" style="margin-top:30px">
                            <el-upload
                                    class="avatar-uploader"
                                    :action="$http.defaults.baseURL+'uploads'"
                                    :show-file-list="false"
                                    :on-success="res => $set(item,'image',res.url)">
                                <img v-if="item.image" :src="item.image" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                        </el-form-item>
                        <el-form-item>
                            <el-button size="samll" type="danger"
                                       @click="model.items.splice(index,1)"
                            >删除</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item v-if="model.name">
                <el-button type="primary"  native-type="submit" >保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "AdsAdd",
        props:{
            id:{}
        },
        data(){
            return {
                model:{
                    items:[]
                },
                parents:[],
            }
        },
        methods:{
            async save(){
                let res;
                //如果有id，就执行修改，否则就执行添加
                if (this.id){
                    res =await this.$http.put(`rest/ads/${this.id}`,this.model);
                }else{
                    res =await this.$http.post("rest/ads",this.model);
                }
                this.$router.push('/ads/list');
                this.$message({
                    type:"success",
                    message:"保存成功！"
                })
            },
            async fetch(){
                const res = await this.$http.get(`rest/ads/${this.id}`);
                this.model = res.data;
            }
        },
        created() {
            this.id && this.fetch();
        }
    }
</script>

<style scoped>

</style>