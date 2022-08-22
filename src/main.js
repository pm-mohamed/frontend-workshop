import Vue from 'vue'
import App from './App.vue'

/* Import main.scss file on bootup */
import './styles/main.scss';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
