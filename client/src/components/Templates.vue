<template lang="html">
  <div>
    <div id="myCarousel" class="carousel slide">
      <div class="carousel-inner">
        <div class="active item">
          <div class="fill">
            <div class="container">
              <div class="blocky"><img class="content" src='https://www.myresponsee.com/wp-content/uploads/free-responsive-design-template.jpg' /></div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="fill">
            <div class="container">
              <div class="blocky"><img class="content" src='http://static.wixstatic.com/media/bb2140d03a054ab3ae7829f7a5c0fff1.jpg' /></div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="fill">
            <div class="container">
              <div class="blocky"><img class="content" src='https://s.tmimgcdn.com/scr/52200/responsive-wordpress-thema-over-milieu_52293-original.jpg?width=232&height=232' /></div>
            </div>
          </div>
        </div>
    	</div>
      <a class="left carousel-control" href="#myCarousel" data-slide="prev">‹</a>
    	<a class="right carousel-control" href="#myCarousel" data-slide="next">›</a>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">

.content{

  width: 700px;
  height: 400px;
  box-shadow: 10px 10px 20px black;
}
.carousel,.item,.active{height:100%;}
.fill{width:100%;height:100%;background-position:center;margin-bottom: 50px;}
.carousel-inner{height:100%;padding:1px;}
.carousel-control{top:49%;left:5px;width:50px;height:50px;margin-top:-20px;font-size:100px;font-weight:100;line-height:30px;}


.blocky {margin-left:19%;margin-top:7%;}

.carousel-pills span:hover {
    background: none repeat scroll 0 0 #EEEEEE;
}
</style>
