<script setup lang="ts">
import { updateContent } from "@/assets/script/UpdateContent";
</script>

<template>
    <!-- 主页标题 -->
    <header id="home" class="hero-section">
        <div class="container">
            <h1 class="hero-title fade-in">NeoTeak Team</h1>
            <p class="hero-subtitle fade-in">
                <i><b>Make everything be easy.</b></i>
            </p>
            <div class="hero-actions fade-in">
                <a
                    class="btn btn-primary btn-lg btn-ripple"
                    id="blogLink"
                    href="https://blog.neoteak.cn"
                >
                    <i class="fas fa-blog"></i> 博客页面
                </a>
                <a
                    class="btn btn-outline btn-lg btn-ripple"
                    id="githubLink"
                    href="https://github.com/NeoTeakTeam"
                >
                    <i class="fab fa-github"></i> GitHub
                </a>
                <btn
                    class="btn btn-outline btn-lg btn-ripple"
                    id="githubLink"
                    @click="updateContent()"
                >
                    <i class="fa-solid fa-arrows-rotate"></i> 更新内容
                </btn>
            </div>
        </div>
    </header>
</template>

<style scoped></style>
