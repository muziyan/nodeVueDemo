<template>
    <div class="home">
        <!--swiper-->
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide><img src="../assets/images/banner.png" alt="" class="w-100"></swiper-slide>
            <swiper-slide><img src="../assets/images/banner1.jpeg" alt="" class="w-100"></swiper-slide>
            <swiper-slide><img src="../assets/images/banner3.jpeg" alt="" class="w-100"></swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination pagination-home text-right" slot="pagination"></div>
        </swiper>
        <!--end of swiper-->
        <div class="nav-icons text-center  mt-3 pt-3 bg-white">
            <div class="d-flex flex-wrap">
                <div class="nav-item mb-3" v-for="n in 10" :key="n">
                    <i class="sprite sprite-news"></i>
                    <div class="py-2">爆料站</div>
                </div>
            </div>
            <div class="bg-light py-2">
                <i class="sprite sprite-arrow mr-1"></i>
                收起
            </div>
        </div>


        <m-list-card  icon="menu1" title="新闻资讯" :categories="newsCats">
            <template #items="{category}">
                <div class="py-2" v-for="(news,i) in category.newsList" :key="i">
                    <span>[{{news.categoryName}}]</span>
                    <span>|</span>
                    <span>{{news.title}}</span>
                    <span>{{news.data}}</span>
                </div>
            </template>

        </m-list-card>


        <m-list-card  icon="menu1" title="英雄列表" :categories="newsCats">
            <template #items="{category}">
                <div class="py-2" v-for="(news,i) in category.newsList" :key="i">
                    <span>[{{news.categoryName}}]</span>
                    <span>|</span>
                    <span>{{news.title}}</span>
                    <span>{{news.data}}</span>
                </div>
            </template>

        </m-list-card>
<!--        <div class="card bg-white p-3 mt-3">
            <div class="card-header d-flex ai-center">
                <i class="iconfont icon-menu1"></i>
                <div class="fs-xl flex-1 px-2">新闻资讯</div>
                <div class="iconfont icon-menu"></div>
            </div>
            <div class="card-body pt-3">
                <div class="nav jc-between">
                    <div class="nav-item active">
                        <div class="nav-link">热门</div>
                    </div>
                    <div class="nav-item ">
                        <div class="nav-link">新闻</div>
                    </div>
                    <div class="nav-item ">
                        <div class="nav-link">公告</div>
                    </div>
                    <div class="nav-item ">
                        <div class="nav-link">赛事</div>
                    </div>
                    <div class="nav-item ">
                        <div class="nav-link">赛事</div>
                    </div>
                </div>
                <div class="pt-2">
                    <swiper>
                        <swiper-silde v-for="m in 5" :key="m">
                            <div class="py-3" v-for="n in 5" :key="n">
                                <span>[新闻]</span>
                                <span>|</span>
                                <span>8月27日全服不停机更新公告</span>
                                <span>06/02</span>
                            </div>
                        </swiper-silde>
                    </swiper>
                </div>
            </div>
        </div>-->

    </div>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {
                swiperOption: {
                    pagination: {
                        el: '.pagination-home',
                        clickable: true //开启点击切换
                    },
                    autoplay: {
                        delay: 3000,//3秒切换一次
                    },
                },
                newsCats:[
                    {
                        name:'热门',
                        newsList:new Array(5).fill({}).map(v=>({
                            categoryName:'新闻',
                            title:'8月27日全服不停机更新公告',
                            data:"06/02"
                        }))
                    },
                    {
                        name:'新闻',
                        newsList:new Array(5).fill({}).map(v=>({
                            categoryName:'公告',
                            title:'8月27日全服不停机更新公告',
                            data:"06/02"
                        }))
                    },

                    {
                        name:'公告',
                        newsList:new Array(5).fill({}).map(v=>({
                            categoryName:'公告',
                            title:'8月27日全服不停机更新公告',
                            data:"06/02"
                        }))
                    },

                    {
                        name:'热门',
                        newsList:new Array(5).fill({}).map(v=>({
                            categoryName:'公告',
                            title:'8月27日全服不停机更新公告',
                            data:"06/02"
                        }))
                    },
                    {
                        name:'热门',
                        newsList:new Array(5).fill({}).map(v=>({
                            categoryName:'公告',
                            title:'8月27日全服不停机更新公告',
                            data:"06/02"
                        }))
                    },

                ]
            }
        },
    }
</script>

<style lang="scss">
    @import "../assets/scss/variable";

    .pagination-home {
        .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            cursor: pointer;
            border-radius: 3px;
            background: map-get($colors, "white");

            &.swiper-pagination-bullet-active {
                background: map-get($colors, "info");
            }
        }
    }

    .nav-icons {
        border-top: 1px solid $border-color;
        border-bottom: 1px solid $border-color;

        .nav-item {
            width: 25%;
            border-right: 1px solid $border-color;

            &:nth-child(4n) {
                border-right: none;
            }

        }

    }
</style>