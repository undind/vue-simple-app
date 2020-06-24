import Vue from 'vue';
import moment from 'moment';
import 'moment/locale/ru';
import App from './App.vue';
import Buefy from 'buefy';
import router from '@/routes';
import store from './store';
import axios from './request';

import '@fortawesome/fontawesome-free/js/all.js'
import 'buefy/dist/buefy.css';
import './styles/main.pcss';

Vue.prototype.$moment = moment;

Vue.use(Buefy, {
    defaultIconPack: 'fas',
    defaultContainerElement: '#content',
});

store.$axios = axios;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app-root')
