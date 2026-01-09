<script setup lang="ts"></script>

<template>
    <!-- 导航栏 -->
    <nav class="navbar">
        <div class="navbar-container">
            <div class="navbar-brand">
                <i class="fas fa-moon"></i> NeoTeak Team
            </div>
            <button class="navbar-toggler" id="navbarToggler">
                <i class="fas fa-bars"></i>
            </button>
            <ul class="navbar-nav" id="navbarNav">
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

    <RouterView />
</template>

<style scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css);
</style>
