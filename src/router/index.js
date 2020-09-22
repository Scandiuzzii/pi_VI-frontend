
import DashView from '../components/Dash.vue'
import DashboardView from '../components/views/Dashboard.vue'
import TablesView from '../components/views/Tag.vue'
import SalasView from '../components/views/Salas.vue'
import AgendamentoView from '../components/views/Agendamento.vue'
import UsuarioView from '../components/views/Usuario.vue'
import Login from '../components/Login.vue'
import Perfil from '../components/views/Perfil.vue'

// import HelloWorld from '@/components/HelloWorld'


const routes = [
  {
    path: "/login",
    component: Login
  },
    {
    path: '/',
    name: 'DashboardView',
    component: DashView,
    children: [
      {
        path: 'dashboard',
        alias: '',
        component: DashboardView,
        name: 'dashboard',
        meta: { description: "" }
      },
      {
        path: 'tags',
        alias: '',
        component: TablesView,
        name: 'Vincular tag com usuario',
        meta: { description: "" }
      },
      {
        path: 'salas',
        alias: '',
        component: SalasView,
        name: 'Salas',
        meta: { description: "" }
      },
      {
        path: 'agendamento',
        alias: '',
        component: AgendamentoView,
        name: 'Agendamento',
        meta: { description: "" }
      },
      {
        path: 'usuario',
        alias: '',
        component: UsuarioView,
        name: 'Usuario',
        meta: { description: "" }
      },
      {
        path: 'perfil',
        alias: '',
        component: Perfil,
        name: 'Perfil do Usuário',
        meta: { description: "" }        
      }
    ],
    redirect: '/login'
  }
]

export default routes

