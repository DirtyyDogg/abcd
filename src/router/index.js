import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PlayerDetails from "../components/PlayerDetails.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/player/:id",
    name: "PlayerDetails",
    props: (route) => {
      const playerid = Number.parseInt(route.params.id)
      if (Number.isNaN(playerid)) {
        return 0
      }
      return {
        playerid
      };
    },
    component: PlayerDetails
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
