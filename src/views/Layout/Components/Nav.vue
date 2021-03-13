<template>
    <div id="nav-wrap">
        <h1 class="logo"><img src="../../../assets/logo.png" alt="" /></h1>
        <el-menu
            default-active="1-4-1"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            background-color="transparent"
            text-color="#fff"
            active-text-color="#fff"
            router
        >
            <template v-for="(item, index) in routers">
                <el-submenu
                    :key="item.id"
                    :index="index.toString()"
                    v-if="!item.hidden"
                >
                    <template slot="title">
                        <svg-icon
                            :iconClass="item.meta.icon"
                            :className="item.meta.icon"
                        />
                        <span slot="title">{{ item.meta.name }}</span>
                    </template>
                    <el-menu-item
                        v-for="subItem in item.children"
                        :key="subItem.id"
                        :index="subItem.path"
                        >{{ subItem.meta.name }}</el-menu-item
                    >
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: "navMenu",
    components: {},
    data() {
        return {
            routers: this.$router.options.routes,
        };
    },
    computed: {
        isCollapse() {
            return this.$store.state.isCollapse;
        },
    },
    mounted() {
        console.log(this.$router.options.routes);
        console.log(this.isCollapse);
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/styles/config.scss";
#nav-wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: $navMenu;
    height: 100vh;
    background-color: #344a5f;
    @include webkit(transition, all .3s ease 0s);
    svg {
        font-size: 20px;
        margin-right: 10px;
    }
}
.logo {
    img {
        margin: 28px auto 25px;
        width: 92px;
        @include webkit(transition, all .3s ease 0s);
    }
}
.open {
  #nav-wrap {
    width: $navMenu;
    img {
      width: 92px;
    }
  }
}
.close {
  #nav-wrap {
    width: 64px;
    img {
      width: 80%;
    }
  }
}
</style>
