// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import axios from 'axios';

const localSettings = require('./local_settings');
// import router from './router'

// TODO: For final deployment, we'd want a way for each server to define this
axios.defaults.baseURL = localSettings.api_url;
// Public Token - change for final deployment!
// swift token 39821f48b3b4f113b964d30877c252890a212b48
axios.defaults.headers.common['Authorization'] = 'Token ' + localSettings.public_token;

Vue.config.productionTip = false;

/* eslint-disable no-new */
/* new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}) */

// eslint-disable next-line
var NPSATCrops = new Vue({
  el: '#npsat_web',
  components: { App },
  template: '<App/>'
});

console.log(NPSATCrops);
