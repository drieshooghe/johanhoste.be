import Vue from "vue";
import App from "./App.vue";

let v = new Vue({
    el: "#app",
    delimiters: ['${', '}'],
    render: h => h(App)
});