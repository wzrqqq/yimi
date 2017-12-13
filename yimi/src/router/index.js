import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import index from '../components/index.vue'
import home from '../components/home.vue'
import product from '../components/product.vue'
import branding from '../components/branding.vue'
import about from '../components/about.vue'
import contact from '../components/contact.vue'

// admin
import admin from '../components/admin/index.vue'
import login from '../components/admin/login.vue'

Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
    	path:'/',
    	name:'index',
    	component:index,
    	children:[
    		{
    			path:'home',
		    	name:'home',
		    	component:home,
    		},
    		{
    			path:'product',
		    	name:'product',
		    	component:product,
    		},
    		{
    			path:'branding',
		    	name:'branding',
		    	component:branding,
    		},
    		{
    			path:'about',
		    	name:'about',
		    	component:about,
    		},
    		{
    			path:'contact',
		    	name:'contact',
		    	component:contact,
    		}
    	]
    },
	{
		path: '/admin',
		name: 'admin',
		component: admin,
		children:[
			{
				path: 'login',
				name: 'login',
				component: login
			},
		]
	}
  ]
})
