<template>
  <div class="Home">
    <div class="middle-content-wrap">
      <div class="personal-photo-wrap">
        <img src="../assets/static/photo-1.jpg" alt="">
      </div>
      <div class="text-wrap">
        <h2>Hoi, Ik ben Jeffrey.</h2>
      <p>Ik werk als freelance web-developer en ben vader van twee. Ik ben zelf onderwezen Programmeur en leer elke dag meer over het vak. Check <span v-scroll-to="'#toSkills'">{ hier }</span> mijn Developer skills. Naast familie en werk doe ik ook graag aan fitness.</p> 
      </div> 
    </div>

    <div class="toolbelt-wrap">
      <img id="toSkills" class="clickme-img" src="../assets/static/click-me.png" alt="">
      <div class="header-wrap" v-on:click="unfold">
        <h2>Skills</h2>
      </div> 
      <transition name="fade">
      <div id="unfoldThis"  class="toolbelt-container flex-wrap-row">
        <div class="toolbelt-logo"><img class="floatLeft" src="../assets/static/HTML.png" alt="HTML">
          <div class="progress">
            <div id="nineFive" class="progress-bar"></div>
          </div>
      </div>
        <div class="toolbelt-logo"><img class="floatLeft" src="../assets/static/CSS.png" alt="CSS">
        <div class="progress">
            <div id="nineFive" class="progress-bar"></div>
          </div>
        </div>
        <div class="toolbelt-logo"><img class="floatLeft" src="../assets/static/SASS.png" alt="SASS">
        <div class="progress">
            <div id="sevenFive" class="progress-bar"></div>
          </div>
        </div>
        <div class="toolbelt-logo"><img class="floatLeft" src="../assets/static/JS.png" alt="Javascript">
        <div class="progress">
            <div id="five" class="progress-bar"></div>
          </div>
        </div>
        <div class="toolbelt-logo"><img class="floatLeft" src="../assets/static/VUE.png" alt="VUE.js">
        <div class="progress">
            <div id="four" class="progress-bar"></div>
          </div>
        </div>
        <div class="toolbelt-logo"><img class="floatLeft" src="../assets/static/jquery.png" alt="jQuery">
        <div class="progress">
            <div id="eightFive" class="progress-bar"></div>
          </div>
        </div>
        <div class="toolbelt-logo"><img class="floatLeft" src="../assets/static/php.png" alt="PHP">
        <div class="progress">
            <div id="three" class="progress-bar"></div>
          </div>
        </div>
      </div>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() { 
      return {
      showIt: true
      }     
    },
    methods: {
      unfold: function () {
        let unfoldThis = document.getElementById('unfoldThis');
        let progressBar = document.querySelectorAll('.progress');
        let floatLeft = document.querySelectorAll('.floatLeft');

        if (unfoldThis.classList.contains('flex-wrap-row')  ){
          unfoldThis.classList.remove('flex-wrap-row');
          /*// Add/remove classes to trigger CSS transistion //*/
          unfoldThis.classList.add('not-updated');
           setTimeout(function() {
             unfoldThis.classList.remove('not-updated');
             unfoldThis.classList.add('updated');
            }, 100);

          for (let i = 0; i < progressBar.length; i++){
            progressBar[i].style.display = 'block';
            /*// Add/remove classes to trigger CSS transistion //*/
            progressBar[i].classList.add('not-updated-opacity');
              setTimeout(function() {
              progressBar[i].classList.remove('not-updated-opacity');
              progressBar[i].classList.add('updated-opacity');
              }, 400);
              for (let x = 0; x < floatLeft.length; x++){
                floatLeft[x].style.float = 'left';
                /*// Add/remove classes to trigger CSS transistion //*/
                floatLeft[x].classList.add('not-updated-opacity');
                  setTimeout(function() {
                  floatLeft[x].classList.remove('not-updated-opacity');
                  floatLeft[x].classList.add('updated-opacity');
                  }, 400);               
            }
          }
        } else {
          unfoldThis.classList.add('flex-wrap-row');
          unfoldThis.classList.remove('updated');
          unfoldThis.classList.add('not-updated');
           for (let i = 0; i < progressBar.length; i++){
              progressBar[i].style.display = 'none';
              progressBar[i].classList.remove('updated-opacity');
              for (let x = 0; x < floatLeft.length; x++){
                  floatLeft[x].style.float = 'none';
                  floatLeft[x].classList.remove('updated-opacity');
            }
          }
        }
      }
    }
}
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .flex-wrap-row {
    display: flex;
    flex-direction: wrap;
    justify-content: center;
    flex-wrap: wrap;
  }

  .middle-content-wrap {
    width: 100%;
    padding-bottom: 40px;  
    background: #f5f5f5;

    .personal-photo-wrap {
      position: absolute;
      width: 250px;
      height: 250px;
      left: 0;
      right: 0;
      margin: auto; 
      margin-top: -125px;
      border: 5px solid #232323;
      border-radius: 50%;
      overflow: hidden;
      z-index: 999;

      img {
        width: 100%;
        height: 100%;       
      }
    }

    .text-wrap {
      max-width: 960px;
      padding: 15px;
      margin: 0 auto;
      text-align: center;
      h2 {
        margin: 0;
        padding-bottom: 20px;
        color: #333;
        padding-top: 150px;
        font-weight: 500;
        font-size: 34px;  
      }
      p {
        font-size: 20px;
        letter-spacing: 1px;
        font-weight: 300;
        line-height: 25px;
      }

      span {
        cursor: pointer;
        text-decoration: none;
        color: #FFC107;
      }
    }
  }


    .toolbelt-wrap {
      position: relative;
      max-width: 960px;
      margin: 0 auto;
      margin-bottom: 100px;
      padding: 5px;
      text-align: center;

      .clickme-img {
        margin-left: -250px;
        margin-bottom: 20px;
        transform: rotate(18deg);
      }
      
      .header-wrap {
        position: relative;
        background: #0097A7;
        width: 150px;
        padding: 15px;
        margin: 0 auto;
        margin-bottom: 30px;
        border: 1px solid #0097A7;
        border-radius: 30px;
        z-index: 10;
        transition: 0.3s ease-in-out;
          h2 {
          font-weight: 300;
          color: #f5f5f5;
          font-size: 16px;
          margin: 0;
        }
      }



      .header-wrap:hover {
        cursor: pointer;
        background: #0097A7;
      }

      .toolbelt-container {
        padding: 15px;
        
        .toolbelt-logo {
          padding: 1px;
          width: auto;
          height: 90px;
          margin: 0 15px;

        img {
          width: auto;
          height: 100%;
          }
        }
      }
    }

