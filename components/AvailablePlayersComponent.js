import PlayerCard from './PlayerCardComponent.js';

export default {
  template: `
    <div v-if="isLoading">
      <div class="loading-container" style="justify-content: center; align-items: center;">
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <p class="ml-2">Your data is loading... Please wait.</p>
      </div>
    </div>
    <div v-else>
      <div class="container">
        <h1>Top Players</h1>
        <div class="row">
          <div class="col-md-4">
            <div class="mb-3">
              <label for="statsKey">Stats:</label>
              <select id="statsKey" class="form-select">
                <option value="kill">Kills</option>
                <option value="pct">Kill%</option>
                <option value="block">Blocks</option>
                <option value="assist">Assists</option>
                <option value="dig">Digs</option>
                <option value="ace">Aces</option>
              </select>
            </div>
          </div>
          <div class="col-md-4">
            <div class="mb-3">
              <label for="sortKey">Sort by:</label>
              <select id="sortKey" class="form-select" v-model="sortKey">
                <option value="name">Name</option>
                <option value="position">Position</option>
                <option value="school">School</option>
                <option value="year">School Level</option>
                <option value="points">Points</option>
              </select>
            </div>
          </div>
          <div class="col-md-4">
            <div class="mb-3">
              <label for="perPage">Results per page:</label>
              <select id="perPage" class="form-select" v-model="perPage">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>
            </div>
          </div>
          <div class="d-flex align-items-end">
            <div class="mb-3 form-check">
              <input id="showOwnedPlayers" class="form-check-input" type="checkbox" v-model="showOwnedPlayers">
              <label class="form-check-label" for="showOwnedPlayers">Show owned players</label>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div v-for="player in filteredList" :key="player.name">
              <PlayerCard :player="player"  :class="getPlayerCardClass(player)">
                <div v-if="isLoggedIn" style="position:absolute; top:0;right:0">
                  <button v-if="!owned(player)" class="btn btn-primary" @click="addPlayer(player)">Add</button>
                  <button v-if="isDroppable(player)" class="btn btn-danger" @click="releasePlayer(player)">Release</button>
                </div>
              </PlayerCard>
              <br>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <nav aria-label="Page navigation">
              <ul class="pagination justify-content-center">
                <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
                  <button class="page-link" @click="changePage(1)" :disabled="currentPage === 1">First</button>
                </li>
                <li class="page-item" v-for="pageNumber in paginationList" :key="pageNumber" :class="{ 'active': pageNumber === currentPage }">
                  <button class="page-link" @click="changePage(pageNumber)">{{ pageNumber }}</button>
                </li>
                <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
                  <button class="page-link" @click="changePage(totalPages)" :disabled="currentPage === totalPages">Last</button>
                </li>
              </ul>
            </nav>
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
      isLoading: true,
      sortKey: 'name',
      showOwnedPlayers: false,
      perPage: 5,
      currentPage: 1,
      totalPages: 0,
      unsortedPlayers: [],
      ownedPlayers: [],
    };
  },
  mounted() {
    console.log("on mounted event." + (new Date().getTime() / 1000))
    this.loadDataFromDB();
  },
  computed: {
    isLoggedIn() {
      return window.user != null;
    },
    filteredList() {
      console.log("bad event." + (new Date().getTime() / 1000))
      let list = this.unsortedPlayers.slice();

      // Apply filter by owned players
      if (!this.showOwnedPlayers) {
        list = list.filter((obj) => !this.ownedPlayers.includes(obj.id));
      }

      // Sort the list based on the selected key
      list.sort((a, b) => {
        const yearOrder = ["Fr.", "R-Fr.", "So.", "R-So.", "Jr.", "R-Jr.", "Sr.", "R-Sr.", "Gr."];
        const aSortValue = (this.sortKey == "year") ? yearOrder.indexOf(a.year.replace(/ /g,'')) : a[this.sortKey];
        const bSortValue = (this.sortKey == "year") ? yearOrder.indexOf(b.year.replace(/ /g,'')) : b[this.sortKey];
        
      
        if (typeof aSortValue === 'string' && typeof bSortValue === 'string') {
          return aSortValue.localeCompare(bSortValue);
        } else {
          return aSortValue - bSortValue; // If not strings, assume numeric and perform numeric comparison
        }
      });

      // Pagination
      this.perPage = parseInt(this.perPage)
      const totalPages = Math.ceil(list.length / this.perPage);
      if(totalPages < this.currentPage){
        this.currentPage = totalPages
      }
      this.totalPages = totalPages;
    
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      
      list = list.slice(startIndex, endIndex);
      console.log(list)
      return list;
      
    },
    paginationList() {
      // dummy calculation to force recalculation of pagination when perPage changes
      const startIndex = 0 * this.perPage;

      
      const closestPages = 5; // Show 5 pages before and after the current page
  
      let startPage = Math.max(this.currentPage - closestPages, 1);
      let endPage = Math.min(this.currentPage + closestPages, this.totalPages);
  
      // Adjust the start and end page to show exactly 10 pages
      while (endPage - startPage < closestPages * 2 && endPage < this.totalPages) {
        endPage++;
      }
      while (endPage - startPage < closestPages * 2 && startPage > 1) {
        startPage--;
      }
  
      // Create an array of page numbers
      const pageNumbers = [];
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
  
      return pageNumbers;
    },
  },
  methods: {
    changePage(pageNumber) {
      if (pageNumber >= 1 && pageNumber <= this.totalPages) {
        this.currentPage = pageNumber;
      }
    },
    loadDataFromDB(){
      this.ownedPlayers = window.secret_list_getter();
      window.getAllPlayers()
        .then((querySnapshot) => {
          console.log("processing event." + (new Date().getTime() / 1000))
          this.unsortedPlayers =  querySnapshot;
        })
        .catch((error) => {
          console.log(error)
          this.unsortedPlayers = [
            
          ]
        })
        .finally(() => {
          console.log("finally event." + (new Date().getTime() / 1000))
          this.isLoading = false;
        })
    },
    owned(player){
      return this.ownedPlayers.includes(player.id)
    },
    addPlayer(player){
      const status = window.secret_list_adder(player.id)
      if(status){
        this.ownedPlayers = window.secret_list_getter();
      }else{
        //pass
      }
      
    },
    releasePlayer(player){
      const status = window.secrect_list_dropper(player.id)
      if(status){
        this.ownedPlayers = window.secret_list_getter();
      }else{
        //pass
      }
    },
    isDroppable(player){
      return this.ownedPlayers.indexOf(player.id) >= 7
    },
    getPlayerCardClass(player) {
      return {
        'bg-primary': this.ownedPlayers.includes(player.id),
        'text-white': this.ownedPlayers.includes(player.id)
      };
    },
    
  },
};