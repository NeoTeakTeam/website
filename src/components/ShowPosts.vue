<script setup lang="ts">
import { daily } from "@/assets/script/daily";
import RenderPost from "./RenderPost.vue";
</script>

<template>
    <div class="card" v-for="post in daily" v-bind:key="post.id">
        <div class="card-header">
            <i class="fa-solid fa-magnifying-glass"></i>
            <b>{{ post.title }}</b> &nbsp;&nbsp;
            <i style="color: var(--text-color)">{{ post.date }}</i>
        </div>
        <div class="card-body">
            <RenderPost :name="post.point" />
        </div>
    </div>
</template>

<style scoped></style>
