<template>
    <div class="Main">
        <div class="topBar bg-black py-2 px-4 w-100  d-flex jc-between">
            <div class="count">
                <a href="javascript:" class="logo_img bg"></a>
                <div class="logo_title">
                    <h1 class="text-white fs-xm">王者荣耀</h1>
                    <p class="text-grey-1 fs-xs">团队成就更多</p>
                </div>
            </div>
            <div class="download">
                <a href="javascript:" class="download_btn bg my-1"></a>
            </div>
        </div>
        <div class="bg-primary pt-2 pb-2">
            <div class="nav nav-inverse text-white jc-around pb-1">
                <div class="nav-item active">
                    <router-link tag="div" class="nav-link" to="/">首页</router-link>
                </div>
                <div class="nav-item">
                    <router-link tag="div" class="nav-link" to="/">攻略中心</router-link>
                </div>
                <div class="nav-item">
                    <router-link tag="div" class="nav-link" to="/">赛事中心</router-link>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Main"
    }
</script>

<style>
    .topBar{
        position: sticky;
        height:48px;
        top:0;
        z-index:999;
    }
    .bg{
        background: url("../assets/images/index.png");
        background-size:400px;
    }
    .topBar .logo_img {
        position: absolute;
        width:32px;
        height:32px;
        display: block;
        background-position:0 -328.533px;
    }
    .topBar .logo_title{
        margin-left:40px;
    }
    .download_btn{
        width:64px;
        height:25px;
        display: block;
        background-position:-60px -328.533px;
    }
</style>