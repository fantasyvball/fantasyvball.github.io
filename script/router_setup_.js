import NavbarComponent from 'https://fantasyvball.github.io/components/NavbarComponent.js';
import FooterComponent from 'https://fantasyvball.github.io/components/FooterComponent.js';

import LoginComponent from 'https://fantasyvball.github.io/components/LoginComponent.js';
import LogoutComponent from 'https://fantasyvball.github.io/components/LogoutComponent.js';
import HomeComponent from 'https://fantasyvball.github.io/components/HomeComponent.js';
import PlayerRosterComponent from 'https://fantasyvball.github.io/components/PlayerRosterComponent.js'
import UserComponent from 'https://fantasyvball.github.io/components/UserComponent.js'

import AvailablePlayersComponent from 'https://fantasyvball.github.io/components/AvailablePlayersComponent.js'
import ArticleComponent from 'https://fantasyvball.github.io/components/ArticleComponent.js'
import LeaderBoardComponent from 'https://fantasyvball.github.io/components/LeaderBoardComponent.js'
import PlayerAchievmentComponent from 'https://fantasyvball.github.io/components/PlayerAchievementComponent.js'
import NotFoundComponent from 'https://fantasyvball.github.io/components/NotFoundComponent.js'
import StatsComponent from 'https://fantasyvball.github.io/components/StatsComponent.js'

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
