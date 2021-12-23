import logo from './images/logo.svg'
import male from './images/male.svg'
import female from './images/female.svg'

import { animation } from './animation'

// Модули
import Vue from 'vue/dist/vue.js';
import './styles/style.scss'
import VueRouter from 'vue-router'
import axios from 'axios'

Vue.use(VueRouter)

const Input = Vue.component("Input", {
    template: `
        <div class="form-container">
            <label for="setName">Введите своё имя</label>
            <input name="setName" type="text">
            <div class="btn-ok" @click="findMe"><span>Подтвердить</span></div>
            <router-link to="/player">Начать!</router-link>
        </div>
    `,
    methods: {
        findMe() {
            console.log(document.querySelector('[name="setName"]').value)
        }
    },
    props: ["id", "test"]
})

const Card = Vue.component("Card", {
    template: `
        <div class="card-container">
            <div class="card-items">
                <div class="card-item" @click="openCard(index); setHashOnName(participant.name);" v-for="(participant, index) in participants" :key="participant.name">
                    <div class="card-backside" :class="{ open: setOpenClass }"><img type="image/svg+xml" :src="logo">
                    </div>
                    <div class="card-frontside" :class="{ open: setOpenClass }">
                        <div class="card-logo"><img :src="logo" :alt="alt"></div>
                        <div class="card-image">
                            <!-- <img :src="male" alt="" v-if="participant.sex == 'male'"> -->
                            <!-- <img :src="female" alt="" v-else> -->
                            <img :src="getData" alt="">
                        </div>
                        <div class="card-name">{{ participant.name }}</div>
                        <div class="card-terms">
                            {{ participant.description }}
                        </div>
                        <p>{{ santaname }}</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            participants: [],
            santaname: '',
            title: 'Mercury - form',
            logo,
            alt: 'Mercury',
            opened: false,
            isIt: false,
            abc: ["а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ь", "ы", "ъ", "э", "ю", "я"]
        }
    },
    created: function () {
        axios.get('./src/data.json').then(response => {
            this.participants = response.data.data
        }, response => {
            console.log("error");
        });
    },
    mounted: function () {
        this.$nextTick(function () {
            console.log("Render complete")
            this.getQueryHash();
            new animation();
        })
    },
    methods: {
        openCard(index) {
            console.log(this.participants[index].name)
            this.opened = this.opened == false ? true : false;
        },
        setHashOnName(name) {
            let result_hash = [], arr_name = [];

            arr_name = name.toString().toLocaleLowerCase().replace(/\s/g, '').split("");
            for (let i = 0; i <= arr_name.length; i++) {
                for (let j = 0; j <= this.abc.length; j++) {
                    if (arr_name[i] == this.abc[j]) {
                        result_hash.push(j)
                    }
                }

            }
            console.log(result_hash.join(""))
            return this.hash = result_hash.join("");
        },
        getQueryHash() {
            let params = (new URL(document.location)).searchParams;
            this.santaname = params.get("name");
        }
    },
    computed: {
        getData() {
            // if (this.participant.sex == "male") return male;
            return female;
        },
        setOpenClass() {
            // if (this.santaname == this.participant.name) return true;
            // return this.opened
        },
        setHashValue() {
            return this.setHashOnName(this.participant.name)
        }
    }
})

const routes = [
    {
        path: '/',
        name: 'Input',
        component: Input,
        props: true
    },
    {
        path: '/player/',
        name: 'Card',
        component: Card,
        props: true
    }
]

const router = new VueRouter({ routes })

new Vue({
    el: "#root",
    router: router
});
