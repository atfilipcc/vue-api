import Vue from 'vue'
import { CreateElement, VNode } from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './components/App.vue'

Vue.use(Buefy)

new Vue(
	{
		render: (h: CreateElement): VNode => h(App)
	}
).$mount('#App')

