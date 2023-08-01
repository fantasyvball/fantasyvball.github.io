import NavbarComponent from './components/NavbarComponent.js';
import FooterComponent from './components/FooterComponent.js';

import LoginComponent from './components/LoginComponent.js';
import LogoutComponent from './components/LogoutComponent.js';
import HomeComponent from './components/HomeComponent.js';
import PlayerRosterComponent from './components/PlayerRosterComponent.js'
import UserComponent from './components/UserComponent.js'

import AvailablePlayersComponent from './components/AvailablePlayersComponent.js'
import ArticleComponent from './components/ArticleComponent.js'
import LeaderBoardComponent from './components/LeaderBoardComponent.js'
import PlayerAchievmentComponent from './components/PlayerAchievementComponent.js'
import NotFoundComponent from './components/NotFoundComponent.js'
import StatsComponent from './components/StatsComponent.js'

const routes = [
  {path: "/", component: HomeComponent},
  {path: "/login", component: LoginComponent},
  {path: "/logout", component: LogoutComponent},
  {path: "/roster", component: PlayerRosterComponent},
  {path: "/user/:id", component: UserComponent},
  {path: "/top-players", component: AvailablePlayersComponent},
  {path: "/leaderboard", component: LeaderBoardComponent},
  {path: "/article/:id", component: ArticleComponent, props: true},
  {path: "/achievement", component: PlayerAchievmentComponent},
  {path: "/stats", component: StatsComponent},
  
  {path: "/:pathMatch(.*)*", component: NotFoundComponent},
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = Vue.createApp({});
app.component('navbar', NavbarComponent);
app.component('foot', FooterComponent);

app.use(router);
app.mount("#app");
