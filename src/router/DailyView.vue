<script setup lang="ts">
import HeroSection from "@/components/HeroSection.vue";
import ShowFooter from "@/components/ShowFooter.vue";
import ShowPosts from "@/components/ShowPosts.vue";
</script>

<template>
    <HeroSection />

    <main class="container">
        <section id="information" class="section">
            <h2 class="section-title title">📔 Daily</h2>
            <div class="row">
                <div class="col-md-6">
                    <ShowPosts />
                </div>
            </div>
        </section>
    </main>

    <ShowFooter />
</template>

<style scoped></style>
