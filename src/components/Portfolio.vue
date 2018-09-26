<template>
  <div class="portfolio">
    <div class="middle-content-wrap-portfolio">
      <div class="portfolio-menu">
        <div class="all cat" @click="activeCatFunAll" :class="{activeCatBg: activeCatAll}">ALLES</div>
        <div class="wordpress cat" @click="activeCatFunW" :class="{activeCatBg: activeCatW}">WORDPRESS</div>
        <div class="jquery cat">JQUERY</div>
        <div class="vuejs cat">VUEJS</div>
      </div>
        <div class="portfolio-container">
             <div class="img-card" v-for="port in ports" :key="port.id">
               <img :src="port.img"/>
             </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Portfolio',
           
        data() {
            return {
              activeCatAll: true,
              activeCatW: false,
                  ports: [ 
                {
                  id: 1,
                  img: require("../assets/static/tsmypleasure.png")
                },
                  {
                  id: 2,
                  img: require("../assets/static/nooijmaatmeubelsdesign.png")
                },
                {
                  id: 3,
                  img: require("../assets/static/sevinga:com.png")
                },
                {
                  id: 4,
                  img: require("../assets/static/jvdzwaagverhuur.png")
                },
                {
                  id: 5,
                  img: require("../assets/static/svOlpyhia.png")
                },
                {
                  id: 6,
                  img: require("../assets/static/Couwenberg.png")
                },
              ],
            }
        },
        methods: {
          activeCatFunAll: function(){
            this.activeCatAll = true;
            this.wordpress = true;
            this.vue = true;
            this.activeCatW = false;
          },
          activeCatFunW: function(){
            this.activeCatW = true;
            this.wordpress = true;
            this.activeCatAll = false;
            this.vue = false;
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

.middle-content-wrap-portfolio {
    padding: 65px 10px;  
    background: #f5f5f5;

    .portfolio-menu {
      padding: 20px;
      text-align: center;
      margin-bottom: 45px;

        .cat {
          padding: 10px 10px;
          display: inline-block;
          width: 180px;
          color: #333333;
          font-weight: 600;
          cursor: pointer;
        }

        .activeCatBg {
          background: #f2d31b;
          color: #fff;
          transition: background-color 650ms ease-in-out;
        }
    }

    .portfolio-container {
      display: flex;
      justify-content: center;
      flex-flow: row wrap;

          .img-card {
            max-width: 400px;
            height: 278px; 

              img {
                width: 100%;
                height: 100%;
                
              }
          }


          .site-link-btn {
            padding: 15px 20px;
            background: #0097A7;
            color: #f5f5f5;
            text-decoration: none;
            font-weight: 700;
            border-radius: 30px;
          }
      }
  
  }
</style>