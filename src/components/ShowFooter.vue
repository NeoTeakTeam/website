<script setup lang="ts"></script>

<template>
    <!-- 页脚 -->
    <footer class="footer end">
        <div class="container">
            <div class="row">
                <div class="col-md-9">
                    <h5>NeoTeak Team</h5>
                    <p>
                        <i><b>Make everything be easy.</b></i>
                    </p>
                </div>
                <div class="col-md-3">
                    <h5>链接</h5>
                    <ul class="footer-links">
                        <li><RouterLink to="/">主页</RouterLink></li>
                        <li><a href="https://blog.neoteak.cn">Blog</a></li>
                        <li>
                            <a href="https://github.com/NeoTeakTeam">GitHub</a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr />
            <div class="footer-bottom">
                <p>
                    2026 NeoTeak Team. By
                    <a href="https://github.com/AImixAE">AImixAE</a>.
                </p>
                <div class="footer-social">
                    <a
                        href="https://github.com/NeoTeakTeam"
                        class="social-icon tooltip"
                        style="cursor: pointer !important"
                        ><i class="fab fa-github"></i
                        ><span class="tooltip-text">NeoTeak Team</span></a
                    >
                    <a
                        href="https://github.com/AImixAE"
                        class="social-icon tooltip"
                        style="cursor: pointer !important"
                        ><i class="fab fa-github"></i
                        ><span class="tooltip-text">AImixAE</span></a
                    >
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped></style>
