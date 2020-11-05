import "./plugins/bootstrap_vue"
import Vue from 'vue';
import App from './App.vue';
import Ajax from './Ajax'


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
  async mounted() {
    let res = await Ajax.$get("/auth/check")
    if (res.success) {
      this.user.loggedIn = true;
      this.user.username = res.username;
    } else {
    }
  },
}).$mount('#app');
