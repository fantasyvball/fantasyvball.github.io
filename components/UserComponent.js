import PlayerCard from './PlayerCardComponent.js';
export default {
  template: `
    <div>
      <div v-if="fireStoreError" class="alert alert-danger mt-3" role="alert">
        Firestore has encountered an error. Please try again later.
        <button type="button" class="btn-close position-absolute end-0" @click="fireStoreError = false"></button>
      </div>

      <div v-if="dbError" class="alert alert-danger mt-3" role="alert">
        we has encountered an error loading content from db. Please try again later.
        <button type="button" class="btn-close position-absolute end-0" @click="dbError = false"></button>
      </div>

      

      <div>
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
                <PlayerCard :player="starter[0]" :style="calcStyle(0,'L')">
                </PlayerCard>
              </div>
              <div class="col-md-4">
                <h3>S</h3>
                <PlayerCard :player="starter[1]" :style="calcStyle(1,'S')">
                </PlayerCard>
              </div>
              <div class="col-md-4">
                <h3>OPP</h3>
                <PlayerCard :player="starter[2]" :style="calcStyle(2,'OPP')">
                </PlayerCard>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <h3>MB</h3>
                <PlayerCard :player="starter[3]" :style="calcStyle(3,'MB')">
                </PlayerCard>
              </div>
              <div class="col-md-6">
                <h3>MB</h3>
                <PlayerCard :player="starter[4]" :style="calcStyle(4,'MB')">
                </PlayerCard>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <h3>OH</h3>
                <PlayerCard :player="starter[5]" :style="calcStyle(5,'OH')">
                </PlayerCard>
              </div>
              <div class="col-md-6">
                <h3>OH</h3>
                <PlayerCard :player="starter[6]" :style="calcStyle(6,'OH')">
                </PlayerCard>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <h3>Bench</h3>
                <div v-for="playerIndexPair in bench" :key="bench" class="mb-3">
                  <PlayerCard :player="playerIndexPair[0]">
                  </PlayerCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  `,
  components: {
    PlayerCard,
  },
  data() {
    return {
      players: [],
      isLoading: true,
      dbError: false,
      fireStoreError: false,
    };
  },
  mounted() {
    this.loadPlayer(this.$route.params.id);
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
    calcStyle(index,pos){
      return {}
      const style = {};
      if(!this.players[index] || this.players[index].position.includes(pos)){
        return style;
      }
      style.backgroundColor = "#d8bcbe";
      this.outOfPostionWarning = true;
      return style
    },
    loadPlayer(id){
      window.getAllPlayers().then(() =>{
        window.getUserRoster(id).then((obj) =>{
          this.players = obj
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
