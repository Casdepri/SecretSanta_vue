Vue.component("getNameForm", {
    template: `
        <div class="form-container">
            <label for="setName">Введите своё имя</label>
            <input name="setName" type="text">
            <div class="btn-ok" @click="findMe"></div>
        </div>
    `
})