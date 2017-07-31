<template>
  <div>
   <ul>
    <li><a class="logo" href="#">LOGO</a></li>
    <li><a class="menus" href="#">Template</a></li>
    <li><a class="menus" href="#">Fitur</a></li>
    <li><a class="menus" href="#">Harga</a></li>
    <li><a class="login" href="#">Login</a></li>
   </ul>
  </div>
</template>
<script>
export default {

}
</script>

<style scoped lang="css">
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

.menus {
    float: left;
}

li a {
    color: white;
    text-align: center;
    padding: 14px 16px;
    font-size: 20px;
}

.logo{
  font-size: 30px;
  float: left;
}

.login{
  float:right;
  margin-right: 20px;
}

</style>
