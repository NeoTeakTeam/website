<script setup lang="ts">
import { ref } from "vue";
import { createMarkdownRenderer } from "vue-mdr";

const currentPost = ref("请稍等一会喵...");
const loading = ref(false);
const props = defineProps({
    name: { type: String, required: true },
    basepath: { type: String, required: false },
});

const basepath = props.basepath ? props.basepath : "/posts";

const markdownRenderer = createMarkdownRenderer();
const source = ref(basepath + "/" + props.name + ".md");

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

// 监听文件变化并自动刷新
const lastModified = ref<number>(0);
const checkInterval = ref<number | null>(null);

const checkFileModification = async () => {
    try {
        const response = await fetch(source.value, { method: "HEAD" });
        const modified = response.headers.get("last-modified");
        
        if (modified) {
            const modifiedTime = new Date(modified).getTime();
            if (lastModified.value && modifiedTime > lastModified.value) {
                loadPost(source.value);
            }
            lastModified.value = modifiedTime;
        }
    } catch (error) {
        console.error("Error checking file modification:", error);
    }
};

const startWatching = () => {
    loadPost(source.value);
    // 每 5 秒检查一次文件是否被修改
    checkInterval.value = window.setInterval(checkFileModification, 5000);
};

const stopWatching = () => {
    if (checkInterval.value) {
        clearInterval(checkInterval.value);
    }
};

import { onMounted, onUnmounted } from "vue";

onMounted(() => {
    startWatching();
});

onUnmounted(() => {
    stopWatching();
});
</script>

<template>
    <article class="vue-markdown-wrapper">
        <markdownRenderer :source="currentPost" theme="dark" />
    </article>
</template>

<style scoped></style>
