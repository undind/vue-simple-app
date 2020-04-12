import Vue from 'vue';
import App from './App.vue';
import Buefy from 'buefy';

import 'buefy/dist/buefy.css';
import './styles/main.pcss';

Vue.use(Buefy);

new Vue({
    el: '#app-root',
    render: h => h(App)
});
