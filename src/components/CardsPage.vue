<template>
    <div class="cards">
        <hello></hello>
        <div class="card-container">
            <div class="card-items">
                <card-item v-for="participant in participants.data" :key="participant.name" :participant="participant">
                </card-item>
            </div>
        </div>
    </div>
</template>


<script>
    import CardItem from 'components/CardItem.vue'
    import Hello from 'components/Hello.vue'
    import axios from 'axios'

    export default {
        components: {
            CardItem,
            Hello
        },
        data() {
            return {
                participants: [],
                abc: ["а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ь", "ы", "ъ", "э", "ю", "я"]
            }
        },
        created: function () {
            axios.get('./src/data.json').then(response => {
                this.participants = response.data
            }, response => {
                console.log("error");
            });
        },
    }
</script>