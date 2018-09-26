<template>
  <div id="app">
    <div id="overlay">
      <font-awesome-icon icon="circle-notch" size="5x" />
      <h3 class="loading">BUILDING COOL STUFF<span>.</span><span>.</span><span>.</span></h3>
    </div>
    <Navigation></Navigation>
     <transition name="fade-view" mode="out-in">
    <router-view/>
    </transition>
    <Footer></Footer>
   </div> 
</template>

<script>
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default {
  name: 'App', 
  components: {
    'Navigation': Navigation,
    'Footer': Footer,
  },
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  position: relative;
  margin: 0;
  background: #F5F5F5; 
  padding-bottom: 300px;
}

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#overlay {
        display: block;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9999;
        background: #232323;

        h3 {
          position: absolute;
          top: 25%;
          left: 0;
          right: 0;
          text-align: center;
          color: #F5F5F5;
          font-size: 25px;
          font-weight: 300;
          letter-spacing: 1px;
        }

        .fa-circle-notch {
          position: absolute;
          top: 42%;
          left: 0;
          right: 0;
          margin: 0 auto;
          color: #FFC107;
          -webkit-animation: rotating 1s linear infinite;
	        -moz-animation: rotating 1s linear infinite;
	        -ms-animation: rotating 1s linear infinite;
	        -o-animation: rotating 1s linear infinite;
	        animation: rotating 1s linear infinite;
        }
    }

    .fade-view-enter-active,
    .fade-view-leave-active {
      transition-duration: 0.4s;
      transition-property: opacity;
      transition-timing-function: ease;
    }

    .fade-view-enter,
    .fade-view-leave-active {
      opacity: 0
    }



    @keyframes rotating {
      from
        {
        transform: rotate(0deg);
        -o-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        }
      to
        {
        transform: rotate(360deg);
        -o-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        }
	      }
@-webkit-keyframes rotating {
      from
        {
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        }
      to
        {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        }
      }

@keyframes blink {
    0% {
      opacity: .2;
    }
    20% {
      opacity: 1;
    }
    100% {
      opacity: .2;
    }
}

.loading span {
    animation-name: blink;
    animation-duration: 1.4s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
}

.loading span:nth-child(2) {
    animation-delay: .2s;
}

.loading span:nth-child(3) {
    animation-delay: .4s;
}
</style>
