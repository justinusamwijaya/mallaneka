<template lang="html">
  <div class="nav">
  <nav class="navbar" role="navigation">
  <div class="container-fluid">
    <div class="navbar-header">
      <a href="#" class="nav navbar-nav"><img class ="logo" src="http://diysolarpanelsv.com/images/mall-clipart-black-and-white-48.png"></a>
    </div>

    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><router-link class="menus" to="/">Template</router-link></li>
        <li><router-link class="menus" to="/">Fitur</router-link></li>
        <li><router-link class="menus" to="/">Harga</router-link></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
          <a class="menus logout" v-if="isLogin === true" v-on:click="logout()"><b>Logout</b></a>
        <li class="dropdown">
          <a v-if="isLogin === false" class="menus dropdown-toggle" data-toggle="dropdown"><b>Login/SignUp</b> <span class="caret"></span></a>
      <ul id="login-dp" class="dropdown-menu">
        <li>
           <div class="row">
              <div class="col-md-12">
                Login
                <div class="social-buttons">
                  <button id="fb-login" type="button" onclick="loginFB()" class="btn btn-fb"><i class="fa fa-facebook"></i> Facebook</a></button>
                  <button type="button" class="btn btn-danger btn-gplus" @click="signInWithGoogle"><i class="fa fa-google-plus left"></i> Google +</button>
                </div>
                                or
                 <form id="login-nav">
                     <div class="form-group">
                        <label class="sr-only" for="exampleInputEmail2">Username</label>
                        <input type="text" v-model="username" class="form-control" id="exampleInputEmail2" placeholder="Username" required>
                     </div>
                     <div class="form-group">
                        <label class="sr-only" for="exampleInputPassword2">Password</label>
                        <input type="password" v-model="password" class="form-control" id="exampleInputPassword2" placeholder="Password" required>

                     </div>
                     <div class="form-group">
                        <button type="submit" v-on:click="signin()" class="btn btn-primary btn-block">Sign in</button>
                     </div>
                     <div class="checkbox">
                       <!-- <label>
                       <input type="checkbox"> keep me logged-in
                       </label> -->
                    </div>
                 </form>
              </div>
              <div class="bottom text-center">
                New here ? <a href="#" data-toggle="modal" data-target="#signup-modal"><b>Join Us</b></a>
              </div>
           </div>
        </li>
      </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
    <div class="modal fade" id="signup-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
            <div class="modal-dialog">
            <div class="loginmodal-container">
              <h1>Sign Up</h1><br>
              <form>
              <input type="text" v-model="username" placeholder="Username">
              <input type="password" v-model="password" placeholder="Password">
              <input type="email" v-model="email" placeholder="Email">
              <input type="submit" v-on:click="signup()" class="login loginmodal-submit" value="Sign Up">
              </form>
              <div class="login-help">
              </div>
            </div>
        </div>
    </div>

  </div><!-- /.container-fluid -->
  </nav>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data (){
    return {
      isLogin:false,
      username: "",
      password: "",
      email: ""
    }
  },
  methods:{
    signInWithGoogle() {
     var provider = new firebase.auth.GoogleAuthProvider();
     provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
     firebase.auth().signInWithPopup(provider)
     .then(user => {
       window.open("https://www.gmail.com","","location=no")
       console.log('user',user)
     })
     .catch(error => {
       console.log('error',error)
       })
     },
    checkLogin(){
      var token = JSON.parse(localStorage.getItem('token'))
      console.log(token);
      let self = this;
      if(token){
        self.isLogin = true
        console.log(`masuk tes`);
        console.log(token);
      }
      else if(token === "Invalid Username"){
        self.isLogin = false
        alert('Invalid Username')
      }
      else if(token === "Invalid Password"){
        self.isLogin = false
        alert('Invalid Password')
      }
      else if (token === null){
        self.isLogin = false
        console.log(`masuk null`);
      }
    },
    logout(){
      this.isLogin = false
      localStorage.clear()
      window.location = '/'
    },
    signup(){
      let self = this;
      axios.post(`http://localhost:3000/signup`,{
        username: self.username,
        password: self.password,
        email: self.email
      })
      .then(response=>{
        alert(`${self.username} Registered!`)
        location.reload()
      })
      .catch(err=>{
        console.log(err);
      })
    },
    signin(){
      let self = this;
      axios.post('http://localhost:3000/login',{
        username: self.username,
        password: self.password
      })
      .then(response=>{
        if(response.data === "Username already in use!"){
          alert(response.data)
        }
        else{
          alert(`Welcome to Battleship War ${self.username}`)
          localStorage.setItem('token',JSON.stringify(response.data))
           window.location = '/'
        }
      })
      .catch(err=>{
        console.log(err);
      })
    }
  },
  created: function(){
    this.checkLogin()
  },
  computed:{
    user(){
      var userdata = JSON.parse(localStorage.getItem('token'))
      if(userdata !== "Invalid Username" || userdata !== "Invalid Password" || userdata !== null){
        return userdata
      }
    }
  }
}
</script>

