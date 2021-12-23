<template>
    <div class="card-item" @click="openCard();">
        <div class="card-backside" :class="{ open: setOpenClass }" ref="observer">
            <img type="image/svg+xml" :src="logo" />
        </div>
        <div class="card-frontside" :class="{ open: setOpenClass }">
            <div class="card-logo"><img :src="logo" :alt="alt" /></div>
            <div class="card-image">
                <img :src="getData" alt="" />
            </div>
            <div class="card-name">{{ participant.name }}</div>
            <div class="card-terms">
                {{ participant.description }}
            </div>
        </div>
    </div>
</template>

<script>
    import logo from "src/images/logo.svg";
    import male from "src/images/male.svg";
    import female from "src/images/female.svg";

    export default {
        props: ["participant", "hash", "santa", "dontSanta", "hashName"],
        data() {
            return {
                title: "Mercury - form",
                logo,
                alt: "Mercury",
                opened: false,
                isIt: false,
                abc: ["а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ь", "ы", "ъ", "э", "ю", "я",],
                hashArray: [],
            };
        },
        mounted() {
            if (this.participant.name == this.$route.params.name
                || this.hashName == this.dontSanta)
                this.opened = true;
        },
        created: function () {
        },
        methods: {
            openCard() {
                this.opened = this.opened == false ? true : false;
            },
            // setHashOnName(name) {
            //     let result_hash = [],
            //         arr_name = [];

            //     arr_name = name.toString().toLocaleLowerCase().replace(/\s/g, "").split("");
            //     for (let i = 0; i <= arr_name.length; i++) {
            //         for (let j = 0; j <= this.abc.length; j++) {
            //             if (arr_name[i] == this.abc[j]) {
            //                 result_hash.push(j);
            //             }
            //         }
            //     }

            //     console.log(result_hash.join(""))

            //     return result_hash.join("");
            // },
        },
        computed: {
            getData() {
                if (this.participant.sex == "male") return male;
                return female;
            },
            setOpenClass() {
                if (this.santaname == this.participant.name) return true;
                return this.opened;
            },
            setHashValue() {
                return this.hashArray = this.hash;
            },
        },

    };
</script>