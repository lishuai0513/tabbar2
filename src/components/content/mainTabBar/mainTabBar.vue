<template>
  <div id="app">
    <TatbBar>
      <TabBarItem path='/home' >
        <img slot="item-icon" src="@/assets/img/tabbar/首页.png" alt="" />
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/首页1.png"
        />
        <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem path='/category' >
        <img slot="item-icon" src="@/assets/img/tabbar/分类.png" alt="" />
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/分类1.png"
        />
        <div slot="item-text">分类</div>
      </TabBarItem>
      <TabBarItem path='/cart' >
        <img slot="item-icon" src="@/assets/img/tabbar/购物车.png" alt="" />
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/购物车1.png"
        />
        <div slot="item-text">购物车</div>
      </TabBarItem>
      <TabBarItem path='/profile'>
        <img slot="item-icon" src="@/assets/img/tabbar/我的.png" alt="" />
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/我的1.png"
        />
        <div slot="item-text">我的</div>
      </TabBarItem>
    </TatbBar>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import TatbBar from "@/components/common/tabbar/tabbar";
import TabBarItem from "@/components/common/tabbar/tabbaritem";
export default {
  name: "App",
  components: {
    TatbBar,
    TabBarItem,
  },
};
</script>

<style scoped>
/* @import "@/assets/css/base.css"; */
</style>
