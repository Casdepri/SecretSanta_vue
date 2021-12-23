<template>
    <div class="header">
        <div class="header__logo">
            <img :src="logo" alt="" />
        </div>
        <div class="header__nav">
            <div class="btn-ok" @click="$router.push('/').catch(err => {})">На главную</div>
        </div>
    </div>
</template>

<script>
    import logo from 'src/images/logo.svg'
    import UiButton from 'components/UI/UiButton.vue'

    export default {
        components: { UiButton },
        data() {
            return {
                logo
            }
        },
    }
</script>