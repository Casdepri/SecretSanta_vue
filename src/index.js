import Vue from 'vue/dist/vue.js';
import App from './App.vue'
import HeaderComponent from 'components/UI/HeaderComponent.vue'
import CardsPage from 'components/CardsPage.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'App',
        component: App,
        props: true
    },
    {
        path: '/cards/:name',
        name: 'Card',
        component: CardsPage,
        props: true
    }
]

Vue.component('header-bar', HeaderComponent);
const router = new VueRouter({ routes })
const app = new Vue({ router }).$mount('#root')