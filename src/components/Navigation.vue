<template>
  <div class="nav-wrap">
    <div class="logo-wrap">
      <img src="../assets/static/sevinga-logo.png" alt="">
    </div>
          <div @click="show = !show, hide = !hide" class="menu-btn">
            <font-awesome-icon v-if="!hide" id="closed" icon="bars" />
            <font-awesome-icon v-if="hide" id="open" icon="times" />
          </div>
    <transition name="fade">
      <nav v-if="show">
        <router-link @click.native="show = !show, hide = !hide" to="/">Home</router-link>
        <router-link @click.native="show = !show, hide = !hide" to="/Portfolio">Portfolio</router-link> 
      </nav>
    </transition>
        <div class="header-wrapper">
      <h1>{{ pageTitle }}</h1>
      <h2>{{ pageByTitle }}</h2>
      <div class="social-icons-wrapper flex-wrap-row">
        <div class="icon-wrapper">
          <a href="https://github.com/jefsev" target="_blank"><font-awesome-icon :icon="['fab','github']" size="3x" /></a>
        </div>
        <div class="icon-wrapper">
          <a href="https://www.instagram.com/j_sevinga/" target="_blank"><font-awesome-icon :icon="['fab','instagram']" size="3x" /></a>
        </div>
        <div class="icon-wrapper">
          <a href="https://www.linkedin.com/in/jeffrey-sevinga-46852a11b/" target="_blank"><font-awesome-icon :icon="['fab','linkedin']" size="3x" /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
name: 'Navigation',
created () {
  let id = this.$router.currentRoute.path
        if (id == '/'){
          this.homie()
        } else if (id == '/Portfolio'){
          this.port()
        } 
},
data() {    
      return {
        show: false,
        hide: false,
        pageTitle: '',
        pageByTitle: ''
      } 
  },
methods: {  
  homie () {
    this.pageTitle = '{ Front-end Developer }'
    this.pageByTitle = 'Jeffrey Sevinga'
  },
  port () {
    this.pageTitle = 'Portfolio'
    this.pageByTitle = 'Mijn laatste werk'
  }
},
watch: { 
    '$route' (to, from) {
      let id = this.$router.currentRoute.path
        if (id == '/'){
          this.homie()
        } else if (id == '/Portfolio'){
          this.port()
        }
    }
  }
}
</script>

<style scoped lang="scss">

  .flex-wrap-row {
    display: flex;
    flex-direction: wrap;
    justify-content: center;
    flex-wrap: wrap;
  }

 nav,
 .menu-btn,
 .logo-wrap {
   position: absolute;
 }

 .logo-wrap {
   top: 0;
   left: 0;
   width: 180px;
   padding: 15px;
   height: auto;
   z-index: 999;

   img {
     width: 100%;
     height: 100%;
   }
 }

 nav {
   background: #232323;
   border-bottom: 1px solid rgba(255,255,255,0.2);
   height: 90px;
   width: 100%;
   margin: 0 auto;
   padding-top: 38px;
   padding-bottom: 25px;
   padding-right: 100px;
   text-align: right;
   z-index: 10;

   a {
    padding: 15px 30px 15px 30px;
    font-size: 12px;
    margin: 0;
    color: #F5F5F5;
    opacity: 0.3;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1.5px;
    transition: 0.3s ease-in-out;
   } 
   a:hover {
      opacity: 1;
    }
 }

  .header-wrapper {
    height: 550px;
    width: 100%;
    background: #232323;
    background-image: url("../assets/static/bgNewW.jpg");
    background-size: cover;
    padding-top: 140px;
    text-align: center;

    h1, h2 {
      color: #f5f5f5;
    }

    h1 {
      margin-bottom: 15px;
      font-size: 3em;
      letter-spacing: 2px;
    }

    h2 {
      margin: 0;
      font-weight: 300;
      letter-spacing: 1px;
      opacity: 0.6;
    } 

    .social-icons-wrapper {
      padding-top: 55px;

      .icon-wrapper {
        margin: 15px 25px;
        -o-transition: transform .8s ease-in-out;
        -ms-transition: transform .8s ease-in-out;
        -moz-transition: transform .8s ease-in-out;
        -webkit-transition: transform .8s ease-in-out;
        transition: transform .8s ease-in-out;
        
        a {
          color: #0097A7;
          opacity: 0.4;
          z-index: 10;
          
        }

        a:hover {
          opacity: 0.8;
        }
      }

      .icon-wrapper:hover {
          -o-transform: rotateY(360deg);
        -ms-transform: rotateY(360deg);
        -moz-transform: rotateY(360deg);
        -webkit-transform: rotateY(360deg);
        transform: rotateY(360deg);
      }
    }
  }

 .menu-btn {
   background: #FFC107;
   right: 0;
   width: 60px;
   padding: 2.5px 5px;
   font-size: 30px;
   margin: 25px;
   color: #FFFFFF;
   text-align: center;
   z-index: 999;
   cursor: pointer;
 }

.router-link-exact-active {
  opacity: 1;
}

 .fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: 0.7s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

.fade-leave-active,
.fade-enter-active {
  transition: 0.6s;
}

.fade-enter {
  transform: translate(0, -200%);
}
.fade-leave-to {
  transform: translate(0, -200%);
}

@media only screen and (max-width: 760px) {
  .header-wrapper {
  .social-icons-wrapper {
      display: none;
  }
  }
  nav {
    height: 550px;
    padding-bottom: 80px;
    padding-top: 114px;
    text-align: left;
    a {
        display: block;
        font-size: 18px;
      }
  }
}
</style>