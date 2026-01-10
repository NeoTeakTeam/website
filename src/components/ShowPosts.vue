<script setup lang="ts">
import { daily } from "@/assets/script/daily";
import RenderPost from "./RenderPost.vue";

const reversedDaily = daily.slice().reverse();
</script>

<template>
    <div class="row">
        <div class="col-md-6" v-for="post in reversedDaily" :key="post.id">
            <div class="card">
                <div class="card-header">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <b>{{ post.title }}</b> &nbsp;&nbsp;
                    <i style="color: var(--text-color)">{{ post.date }}</i>
                </div>
                <div class="card-body">
                    <RenderPost :name="post.point" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
