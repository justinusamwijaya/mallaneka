<template lang="html">
  <div class="footer container">
    <div class="text-center center-block">
          <a href="#"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a>
          <a href="#"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a>
          <a href="#"><i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i></a>
          <a href="#"><i id="social-em" class="fa fa-envelope-square fa-3x social"></i></a>
    </div>
</div>
</template>

<script>
export default {
}
</script>

<style scoped lang="css">
.footer{
    margin-top:100px;
}
.social:hover {
   -webkit-transform: scale(1.1);
   -moz-transform: scale(1.1);
   -o-transform: scale(1.1);
}
.social {
   -webkit-transform: scale(0.8);
   /* Browser Variations: */

   -moz-transform: scale(0.8);
   -o-transform: scale(0.8);
   -webkit-transition-duration: 0.5s;
   -moz-transition-duration: 0.5s;
   -o-transition-duration: 0.5s;
}

/*
  Multicoloured Hover Variations
*/

#social-fb:hover {
   color: #3B5998;
}
#social-tw:hover {
   color: #4099FF;
}
#social-gp:hover {
   color: #d34836;
}
#social-em:hover {
   color: #f39c12;
}
</style>
