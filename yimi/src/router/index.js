import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index.vue'
import home from '../components/home.vue'
import product from '../components/product.vue'
import branding from '../components/branding.vue'
import about from '../components/about.vue'
import contact from '../components/contact.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
    	path:'/',
    	name:'index',
    	component:index,
    	children:[
    		{
    			path:'/',
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
    }
  ]
})
