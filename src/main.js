// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 为了VForm加的
import FormMaking from 'form-making'
import 'form-making/dist/FormMaking.css'
Vue.use(FormMaking)

import {
  GenerateForm,
  MakingForm
} from 'form-making'
import 'form-making/dist/FormMaking.css'

Vue.component(GenerateForm.name, GenerateForm)
Vue.component(MakingForm.name, MakingForm)
/* 或写为
 * Vue.use(GenerateForm)
 * Vue.use(MakingForm)
 */

// ======================为了element ui
Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})