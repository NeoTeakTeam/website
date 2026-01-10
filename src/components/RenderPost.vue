<script setup lang="ts">
import { ref } from "vue";
import { createMarkdownRenderer } from "vue-mdr";

const currentPost = ref("请稍等一会喵...");
const loading = ref(false);
const progs = defineProps({
    name: String,
});
const markdownRenderer = createMarkdownRenderer();
const source = ref("/posts/" + progs.name + ".md");

// 定义加载函数
const loadPost = async (filename: string) => {
    try {
        loading.value = true;
        // public 目录下的文件直接通过根路径 / 访问
        const response = await fetch(filename);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        currentPost.value = await response.text();
    } catch (error) {
        console.error("Error loading post:", error);
        currentPost.value = "加载失败，请稍后重试。";
    } finally {
        loading.value = false;
    }
};

// 移除 await 关键字
loadPost(source.value);
</script>

<template>
    <article class="vue-markdown-wrapper">
        <markdownRenderer :source="currentPost" theme="dark" />
    </article>
</template>

<style scoped></style>
