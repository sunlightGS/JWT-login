<template>
  <div>
    <Header />

    <el-main style="min-height: 500px; border: 1px solid red">
      我是首页哦
    </el-main>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  }, 
  mounted () {
    this.$axios.get('/user/userlist')
    .then(res => {
      console.log(res)
      if (res.data.code == '999') {
        this.$router.push('/login')
      }
    })
    .catch(err => {
      console.error(err); 
    });
  },
};
</script>

<style>
</style>