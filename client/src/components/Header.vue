<template>
  <div>
            <el-header>
        <el-menu mode="horizontal" >
          <el-menu-item index="1">
            <img src="../assets/logo.png" alt="" width="80" />
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/home">首页</router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <router-link to="/login">登录</router-link>
          </el-menu-item>
          <el-menu-item index="4">
            <router-link to="/register">注册</router-link>
          </el-menu-item>
          <el-menu-item index="6" class="float-right">
            <router-link to="/cart" >
              <i class="el-icon-shopping-cart-1"></i>
            </router-link>
          </el-menu-item>
        </el-menu>
        
      </el-header>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>