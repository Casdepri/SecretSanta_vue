<template>
    <div class="cards">
        <hello>{{$route.params.name}}</hello>
        <div class="card-container">
            <div class="card-items">
                <card-item v-for="participant in participants" :key="participant.name" :participant="participant"
                    :hash="hash" :santa="$route.params.name" :dontSanta="getNoSantaName"
                    :hashName="setHash(participant.name)">
                </card-item>
            </div>
        </div>
    </div>
</template>


<script>
    import CardItem from 'components/CardItem.vue'
    import Hello from 'components/Hello.vue'
    import axios from 'axios'
    import { animation } from 'src/animation'

    export default {
        components: {
            CardItem,
            Hello
        },
        data() {
            return {
                participants: [],
                hash: [],
                dontSanta: '1',
                hashName: '',
                abc: ["а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ь", "ы", "ъ", "э", "ю", "я"]
            }
        },
        mounted: function () {
            window.addEventListener('load', () => {
                // запуск финкции приветсвия
                setTimeout(() => {new animation()}, 3000)
            })
        },
        created: function () {
            axios.get('./src/data.json').then(response => {
                this.participants = response.data.data
                this.hash = response.data.hash
            }, response => {
                console.log("error");
            });
        },
        methods: {
            setHash(name) {
                let result_hash = [], arr_name = [];

                arr_name = name.toString().toLocaleLowerCase().replace(/\s/g, '').split("");
                for (let i = 0; i <= arr_name.length; i++) {
                    for (let j = 0; j <= this.abc.length; j++) {
                        if (arr_name[i] == this.abc[j]) {
                            result_hash.push(j)
                        }
                    }

                }
                return result_hash.join("");
            },
        },
        computed: {
            getNoSantaName() {
                let maxLength = this.hash.length - 1;
                let i = 0;
                for (let l = 0; l <= maxLength; l++) {
                    if (this.setHash(this.$route.params.name) == this.hash[l]) {
                        i = maxLength != l ? l + 1 : 0;
                        console.log("Ты - " + this.$route.params.name + " будешь тайным сантой для - " + this.hash[i])
                        return this.hash[i];
                    }
                };
            }
        }
    }
</script>