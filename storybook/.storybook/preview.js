import Vue from 'vue';
import Vuex from 'vuex';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import '../../src/styles/main.scss'

Vue.use(Vuex);
Vue.use(Antd);

export const parameters = {
  docs: {
    inlineStories: true,
    iframeHeight: '60px',
  },
};