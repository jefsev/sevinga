// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import vueScrollto from 'vue-scrollto'

Vue.use(vueScrollto)

library.add(faBars,faTimes,faGithub,faInstagram,faLinkedin,faCircleNotch)

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
    setTimeout(function() {
      document.getElementById('overlay').style.display = "none";
    }, 2000);
    next(); 
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})






