import Vue from 'vue'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);
import app from './App.vue'
import './lib/mui/css/mui.min.css'

var vm = new Vue({
    el:"#app",
    render:c=>c(app)
})