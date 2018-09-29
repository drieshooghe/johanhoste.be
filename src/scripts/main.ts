import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import Router from 'vue-router';

import * as PH from './helpers/PageHelpers';

import Home from './components/Home.vue';
import Services from './components/Services.vue';
import Testimonials from './components/Testimonials.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';

Vue.use(Vuex);
Vue.use(Router);

declare var pageData: any;
// declare var infoData: any;

const pageCollection = new PH.PageCollection(pageData);

const store = new Vuex.Store({
    state: {
        pages: pageCollection
        // info: new Info(generalContent)
    },
    getters: {
        getPageTitle: (state) => (handle: string) => {
            return state.pages.getPage(handle).getTitle();
        },
        getPageContent: (state) => (handle: string) => {
            return state.pages.getPage(handle).getContent();
        }
    }
})

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
    store,
    router,
    template: '<App/>',
    components: { App }
});