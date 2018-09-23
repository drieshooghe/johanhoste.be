import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

Vue.use(Router)

let v = new Vue({
    el: "#app",
    template: '<App/>',
    components: { App }
});