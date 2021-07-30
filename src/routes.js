import DashView from './components/Dash.vue'
import LoginView from './components/login.vue'
import NotFoundView from './components/404.vue'

// Import Views - Dash
import DashboardView from './components/views/Dashboard.vue'
import TablesView from './components/views/Tables.vue'
import TasksView from './components/views/Tasks.vue'
import SettingView from './components/views/Setting.vue'
import AccessView from './components/views/Access.vue'
import ServerView from './components/views/Server.vue'
import ReposView from './components/views/Repos.vue'
import register from './components/register.vue'
import payments from './components/views/payments.vue'
import admin from './components/views/admin.vue'
import payroll from './components/views/payroll.vue'
import paydata from './components/views/paydata.vue'
import inv from './components/views/investments.vue'
import mobi from './components/views/mobile.vue'
// Routes
const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/register',
    component: register
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
        meta: {description: 'Homepage'}
      }, {
        path: 'tables',
        component: TablesView,
        name: 'UserData',
        meta: {description: 'Userdata'}
      }, {
        path: 'tasks',
        component: TasksView,
        name: 'TimeLine',
        meta: {description: 'User Earnings & Data '}
      }, {
        path: 'setting',
        component: SettingView,
        name: 'User Profile',
        meta: {description: 'User Information'}
      }, {
        path: 'access',
        component: AccessView,
        name: 'Access',
        meta: {description: 'Example of using maps'}
      }, {
        path: 'server',
        component: ServerView,
        name: 'Servers',
        meta: {description: 'List of our servers', requiresAuth: true}
      }, {
        path: 'repos',
        component: ReposView,
        name: 'Packages',
        meta: {description: 'ROI Packages'}
      },
      {
        path: 'payroll',
        component: payroll,
        name: 'Payroll',
        meta: {description: 'PayRoll Packages'}
      },
      {
        path: 'payments',
        component: payments,
        name: ''
      },
      {
        path: 'admin',
        component: admin,
        name: ''
      },
      {
        path: 'mypayrolls',
        component: paydata,
        name: ''
      },
      {
        path: 'investments',
        component: inv,
        name: ''
      },
      {
        path: 'mobileMoney',
        component: mobi,
        name: ''
      }
    ]
  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes
