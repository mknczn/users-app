import { createApp } from "vue"
import { createStore } from "vuex"
import App from "./App.vue"
import "bootstrap/dist/css/bootstrap.min.css"

const store = createStore({
    state() {
      return {
        data: [],
        component2: false,
      }
    },
    mutations: {
      setData(state : any, data) {
        state.data = data
      },
      setComponent(state) {
        state.component2 = !state.component2
      },
    },
  })
  
  const app = createApp(App)
  app.use(store)
  app.mount("#app")
  import "bootstrap/dist/js/bootstrap.js"
  