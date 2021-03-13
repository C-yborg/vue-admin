<template>
    <div id="main-wrap">
        <div class="main-content">
            <div class="content"><router-view /></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'layoutMain',
    components: {},
    data() {
        return {};
    },
};
</script>

<style lang='scss' scoped>
@import "@/styles/config.scss";
#main-wrap {
    height: 100vh;
    // position: fixed;
    // top: 75px;
    // left: $navMenu;
    // right: 0;
    // bottom: 0;
    // border: 30px solid #f7f7f7;
    // border-bottom: none;
    // background-color: #fff;
    // box-sizing: border-box;
}
.main-content {
    position: fixed;
    top: 75px;
    left: $navMenu;
    right: 0;
    bottom: 0;
    padding: 30px;
    border: 30px solid #f7f7f7;
    border-bottom: none;
    background-color: #fff;
    @include webkit(box-sizing, border-box);
    @include webkit(transition, all 0.3s ease 0s);
}
//左侧导航展开时 main的偏移量
.open {
    .main-content {
        left: $navMenu;
    }
}
//左侧导航关闭时 main的偏移量
.close {
    .main-content {
        left: 64px;
    }
}
</style>