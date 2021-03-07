<template>
    <div id='header-wrap'>
        头部
    </div>
</template>

<script>
export default {
    // name: 'layout',
    components: {},
    data() {
        return {

        }
    }
}
</script>

<style lang='scss' scoped>
@import '@/styles/config.scss';
#header-wrap {
    position: fixed;
    top: 0;
    left: $navMenu;
    right: 0;
    height: 75px;
    background-color: #fff;
    box-shadow: 0px 3px 16px 0px rbga(0, 0, 0, 0.1);
    -webkit-box-shadow: 0px 3px 16px 0px rbga(0, 0, 0, 0.1);
}
</style>