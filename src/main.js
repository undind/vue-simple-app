import Vue from 'vue';
import App from './App.vue';
import Buefy from 'buefy';
import router from '@/routes';

import '@fortawesome/fontawesome-free/js/all.js'
import 'buefy/dist/buefy.css';
import './styles/main.pcss';

Vue.use(Buefy, {
    defaultIconPack: 'fas',
    defaultContainerElement: '#content',
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app-root')
