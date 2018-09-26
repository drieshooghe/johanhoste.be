import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';

import * as ContentHelper from './helpers/content';

import Home from './components/Home.vue';
import Services from './components/Services.vue';
import Testimonials from './components/Testimonials.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';

Vue.use(Router);

declare var apiPageContent: any;
declare var apiGeneralContent: any;
const pageContent = new ContentHelper.Page(apiPageContent);
const generalContent = new ContentHelper.General(apiGeneralContent);
console.log('Check out Vuex to store the following variables');
console.log(pageContent);
console.log(generalContent);

const routes = [
    { path: '/', component: Home },
    { path: '/diensten', component: Services },
    { path: '/getuigenissen', component: Testimonials },
    { path: '/over-mij', component: About },
    { path: '/contact', component: Contact },
];

const router = new Router({
    routes,
    mode: 'history'
});

let v = new Vue({
    el: "#app",
    router,
    template: '<App/>',
    components: { App }
}).$mount('#app');