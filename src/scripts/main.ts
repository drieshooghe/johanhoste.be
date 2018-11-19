import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import Router from 'vue-router';

import * as PH from './helpers/PageHelpers';
import * as TH from './helpers/TestimonialHelper';

import Home from './components/Home.vue';
import Services from './components/Services.vue';
import Testimonials from './components/Testimonials.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Disclaimer from './components/Disclaimer.vue';

Vue.use(Vuex);
Vue.use(Router);

declare var pageData: any;
declare var infoData: any;
declare var testimonials: any;

const pageCollection = new PH.PageCollection(pageData);
const store = new Vuex.Store({
    state: {
        pages: pageCollection,
        info: new PH.Info(infoData),
        testimonials: new TH.TestimonialCollection(testimonials.entries),
        api: {
            host: 'https://api.johanhoste.be',
            token: '71eece069cf99283e780a3a2ffd144'
        }
    },
    getters: {
        getPageTitle: (state) => (handle: string) => {
            return state.pages.getPage(handle).getTitle();
        },
        getPageContent: (state) => (handle: string) => {
            return state.pages.getPage(handle).getContent();
        },
        getMetaInfo: (state) => (handle: any) => {
            return state.info.getMetaInfo(handle);
        },
        getContactInfo: (state) => (handle: any) => {
            return state.info.getContactInfo(handle);
        },
        getTestimonials: (state) => () => {
            return state.testimonials.getTestimonials();
        },
        // getApiHost: (state) => () => {
        //     return state.api.host;
        // },
        // getApiToken: (state) => () => {
        //     return state.api.token;
        // }
    }
})

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/diensten', name: 'services', component: Services },
    { path: '/getuigenissen', name: 'testimonials', component: Testimonials },
    { path: '/over-mij', name: 'about', component: About },
    { path: '/contact', name: 'contact', component: Contact },
    { path: '/disclaimer', name: 'disclaimer', component: Disclaimer },
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