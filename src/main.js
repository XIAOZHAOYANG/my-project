import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'

import Home from '.components/Home.vue'
import HelloWorld from '.components/HelloWorld.vue'
Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
    routes:[
        {path:"/",component:Home},
        {path:"/hello",component:HelloWorld}
    ],
    mode:'history'
});




new Vue({
  render: h => h(App),
}).$mount('#app');

/*
* vue生命周期
* beforeCreate :组件实例化前执行该函数
* created:组件实例化完毕，但页面还没有显示
* beforeMount:组件挂载前，页面仍没显示，但虚拟DOM已经准备完毕
* mounted:组件挂载后，页面显示
* beforeUpdate:组件更新前，页面仍未更新，但虚拟DOM已经准备完毕
* updated:组件更新后，页面更新
* beforeDestroy:组件销毁前
* destroyed:组件销毁后
*
* */
