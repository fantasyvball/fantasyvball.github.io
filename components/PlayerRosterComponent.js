import PlayerCard from './PlayerCardComponent.js';
export default {
  template: `
    <!-- News Subscription Modal -->
    <div class="modal fade" id="newsSubscriptionModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" style="background-color: #333; color: #fff; border-radius: 0.5rem;">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Fantasy Volleyball News Subscription</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Would you like to receive news and updates from Fantasy Volleyball? We promise not to send annoying emails and only important updates!
          </div>
          
          <div class="modal-footer">
            <!-- Button to decline news subscription -->
            <button type="button" class="btn btn-secondary"data-bs-dismiss="modal">Let me think about it.</button>
            <!-- Button to decline news subscription -->
            <button type="button" class="btn btn-secondary" @click="dontSubscribe()" data-bs-dismiss="modal">No, thanks</button>
            <!-- Button to confirm news subscription -->
            <button type="button" class="btn btn-primary" @click="subscribe()" data-bs-dismiss="modal">Yes, subscribe</button>
          </div>
        </div>
      </div>
    </div>
    
    <div>
      <div v-if="loginSuccess" class="alert alert-info mt-3 position-relative" role="alert">
        Welcome Back!
        <button type="button" class="btn-close position-absolute end-0" @click="loginSuccess = false"></button>
      </div>
      
      <div v-if="noPlayers" class="alert alert-info mt-3 position-relative" role="alert">
        Looks like you don't have any player added yet! Go add some player from the top players page!
        <button type="button" class="btn-close position-absolute end-0" @click="noPlayers = false"></button>
      </div>
      
      <div v-if="fireStoreError" class="alert alert-danger mt-3" role="alert">
        Firestore has encountered an error. Please try again later.
        <button type="button" class="btn-close position-absolute end-0" @click="fireStoreError = false"></button>
      </div>

      <div v-if="dbError" class="alert alert-danger mt-3" role="alert">
        we has encountered an error loading content from db. Please try again later.
        <button type="button" class="btn-close position-absolute end-0" @click="dbError = false"></button>
      </div>

      <div v-if="noOpeningWarning" class="alert alert-danger mt-3 position-relative" role="alert">
        Changed not made. Starting roster is full!
        <button type="button" class="btn-close position-absolute end-0" @click="noOpeningWarning = false"></button>
      </div>

      <div v-if="outOfPostionWarning" class="alert alert-danger mt-3 position-relative" role="alert">
        Warning! Highlighted player(s) out of position.
        <button type="button" class="btn-close position-absolute end-0" @click="outOfPostionWarning = false"></button>
      </div>

      <div v-if="actionSuccess" class="alert alert-success mt-3 position-relative" role="alert">
        The roster has been updated!
        <button type="button" class="btn-close position-absolute end-0" @click="actionSuccess = false"></button>
      </div>

      <div v-if="isLoggedIn" class="">
        <div v-if="isLoading">
          <div class="loading-container" style="justify-content: center; align-items: center;">
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <p class="ml-2">Your data is loading... Please wait.</p>
          </div>
        </div>
        <div v-else>
          <div>
            <h1>Roster</h1>
            <div class="row">
              <div class="col-md-4">
                <h3>L</h3>
                <PlayerCard :player="starter[0]" collapse="true" :style="calcStyle(0,'L')">
                  <button class="btn btn-warning  me-2" @click="sendToBench(0)">Bench</button>
                </PlayerCard>
              </div>
              <div class="col-md-4">
                <h3>S</h3>
                <PlayerCard :player="starter[1]" collapse="true" :style="calcStyle(1,'S')">
                  <button class="btn btn-warning  me-2" @click="sendToBench(1)">Bench</button>
                </PlayerCard>
              </div>
              <div class="col-md-4">
                <h3>OPP</h3>
                <PlayerCard :player="starter[2]" collapse="true" :style="calcStyle(2,'OPP')">
                  <button class="btn btn-warning  me-2" @click="sendToBench(2)">Bench</button>
                </PlayerCard>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <h3>MB</h3>
                <PlayerCard :player="starter[3]" collapse="true" :style="calcStyle(3,'MB')">
                  <button class="btn btn-warning  me-2" @click="sendToBench(3)">Bench</button>
                </PlayerCard>
              </div>
              <div class="col-md-6">
                <h3>MB</h3>
                <PlayerCard :player="starter[4]" collapse="true" :style="calcStyle(4,'MB')">
                  <button class="btn btn-warning  me-2" @click="sendToBench(4)">Bench</button>
                </PlayerCard>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <h3>OH</h3>
                <PlayerCard :player="starter[5]" collapse="true" :style="calcStyle(5,'OH')">
                  <button class="btn btn-warning  me-2" @click="sendToBench(5)">Bench</button>
                </PlayerCard>
              </div>
              <div class="col-md-6">
                <h3>OH</h3>
                <PlayerCard :player="starter[6]" collapse="true" :style="calcStyle(6,'OH')">
                  <button class="btn btn-warning  me-2" @click="sendToBench(6)">Bench</button>
                </PlayerCard>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <h3>Bench</h3>
                <div v-for="playerIndexPair in bench" :key="bench" class="mb-3">
                  <PlayerCard :player="playerIndexPair[0]">
                    <button class="btn btn-primary me-2" @click="sendToStart(playerIndexPair[1])">Start</button>
                    <button class="btn btn-danger me-2" @click="releasePlayer(playerIndexPair[1])">Release</button>
                  </PlayerCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        please log in to see the roster
      </div>
    </div>
  `,
  components: {
    PlayerCard,
  },
  data() {
    return {
      loginSuccess: false,
      noOpeningWarning: false,
      actionSuccess: false,
      outOfPostionWarning: false,
      players: [],
      isLoading: true,
      dbError: false,
      fireStoreError: false,
      noPlayers: false,
    };
  },
  mounted() {
    if(this.isLoggedIn){
      this.loadPlayer();
      this.loginSuccess = this.$route.query.success === 'true';
      if(this.$route.query.success === 'true' && window.newUser() == true){
        new bootstrap.Modal(document.getElementById('newsSubscriptionModal')).show();
        
      }        
    }
    
  },
  computed: {
    isLoggedIn() {
      return window.user != null;
    },
    starter() {
      let l = []
      this.players.slice(0,7).forEach((id) => {
        l.push(window.getPlayerById(id))
      })
      return l
    },
    bench() {
      let l = [];
      let counter = 7;
      this.players.slice(7).forEach((id) => {
        l.push([window.getPlayerById(id),counter])
        counter += 1
      })
      return l
    },
  },
  methods: {
    sendToBench(index){
      window.secret_list_sendBack(this.players[index])
      this.players.push(this.players[index]) 
      this.players[index] = null
      this.actionSuccess = false;
      setTimeout(() => {
        this.actionSuccess = true;
      }, 500);
    },
    sendToStart(index){
      const opening = this.players.indexOf(null)
      if(opening !== -1){
        window.secret_list_start(opening, this.players[index])
        this.players[opening] = this.players.splice(index,1)[0]
        this.actionSuccess = false;
        setTimeout(() => {
          this.actionSuccess = true;
        }, 500);
      }else{
        this.noOpeningWarning = false;
        setTimeout(() => {
          this.noOpeningWarning = true;
        }, 500);
      }
    },
    releasePlayer(index){
      if(index >= 7){
        window.secrect_list_dropper(this.players[index])
        this.players.splice(index,1)
        this.actionSuccess = false;
        setTimeout(() => {
          this.actionSuccess = true;
        }, 500);
        
      }
      
    },
    calcStyle(index,pos){
      // return {}
      const style = {};
      if(!this.players[index] || window.getPlayerById(this.players[index]).Position.includes(pos)){
        return style;
      }
      style.backgroundColor = "#d8bcbe";
      this.outOfPostionWarning = true;
      return style
    },
    subscribe(){
      window.UpdateSubsribeStatus("true");
    },
    dontSubscribe(){
      window.UpdateSubsribeStatus("false");
    },
    loadPlayer(){
      window.getAllPlayers().then(() =>{
        window.initList().then(() =>{
          this.players = window.secret_list_getter();
          if(this.players.length == 0){
            this.noPlayers = true;
            this.players = [null,null,null,null,null,null,null,null,null,null,]
          }
          this.isLoading = false;      
        })
        .catch((error) => {
          console.log(error);
          this.dbError = true;
        });
      }).catch((error) => {
        console.log(error);
        this.fireStoreError = true;
      });
      
    },
  },
};
