import Vue from 'vue'
import App from './App.vue'

let v = new Vue({
    el: "#app",
    delimiters: ['${', '}'],
    template: '<App/>',
    components: { App }
});