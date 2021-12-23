<template>
    <div class="card-item" @click="openCard();" :class="{ open: isIt }">
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
                this.isIt = true;
        },
        methods: {
            openCard() {
                this.opened = this.opened == false ? true : false;
            },
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
            }
        },
        // watch: {
        //     opened: function (newVal, oldVal) {
        //         console.log(newVal, "new")
        //         console.log(oldVal, "old")
        //     }
        // }
    };
</script>