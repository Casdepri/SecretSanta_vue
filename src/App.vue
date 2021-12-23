<template>
    <div class="app">
        <div class="form-container">
            <label for="setName">Введите ту длинную строку, что была рядом</label>
            <input name="setName" type="text" ref="getname" />
            <div class="btn-ok" @click="findMe"><span>Я ввёл!</span></div>
        </div>
    </div>
</template>

<script>
    import "./styles/style.scss";
    import UiButton from "components/UI/UiButton.vue";

    export default {
        components: { UiButton },
        data() {
            return {
                lengthInput: 0,
                name,
            };
        },
        methods: {
            findMe() {
                let val = this.$refs.getname.value;
                if (val.length) {
                    this.name = val;
                    this.$router.push("/cards/" + val);
                } else {
                    console.error("ЧО ЖМЯКАЕШЬ ИДИ ПОЖМЯКАЙ");
                }
            },
        },
        computed: {
            iSeeYouClick() {
                console.log(this.$refs.getname);
                return this.$refs.getname > 0;
            },
        },
    };
</script>