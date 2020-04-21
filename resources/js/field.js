Nova.booting((Vue, router, store) => {
    Vue.component('index-select-multiple', require('./components/IndexField'))
    Vue.component('detail-select-multiple', require('./components/DetailField'))
    Vue.component('form-select-multiple', require('./components/FormField'))
})