<style lang="css" scoped>
.menus{
  color:white;
}

.logout{
  margin-top:10px;
}
.logo{
  width:50px;
}
#login-dp{
    min-width: 250px;
    padding: 14px 14px 0;
    overflow:hidden;
    background-color:rgba(255,255,255,.8);
}
#login-dp .help-block{
    font-size:12px
}
#login-dp .bottom{
    border-top:1px solid #ddd;
    clear:both;
    padding:14px;
}
#login-dp .social-buttons{
    margin:12px 0
}
#login-dp .social-buttons a{
    width: 49%;
}
#login-dp .form-group {
    margin-bottom: 10px;
}
.btn-fb{
    color: #fff;
    background-color:#3b5998;
}
.btn-fb:hover{
    color: #fff;
    background-color:#496ebc
}
.btn-tw{
    color: #fff;
    background-color:#55acee;
}
@media(max-width:768px){
    #login-dp{
        background-color: inherit;
        color: #fff;
    }
    #login-dp .bottom{
        background-color: inherit;
        border-top:0 none;
    }
}
.loginmodal-container {
  padding: 30px;
  max-width: 350px;
  width: 100% !important;
  background-color: #F7F7F7;
  margin: 0 auto;
  border-radius: 2px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  font-family: roboto;
}
.loginmodal-container h1 {
  text-align: center;
  font-size: 1.8em;
  font-family: roboto;
}
.loginmodal-container input[type=submit] {
  width: 100%;
  display: block;
  margin-bottom: 10px;
  position: relative;
}
.loginmodal-container input[type=text], input[type=password] {
  height: 44px;
  font-size: 16px;
  width: 100%;
  margin-bottom: 10px;
  -webkit-appearance: none;
  background: #fff;
  border: 1px solid #d9d9d9;
  border-top: 1px solid #c0c0c0;
  /* border-radius: 2px; */
  padding: 0 8px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
}
.loginmodal-container input[type=text]:hover, input[type=password]:hover, textarea:hover {
  border: 1px solid #b9b9b9;
  border-top: 1px solid #a0a0a0;
  -moz-box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
  -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
}
.loginmodal-container input[type=text], input[type=email] {
  height: 44px;
  font-size: 16px;
  width: 100%;
  margin-bottom: 10px;
  -webkit-appearance: none;
  background: #fff;
  border: 1px solid #d9d9d9;
  border-top: 1px solid #c0c0c0;
  /* border-radius: 2px; */
  padding: 0 8px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
}
.loginmodal-container textarea {
  height: 100%;
  font-size: 16px;
  width: 100%;
  margin-bottom: 10px;
  -webkit-appearance: none;
  background: #fff;
  border: 1px solid #d9d9d9;
  border-top: 1px solid #c0c0c0;
  /* border-radius: 2px; */
  padding: 0 8px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
}
.loginmodal-container input[type=text]:hover, input[type=email]:hover, textarea:hover {
  border: 1px solid #b9b9b9;
  border-top: 1px solid #a0a0a0;
  -moz-box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
  -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
}
.loginmodal {
  text-align: center;
  font-size: 14px;
  font-family: 'Arial', sans-serif;
  font-weight: 700;
  height: 36px;
  padding: 0 8px;
/* border-radius: 3px; */
/* -webkit-user-select: none;
  user-select: none; */
}
.loginmodal-submit {
  /* border: 1px solid #3079ed; */
  border: 0px;
  color: #fff;
  text-shadow: 0 1px rgba(0,0,0,0.1);
  background-color: #4d90fe;
  padding: 17px 0px;
  font-family: roboto;
  font-size: 14px;
  /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#4787ed)); */
}
.loginmodal-submit:hover {
  /* border: 1px solid #2f5bb7; */
  border: 0px;
  text-shadow: 0 1px rgba(0,0,0,0.3);
  background-color: #357ae8;
  /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#357ae8)); */
}
.loginmodal-container a {
  text-decoration: none;
  color: #666;
  font-weight: 400;
  text-align: center;
  display: inline-block;
  opacity: 0.6;
  transition: opacity ease 0.5s;
}
.login-help{
  font-size: 12px;
}
</style>
