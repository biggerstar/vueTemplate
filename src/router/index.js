import {
	createRouter,
	createWebHistory
} from 'vue-router'
// import '@/views/home/home.vue'
const Home = () => import('@/views/home/home.vue')
const Mine = () => import('@/views/mine/mine.vue')

const routes = [{
		path: '/',
		name: 'default',
		component: Home
	},
	{
		path: '/Home',
		name: 'Home',
		component: Home
	},
	{
		path:'/Mine',
		name: 'Mine',
		component: Mine
	}
	// {
	//   path: '/about',
	//   name: 'About',
	//   // route level code-splitting
	//   // this generates a separate chunk (about.[hash].js) for this route
	//   // which is lazy-loaded when the route is visited.
	//   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	// }
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	// mode: history,
	routes
})

export default router