import Vue from 'vue';
import App from './App.vue';
import Home from './Home.vue';
import Services from './Services.vue';
import Router from 'vue-router';
import VueRouter from 'vue-router';

Vue.use(Router);

const routes = [
    { path: '/', component: Home },
    { path: '/diensten', component: Services },
    // { path: '/getuigenissen', component: Testimonials },
    // { path: '/over-mij', component: About },
    // { path: '/contact', component: Contact },    
];

const router = new VueRouter({ routes });

let v = new Vue({
    el: "#app",
    router,
    render: h => h(App)
});