<template>
    <div id='main-wrap'>
        <router-view/>
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
#main-wrap {
    position: fixed;
    top: 75px;
    left: $navMenu;
    right: 0;
    bottom: 0;
    border: 30px solid #f7f7f7;
    border-bottom: none;
    background-color: #fff;
    box-sizing: border-box;
}
</style>