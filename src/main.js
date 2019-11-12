import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import '@/assets/styles/variables.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

// Require the global styles
require('./assets/styles/styles.css');
