<template>
    <div id="header-wrap">
        <div class="pull-left header-icon" @click="navMenuState">
            <svg-icon iconClass="menu" className="menu" />
        </div>
        <div class="pull-right">
            <div class="pull-left user-info">
                管理员
            </div>
            <div class="pull-left header-icon">
                <svg-icon iconClass="exit" className="exit" />
            </div>
        </div>
    </div>
</template>

<script>
import SvgIcon from "../../../icons/SvgIcon.vue";
export default {
    // name: 'layout',
    components: { SvgIcon },
    data() {
        return {};
    },
    methods: {
        // 控制Nav的伸缩
        navMenuState() {
            this.$store.commit('SET_COLLAPSE');
        }
    }
};
</script>

<style lang='scss' scoped>
@import "@/styles/config.scss";
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
    @include webkit(transition, all .3s ease 0s);
}
.header-icon {
    padding: 0 32px;
    svg {
        margin-right: 0;
        margin-bottom: -5px;
        font-size: 25px;
        cursor: pointer;
    }
}
.user-info {
    height: 100%;
    padding: 0 32px;
    border-right: 1px solid #ededed;
    + .header-icon { padding: 0 28px; }
}
//左侧导航展开时 header的偏移量
.open {
    #header-wrap {
        left: $navMenu;
    }
}
//左侧导航关闭时 header的偏移量
.close {
    #header-wrap {
        left: 50px;
    }
}
</style>