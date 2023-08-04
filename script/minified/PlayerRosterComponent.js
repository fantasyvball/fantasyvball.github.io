import PlayerCard from"./PlayerCardComponent.js";export default{template:'<div class="modal fade" id="newsSubscriptionModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog modal-dialog-centered"><div class="modal-content" style="background-color:#333;color:#fff;border-radius:0.5rem;"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">Fantasy Volleyball News Subscription</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body">Would you like to receive news and updates from Fantasy Volleyball? We promise not to send annoying emails and only important updates!</div><div class="modal-footer"><button type="button" class="btn btn-secondary"data-bs-dismiss="modal">Let me think about it.</button><button type="button" class="btn btn-secondary" @click="dontSubscribe()" data-bs-dismiss="modal">No, thanks</button><button type="button" class="btn btn-primary" @click="subscribe()" data-bs-dismiss="modal">Yes, subscribe</button></div></div></div></div><div><div v-if="loginSuccess" class="alert alert-info mt-3 position-relative" role="alert">Welcome Back!<button type="button" class="btn-close position-absolute end-0" @click="loginSuccess=false"></button></div><div v-if="noPlayers" class="alert alert-info mt-3 position-relative" role="alert">Looks like you don\'t have any player added yet! Go add some player from the top players page!<button type="button" class="btn-close position-absolute end-0" @click="noPlayers=false"></button></div><div v-if="fireStoreError" class="alert alert-danger mt-3" role="alert">Firestore has encountered an error. Please try again later.<button type="button" class="btn-close position-absolute end-0" @click="fireStoreError=false"></button></div><div v-if="dbError" class="alert alert-danger mt-3" role="alert">we has encountered an error loading content from db. Please try again later.<button type="button" class="btn-close position-absolute end-0" @click="dbError=false"></button></div><div v-if="noOpeningWarning" class="alert alert-danger mt-3 position-relative" role="alert">Changed not made. Starting roster is full!<button type="button" class="btn-close position-absolute end-0" @click="noOpeningWarning=false"></button></div><div v-if="outOfPostionWarning" class="alert alert-danger mt-3 position-relative" role="alert">Warning! Highlighted player(s) out of position.<button type="button" class="btn-close position-absolute end-0" @click="outOfPostionWarning=false"></button></div><div v-if="actionSuccess" class="alert alert-success mt-3 position-relative" role="alert">The roster has been updated!<button type="button" class="btn-close position-absolute end-0" @click="actionSuccess=false"></button></div><div v-if="isLoggedIn" class=""><div v-if="isLoading"><div class="loading-container" style="justify-content:center;align-items:center;"><div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span></div><p class="ml-2">Your data is loading... Please wait.</p></div></div><div v-else><div><h1>Roster <router-link class="prof-link" v-if="hasFireUser()" :to="userLink()">#{{hasFireUser().uid}}</router-link></h1><div class="row"><div class="col-md-4"><h3>L</h3><PlayerCard :player="starter[0]" collapse="true" :style="calcStyle(0,\'L\')"><button class="btn btn-warning me-2" @click="sendToBench(0)">Bench</button></PlayerCard></div><div class="col-md-4"><h3>S</h3><PlayerCard :player="starter[1]" collapse="true" :style="calcStyle(1,\'S\')"><button class="btn btn-warning me-2" @click="sendToBench(1)">Bench</button></PlayerCard></div><div class="col-md-4"><h3>OPP</h3><PlayerCard :player="starter[2]" collapse="true" :style="calcStyle(2,\'OPP\')"><button class="btn btn-warning me-2" @click="sendToBench(2)">Bench</button></PlayerCard></div></div><div class="row"><div class="col-md-6"><h3>MB</h3><PlayerCard :player="starter[3]" collapse="true" :style="calcStyle(3,\'MB\')"><button class="btn btn-warning me-2" @click="sendToBench(3)">Bench</button></PlayerCard></div><div class="col-md-6"><h3>MB</h3><PlayerCard :player="starter[4]" collapse="true" :style="calcStyle(4,\'MB\')"><button class="btn btn-warning me-2" @click="sendToBench(4)">Bench</button></PlayerCard></div></div><div class="row"><div class="col-md-6"><h3>OH</h3><PlayerCard :player="starter[5]" collapse="true" :style="calcStyle(5,\'OH\')"><button class="btn btn-warning me-2" @click="sendToBench(5)">Bench</button></PlayerCard></div><div class="col-md-6"><h3>OH</h3><PlayerCard :player="starter[6]" collapse="true" :style="calcStyle(6,\'OH\')"><button class="btn btn-warning me-2" @click="sendToBench(6)">Bench</button></PlayerCard></div></div><div class="row"><div class="col-md-12"><h3>Bench</h3><div v-for="playerIndexPair in bench" :key="bench" class="mb-3"><PlayerCard :player="playerIndexPair[0]"><button class="btn btn-primary me-2" @click="sendToStart(playerIndexPair[1])">Start</button><button class="btn btn-danger me-2" @click="releasePlayer(playerIndexPair[1])">Release</button></PlayerCard></div></div></div></div></div></div></div></div></div>',components:{PlayerCard:PlayerCard},data:()=>({loginSuccess:!1,noOpeningWarning:!1,actionSuccess:!1,outOfPostionWarning:!1,players:[],isLoading:!0,dbError:!1,fireStoreError:!1,noPlayers:!1}),mounted(){this.isLoggedIn&&(this.loadPlayer(),this.loginSuccess="true"===this.$route.query.success,"true"===this.$route.query.success&&1==window.newUser()&&new bootstrap.Modal(document.getElementById("newsSubscriptionModal")).show())},computed:{isLoggedIn:()=>null!=window.user,starter(){let e=[];return this.players.slice(0,7).forEach((t=>{e.push(window.getPlayerById(t))})),e},bench(){let e=[],t=7;return this.players.slice(7).forEach((s=>{e.push([window.getPlayerById(s),t]),t+=1})),e}},methods:{sendToBench(e){window.secret_list_sendBack(this.players[e]),this.players.push(this.players[e]),this.players[e]=null,document.getElementById("card"+e).collapse=!0,this.actionSuccess=!1,setTimeout((()=>{this.actionSuccess=!0}),500)},sendToStart(e){const t=this.players.indexOf(null);-1!==t?(window.secret_list_start(t,this.players[e]),this.players[t]=this.players.splice(e,1)[0],this.actionSuccess=!1,setTimeout((()=>{this.actionSuccess=!0}),500)):(this.noOpeningWarning=!1,setTimeout((()=>{this.noOpeningWarning=!0}),500))},releasePlayer(e){e>=7&&(window.secrect_list_dropper(this.players[e]),this.players.splice(e,1),this.actionSuccess=!1,setTimeout((()=>{this.actionSuccess=!0}),500))},calcStyle(e,t){const s={};return this.players[e]&&window.getPlayerById(this.players[e]).Position&&!window.getPlayerById(this.players[e]).Position.includes(t)?(s.backgroundColor="#d8bcbe",this.outOfPostionWarning=!0,s):s},subscribe(){window.UpdateSubsribeStatus("true")},dontSubscribe(){window.UpdateSubsribeStatus("false")},loadPlayer(){window.getAllPlayers().then((()=>{window.initList().then((()=>{this.players=window.secret_list_getter(),0==this.players.length&&(this.noPlayers=!0,this.players=[null,null,null,null,null,null,null]),this.isLoading=!1})).catch((e=>{console.log(e),this.dbError=!0}))})).catch((e=>{console.log(e),this.fireStoreError=!0}))},hasFireUser:()=>window.hasFireUser(),userLink:()=>"/user/"+window.hasFireUser().uid}};
