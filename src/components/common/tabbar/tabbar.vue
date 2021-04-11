<template>
  <div id="tab-bar">
    <!-- <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/首页.png" alt="" />
      <div>首页</div>
    </div>
    <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/分类.png" alt="" />
      <div>分类</div>
    </div>
    <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/购物车.png" alt="" />
      <div>购物车</div>
    </div>
    <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/我的.png" alt="" />
      <div>我的</div>
    </div> -->

    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabbar",
};
</script>

<style scoped>
#tab-bar {
  display: flex;
  background: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -2px 1px rgba(100, 100, 100, 0.2);
}
</style>