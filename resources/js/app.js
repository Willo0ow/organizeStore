require('./bootstrap');

import router from "./router"
import store from "./store"
import vuetify from "./plugins/vuetify"

window.Vue = require('vue').default;


const app = new Vue({
    router,
    store,
    vuetify,
    el: '#app',
    async created(){
        await store.dispatch('retrieveCurrentUser')
    }
});
