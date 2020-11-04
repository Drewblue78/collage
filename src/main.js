import "./plugins/bootstrap_vue"
import Vue from 'vue';
import App from './App.vue';


Vue.config.productionTip = false;

window.app = new Vue({
  // $root
  data: {
    phaser: null,
    user: {
      loggedIn: false,
      username: "Not logged in"
    }
  },
  render: (h) => h(App),
}).$mount('#app');
