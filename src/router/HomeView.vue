<script setup lang="ts">
import HeroSection from "@/components/HeroSection.vue";
import ShowFooter from "@/components/ShowFooter.vue";
</script>

<template>
    <HeroSection id="home" />

    <main class="container">
        <section id="information" class="section">
            <h2 class="section-title title">
                <i class="fa-solid fa-circle-info"></i> Information
            </h2>
            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            负责内容
                        </div>
                        <div class="card-body">
                            我们是一个小团体, 研究一些奇奇怪怪<i>(?)</i>的内容.
                            <br />
                            该团队的主要维护者是
                            <a href="https://github.com/AImixAE"
                                ><b>AImixAE Nya Mocha</b></a
                            >
                            <br />
                            我们喜欢接触新鲜的内容, 喜欢开发异想天开的项目.
                            <br />
                            <i>(不过目前什么都没有呢...)</i>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <i class="fa fa-circle-info"></i> 小小提示
                        </div>
                        <div class="card-body">
                            该项目使用的是还未公布的
                            <b>Neon Dark UI Ultra V4</b> <i>(自己编写)</i>,
                            <br />
                            我们将会在一段时间后公布于众.
                            <br />
                            目前还在编写文档和优化.
                            <br />
                            希望喜欢这个页面样式的人不会错过!
                            <br />
                            <i>(不过请不要提前擅自使用喵...)</i>
                            <div class="progress">
                                <div class="progress-bar" style="width: 75%">
                                    75%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <ShowFooter />
</template>

<style scoped></style>
