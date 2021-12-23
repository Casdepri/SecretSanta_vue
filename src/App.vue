<template>
    <div class="app">
        <div class="form-container">
            <label for="setName">Введите ту длинную строку, что была рядом</label>
            <input name="setName" type="text" ref="getname">
            <ui-button><span :class={open:iSeeYouClick} @click="$router.push('/cards/"+{{ name }}+"')">Я ввёл!</span></ui-button>
        </div>
    </div>
</template>

<script>
    import './styles/style.scss'
    import UiButton from 'components/UI/UiButton.vue'

    export default {
        components: { UiButton },
        data() {
            return {
                lengthInput: 0,
                name
            }
        },
        methods: {
            findMe() {
                let val = this.$refs.getname.value;
                if (val.length) {
                    this.name = val
                }
                else {
                    console.error("ЧО ЖМЯКАЕШЬ ИДИ ПОЖМЯКАЙ")
                }
            }
        },
        computed: {
            iSeeYouClick() {
                console.log(this.$refs.getname)
                return this.$refs.getname > 0
            }
        }
    }
</script>