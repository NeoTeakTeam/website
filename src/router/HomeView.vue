<script setup lang="ts">
import { ref } from "vue";

import HeroSection from "@/components/HeroSection.vue";
import ShowFooter from "@/components/ShowFooter.vue";
import RenderPost from "@/components/RenderPost.vue";

const showHeaderTip = ref(true);
const toggleHeaderTip = () => {
    showHeaderTip.value = !showHeaderTip.value;
};
</script>

<template>
    <p class="alert alert-primary" v-if="showHeaderTip">
        <i class="fas fa-info-circle"></i>
        <strong>提示！</strong>
        <span class="fade-in">
            博客界面已经迁移至<b
                ><a
                    class="tooltip"
                    href="https://blog.neoteak.cn"
                    style="cursor: pointer !important"
                    >这里 <span class="tooltip-text">blog.neoteak.cn</span></a
                ></b
            >, 现在你看到的是新的主页! 该提示将于 <b>2月份</b> 左右被移除
            <button
                @click="toggleHeaderTip"
                class="btn btn-sm btn-outline ml-1"
            >
                隐藏 <i>(临时)</i>
            </button>
        </span>
    </p>

    <HeroSection title="NeoTeak Team" subtitle="Make everything be easy." />

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
                            <RenderPost name="About-Responsible-for-content" />
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <i class="fa fa-circle-info"></i> 小小提示
                        </div>
                        <div class="card-body">
                            <RenderPost name="About-Tiny-tips" />

                            <div class="progress mt-1">
                                <div class="progress-bar" style="width: 75%">
                                    80%
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