.not-updated{
        height: 124px;
        transition: height 0.6s ease-in-out;
        -moz-transition: height 0.6s ease-in-out;
        -webkit-transition: height 0.6s ease-in-out;
}

.updated{
        visibility: visible;
        height: 664px;
        transition: height 0.6s ease-in-out;
        -moz-transition: height 0.6s ease-in-out;
        -webkit-transition: height 0.6s ease-in-out;
}

.not-updated-opacity{
        visibility: hidden;
        opacity: 0;
        height: 0px;
        border: 0px;
}
.updated-opacity{
        visibility: visible;
        opacity: 1;
        transition: opacity 1.2s ease-in-out;
        -moz-transition: opacity 1.2s ease-in-out;
        -webkit-transition: opacity 1.2s ease-in-out;
}

.progress {
  display: none;
  padding: 2px; 
  max-width: 800px;
  margin-top: 35px;
  margin-left: 100px;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08);
  transition-property: display 1s ease;
}
.progress-bar {
  position: relative;
  height: 12px;
  border-radius: 4px;
	background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.05));
  transition: 0.4s linear;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.25), inset 0 1px rgba(255, 255, 255, 0.1);
}

#nineFive  {
  width: 95%;
  background-color: #f2d31b;
}

#eightFive  {
  width: 85%;
  background-color: #f2d31b;
}

#sevenFive  {
  width: 75%;
  background-color: #f2d31b;
}

#five  {
  width: 50%;
  background-color: #f2d31b;
}

#four  {
  width: 40%;
  background-color: #f2d31b;
}

#three  {
  width: 30%;
  background-color: #f2d31b;
}



@keyframes slideIn {
  0% {
     -o-transform: translate(-200%, 0);
        -ms-transform: translate(-200%, 0);
        -moz-transform: translate(-200%, 0);
        -webkit-transform: translate(-200%, 0);
    transform: translate(-200%, 0);
  }
  100% {
     -o-transform: translate(0, 0);
        -ms-transform: translate(0, 0);
        -moz-transform: translate(0, 0);
        -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
} 

@media only screen and (max-width: 450px) {
  .middle-content-wrap {
  .text-wrap {
      h2 {
        font-size: 30px;
      }
      p {
        font-size: 15px;
      }
    }
  }
  .toolbelt-logo {
    flex-basis: 35%;
  }

  .not-updated{
        height: 394px;
  }
  .toolbelt-wrap {
    .clickme-img {
      margin-left: -150px;
    }
  }
}

@media only screen and (max-width: 800px) {
  .toolbelt-logo {
    flex-basis: 25%;
  }

  .not-updated{
        height: 394px;
  }
  .toolbelt-wrap {
    .clickme-img {
      margin-left: -150px;
    }
  }
}
</style>
