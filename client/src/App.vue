<template>
  <div class="app">
    <Menubar></Menubar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Menubar from '@/components/Menubar'
import Footer from '@/components/Footer'
export default {
  name: 'app',
  components:{
    Menubar,Footer
  }
}
</script>

<style lang="css">
.app {
  background-image: url("http://allhdwallpapers.com/wp-content/uploads/2015/05/sunset-1.jpg");
  background-size: cover;
  padding-bottom: 200px;
}
</style>
