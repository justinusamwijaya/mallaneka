<template>
  <div class="app">
    <Menubar></Menubar>
    <router-view></router-view>
    <Foot></Foot>
  </div>
</template>

<script>
import Menubar from '@/components/Menubar'
import Foot from '@/components/Foot'
export default {
  name: 'app',
  components:{
    Menubar,Foot
  }
}
</script>

<style scoped lang="css">
.app {
  background-image: url("http://allhdwallpapers.com/wp-content/uploads/2015/05/sunset-1.jpg");
  background-size: cover;
  padding-bottom: 100px;
}
</style>
