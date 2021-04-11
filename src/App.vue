<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <mainTabBar />
  </div>
</template>

<script>
import mainTabBar from "@/components/content/mainTabBar/mainTabBar";


export default {
  name: 'App',
  components: {
    mainTabBar,
  }
}
</script>

<style>
@import "./assets/css/base.css";
</style>
