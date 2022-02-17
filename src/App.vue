<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="/index">主页</el-menu-item>
          <el-menu-item index="/users">用户管理</el-menu-item>
          <el-menu-item index="/msg">消息中心</el-menu-item>
          <el-menu-item index="/orders">订单管理</el-menu-item>
        </el-menu>
        <div class="line"></div>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      activeIndex: "/index",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.push(key);
    },
  },
};
</script>

<style>
</style>
