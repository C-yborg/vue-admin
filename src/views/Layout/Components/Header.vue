<template>
    <div id='header-wrap'>
        <div class="pull-left header-icon asd1"><svg-icon iconClass="menu" className="menu"/></div>
    </div>
</template>

<script>
import SvgIcon from '../../../icons/SvgIcon.vue'
export default {
    // name: 'layout',
    components: {SvgIcon},
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
    line-height: 75px;
}
.header-icon {
    padding:  0 32px;
    svg {
        margin-bottom: -5px;
        font-size: 25px;
    }
}
</style>