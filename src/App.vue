<script setup lang="ts">
import { ref } from "vue";

const isMenuOpen = ref(false);

// 切换菜单显示/隐藏的方法
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
    <!-- 导航栏 -->
    <nav class="navbar">
        <div class="navbar-container">
            <div class="navbar-brand">
                <img
                    src="/favicon.ico"
                    alt="favicon"
                    style="border-radius: 5px"
                    width="22px"
                />
                &nbsp; NeoTeak Team
            </div>
            <button
                class="navbar-toggler"
                id="navbarToggler"
                @click="toggleMenu"
            >
                <i class="fas fa-bars"></i>
            </button>
            <ul class="navbar-nav" :class="{ show: isMenuOpen }" id="navbarNav">
                <li class="nav-item">
                    <RouterLink to="/" class="nav-link active"
                        ><i class="fas fa-home" /> 主页</RouterLink
                    >
                </li>
                <li class="nav-item">
                    <a href="https://neoteak.cn" class="nav-link"
                        ><i class="fas fa-blog" /> Blog</a
                    >
                </li>
                <li class="nav-item">
                    <a href="https://github.com/NeoTeakTeam" class="nav-link"
                        ><i class="fab fa-github" /> Github</a
                    >
                </li>
            </ul>
        </div>
    </nav>

    <div class="alert alert-primary">
        <i class="fas fa-info-circle"></i>
        <strong>提示！</strong>
        <div class="fade-in d-inline">
            博客界面已经迁移至<b
                ><a
                    class="tooltip"
                    href="https://blog.neoteak.cn"
                    style="cursor: pointer !important"
                    >这里 <span class="tooltip-text">blog.neoteak.cn</span></a
                ></b
            >, 现在你看到的是新的主页! 该提示将于 <b>2月份</b> 左右被移除
        </div>
    </div>
    <RouterView />
</template>

<style scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css);
</style>
