<template>
  <div class="footer">
    <footer>
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
      <div class="sitemap">
        <router-link to="/">Home</router-link>
        <router-link to="/Portfolio">Portfolio</router-link>
      </div>
      <div class="copyright">
        <p>&copy; websev 2018</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}   
</script>

<style scoped lang="scss">
  .flex-wrap-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }

  .footer {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 300px;
    background: #232323;

  .social-icons-wrapper {
      padding-top: 65px;

      .icon-wrapper {
        margin: 15px 25px;
        -o-transition: transform .8s ease-in-out;
        -ms-transition: transform .8s ease-in-out;
        -moz-transition: transform .8s ease-in-out;
        -webkit-transition: transform .8s ease-in-out;
        transition: transform .8s ease-in-out;
        
        a {
          color: #F5F5F5;
          opacity: 0.4;
          z-index: 10;
          
        }

        a:hover {
          opacity: 0.8;
        }
      }
    }

    .sitemap {
      padding: 25px 5px;
      text-align: center;

      a {
        padding: 10px;
        color:#F5F5F5;
        opacity: 0.4;
        text-decoration: none;
        line-height: 25px;
      }

      a:hover {
        opacity: 1;
      }
    }

    .copyright {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      text-align: center;
      color: #F5F5F5;
      opacity: 0.4;
      font-size: 13px;
    }
  }

@media only screen and (max-width: 450px) {
 .footer {
   .sitemap {
     a {
       font-size: 12px;   
       }
   }
 }
}
</style>