import { createApp } from 'vue'
import App from './App'
import router from './router/index'
import store from './store'

// Vue.config.productionTip = false
// Vue.config.performance = process.env.NODE_ENV !== "production"


createApp(App).use(store).use(router).mount('#app')
