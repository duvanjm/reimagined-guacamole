import App from './App';
import Login from './components/Login';

const routes = [

  {
    path: '/Dash',
    name: 'dashboard',
    icon: 'ni ni-tv-2 text-primary',
    component: App,
  },
  {
    path: '/',
    name: 'login',
    icon: 'ni ni-app text-blue',
    component: Login,
  }
]
