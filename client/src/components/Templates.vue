<template lang="html">
  <div>
    <div id="myCarousel" class="carousel slide">
      <div class="carousel-inner">
        <div class="active item">
          <div class="fill" style="background-image:url('http://www.portalapp.com/images/bg1.jpg');">
            <div class="container">
              <div class="blocky"><h1 class="pull-left pull-middle light-color"><span><a href="#">Single Page App</a></span></h1></div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="fill" style="background-image:url('http://www.portalapp.com/images/bg1.jpg');">
            <div class="container">
              <div class="blocky"><h1 class="pull-left pull-middle light-color"><span><a href="#">Make Fast Updates</a></span></h1></div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="fill" style="background-image:url('http://www.portalapp.com/images/bg1.jpg');">
            <div class="container">
              <div class="blocky"><h1 class="pull-left pull-middle light-color"><span><a href="#">About Your Brand</a></span></h1></div>
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

.carousel,.item,.active{height:100%;}
.fill{width:100%;height:100%;background-position:center;background-size:cover;}
.carousel-inner{height:100%;}
.carousel-control{top:49%;left:5px;width:50px;height:50px;margin-top:-20px;font-size:100px;font-weight:100;line-height:30px;color:#ffffff;text-align:center;background:transparent;border:0;}
.light-color , .light-color a {color:#f7f7f7;text-decoration:none}

.blocky {margin-left:8%;margin-top:9%;}
.blocky h1, .blocky h2 {background-color:rgba(1,240,1,0.3);display:inline;text-transform:none;font-weight:800;color:white;line-height:52px;}
.blocky h1 span, .blocky h2 span{padding:20px;color:#fff;}

.carousel-pills {
    bottom: 15%;
    display: block;
    left: 0;
    *position: absolute;
	position: relative;
    right: 10px;
    text-align: center;
}
.carousel-pills span {
    background: none repeat scroll 0 0 #222222;
    border-radius: 15px 15px 15px 15px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25), 0 -1px 0 rgba(0, 0, 0, 0.1) inset;
    cursor: pointer;
    display: inline-block;
    height: 12px;
    margin: 0 5px;
    width: 12px;
}
.carousel-pills span.active-pill {
    background-color: #F8F8F8;
    background-image: -moz-linear-gradient(center top , #FFFFFF, #EEEEEE);
    background-repeat: repeat-x;
}
.carousel-pills span:hover {
    background: none repeat scroll 0 0 #EEEEEE;
}
</style>
