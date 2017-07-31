<template>
  <div class="app">
    <Menubar></Menubar>
    <router-view></router-view>
  </div>
</template>

<script>
import Menubar from '@/components/Menubar'
export default {
  name: 'app',
  components:{
    Menubar
  }
}
</script>

<style lang="css">
.app {
  background-image: url("http://allhdwallpapers.com/wp-content/uploads/2015/05/sunset-1.jpg");
  background-size: cover;
  height:2000px;
}
</style>
