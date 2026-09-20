	import {
		createRouter,
		createWebHashHistory
	} from 'vue-router'
	import news from '@/views/news/list'
	import fuwujilu from '@/views/fuwujilu/list'
	import yonghu from '@/views/yonghu/list'
	import fuwuxiangmu from '@/views/fuwuxiangmu/list'
	import storeup from '@/views/storeup/list'
	import config from '@/views/config/list'
	import users from '@/views/users/list'
	import zhiyuanzhe from '@/views/zhiyuanzhe/list'
	import discussfuwuxiangmu from '@/views/discussfuwuxiangmu/list'

export const routes = [{
		path: '/login',
		name: 'login',
		component: () => import('../views/login.vue')
	},{
		path: '/',
		name: '首页',
		component: () => import('../views/index'),
		children: [{
			path: '/',
			name: '首页Home',
			component: () => import('../views/HomeView.vue'),
			meta: {
				affix: true
			}
		}, {
			path: '/updatepassword',
			name: '修改密码',
			component: () => import('../views/updatepassword.vue')
		}
		
		,{
			path: '/news',
			name: '公告资讯',
			component: news
		}
		,{
			path: '/fuwujilu',
			name: '服务记录',
			component: fuwujilu
		}
		,{
			path: '/yonghu',
			name: '用户',
			component: yonghu
		}
		,{
			path: '/fuwuxiangmu',
			name: '服务项目',
			component: fuwuxiangmu
		}
		,{
			path: '/storeup',
			name: '我的收藏',
			component: storeup
		}
		,{
			path: '/config',
			name: '轮播图',
			component: config
		}
		,{
			path: '/users',
			name: '管理员',
			component: users
		}
		,{
			path: '/zhiyuanzhe',
			name: '志愿者',
			component: zhiyuanzhe
		}
		,{
			path: '/discussfuwuxiangmu',
			name: '服务项目评论',
			component: discussfuwuxiangmu
		}
		]
	},
]

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes
})

export default router
