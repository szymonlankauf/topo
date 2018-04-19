import DashView from './components/Dash.vue'
import LoginView from './components/Login.vue'
import NotFoundView from './components/404.vue'

// Import Views - Dash
import DashboardView from './components/views/Dashboard.vue'
import Wall from './components/views/Wall.vue'
import Rock from './components/views/Rock.vue'
// import SettingView from './components/views/Setting.vue'
import WorldMapView from './components/views/World-map.vue'
// import ServerView from './components/views/Server.vue'
// import ReposView from './components/views/Repos.vue'

// Routes
const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/',
    component: DashView,
    children: [
      {
        path: 'dashboard',
        alias: '',
        component: DashboardView,
        name: 'Dashboard',
        meta: {description: 'Overview of environment'}
      }, {
        path: 'wall',
        component: Wall,
        name: 'Wall',
        meta: {description: 'Simple and advance table in CoPilot'}
      }, {
        path: 'rock',
        component: Rock,
        name: 'Rock',
        meta: {description: 'Tasks page in the form of a timeline'}
      },
      // {
      //   path: 'setting',
      //   component: SettingView,
      //   name: 'Settings',
      //   meta: {description: 'User settings page'}
      // },
      {
        path: 'world-map',
        component: WorldMapView,
        name: 'World-map',
        meta: {description: 'Example of using maps'}
      },
      // {
      //   path: 'server',
      //   component: ServerView,
      //   name: 'Servers',
      //   meta: {description: 'List of our servers', requiresAuth: true}
      // }, {
      //   path: 'repos',
      //   component: ReposView,
      //   name: 'Repository',
      //   meta: {description: 'List of popular javascript repos'}
      // }
    ]
  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes
