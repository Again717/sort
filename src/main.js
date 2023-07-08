import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import BaseSort from './UI/BaseSort.vue'
import BaseUser from './UI/BaseUser.vue'

const app = createApp(App)

app.component('base-sort', BaseSort)
app.component('base-user', BaseUser)
app.use(router)
app.mount('#app')
