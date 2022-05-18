import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Portfolio from './Portfolio'

const routes = [
  {
    path: 'Home',
    component: Home,
  },
  {
    path: 'About Me',
    component: About,
  },
  {
    path: 'Services',
    component: Services,
  },
  {
    path: 'Contact',
    component: Contact,
  },
  {
    path: 'Portfolio',
    component: Portfolio
  }
]

export default routes