import PlayerCard from './PlayerCardComponent.js';

export default {
  template: `
    <div class="alert alert-info mt-3 position-relative" role="alert">
      	Players with a <sup>?</sup> symbol in their name are from schools that haven't announced their official roster for 2023. Please note that the information on these player cards is subject to change and may be removed once the official rosters are announced.
    </div>
    <div v-if="noAddError" class="alert alert-danger mt-3" role="alert">
      Player is not added because roster is full. (max:10 players)
      <button type="button" class="btn-close position-absolute end-0" @click="noAddError = false"></button>
    </div>
    <div class="container">
      <h1>Top Players</h1>
      
      <div class="row">
        <div class="col-md-3">
          <div class="mb-3">
            <label for="searchFilter">Search by Name:</label>
            <input id="searchFilter" class="form-control" type="text" v-model="searchQuery" placeholder="Enter player name...">
          </div>
        </div>
        <div class="col-md-3">
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
        <div class="col-md-3">
          <div class="mb-3">
            <label for="sortKey">Sort by:</label>
            <select id="sortKey" class="form-select" v-model="sortKey">
              <option value="Name">Name</option>
              <option value="Position">Position</option>
              <option value="School">School</option>
              <option value="Year">School Level</option>
              <option value="Points">Points</option>
              <option value="NO">Jersey Number</option>
              <option value="Height">Height</option>
            </select>
          </div>
        </div>
        <div class="col-md-3">
          <div class="mb-3">
            <label for="perPage">Results per page:</label>
            <select id="perPage" class="form-select" v-model="perPage">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="mb-3">
              <label for="selectedSchools">Conferences/Schools:</label>
              <select id="selectedSchools" multiple  v-model="selectedSchools">
                <option value="all">All Schools</option>
                
                <option value="conf" disabled>Conferences</option>
                <option v-for="conf in allConf" :key="conf" :value="conf">{{ conf }}</option>
                <option value="sch" disabled>Schools</option>
                <option v-for="school in schools" :key="school" :value="school">{{ school }}</option>
              </select>
            </div>
          </div>
          <div class="col-md-4">
            <div class="mb-3">
              <label for="selectedPositions">Positions(color coded):</label>
              <select id="selectedPositions" multiple  v-model="selectedPositions">
                <option value="all">All Positions</option>
                <option disabled>Attackers</option>
                <option value="MB">MB(Baby Blue)</option>
                <option value="OH">OH(Orange)</option>
                <option value="OPP">OPP(Purple)</option>
                <option disabled>Non-Attackers</option>
                <option value="L">L(Lime)</option>
                <option value="S">S(Silver)</option>
                <option value="DS">DS(Denim)</option>
                
              </select>
            </div>
          </div>
          <div class="col-md-4">
            <div class="mb-3">
              <label for="selectedYears">Years:</label>
              <select id="selectedYears" multiple  v-model="selectedYears">
                <option value="all">All Year</option>
                <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
              </select>
            </div>
          </div>
        </div>
    
        <div class="row">
          <div v-if="isLoggedIn" class="col-md-6 d-flex align-items-end">
            <div class="mb-3 form-check">
              <input id="showOwnedPlayers" class="form-check-input" type="checkbox" v-model="showOwnedPlayers" />
              <label class="form-check-label" for="showOwnedPlayers">Show owned players</label>
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3 form-check">
              <input id="collapseAll" class="form-check-input" type="checkbox" v-model="collapseAll" @change="onCollapseAllChange"/>
              <label class="form-check-label" for="collapseAll">Collapse All</label>
            </div>
          </div>
        </div>
      </div>
      <div v-if="isLoading">
        <div class="loading-container" style="justify-content: center; align-items: center;">
          <div class="spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <p class="ml-2">Your data is loading... Please wait.</p>
        </div>
      </div>
      <div v-else>
        <div class="row">
          <div class="col-md-12">
            <div v-for="player in filteredList" :key="player.Name">
              <PlayerCard :player="player" :class="getPlayerCardClass(player)" :collapse="collapseAll">
                <div>
                  <button v-if="isLoggedIn && !owned(player)" class="btn btn-primary me-2" @click="addPlayer(player)">Add</button>
                  <button v-if="isLoggedIn && isDroppable(player)" class="btn btn-danger me-2" @click="releasePlayer(player)">Release</button>
                </div>
              </PlayerCard>
              <br />
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
      sortKey: 'Name',
      showOwnedPlayers: true,
      perPage: 5,
      currentPage: 1,
      totalPages: 0,
      unsortedPlayers: [],
      ownedPlayers: [],
      noAddError: false,
      schools: [],
      allConf: ['AAC', 'ACC', 'ASUN', 'America East', 'Atlantic 10', 'Big 12', 'Big East', 'Big Sky', 'Big South', 'Big Ten', 'Big West', 'C-USA', 'CAA', 'DI Independent', 'Horizon', 'Ivy League', 'MAAC', 'MAC', 'MEAC', 'MVC', 'Mountain West', 'NEC', 'OVC', 'Pac-12', 'Patriot', 'SEC', 'SWAC', 'SoCon', 'Southland', 'Summit League', 'Sun Belt', 'WAC', 'WCC'],
      positionColorPairs: [["L","lime"], ["S","silver"], ["DS","denim"], ["MB","baby blue"], ["OH","orange"], ["OPP","purple"]],
      years: ["Fy.", "Fr.", "R-Fr.", "So.", "R-So.", "Jr.", "R-Jr.", "Sr.", "R-Sr.", "Gr."],
      selectedSchools: [], // Array to store selected schools
      selectedPositions: [], // Array to store selected positions
      selectedYears: [], // Array to store selected years
      searchQuery: '', // String to store the search query
      collapseAll: false,
    };
  },
  mounted() {
    this.schools = window.all_school.slice()
    this.loadDataFromDB();
    setTimeout(() => {
      new MultipleSelect('#selectedSchools', {
          placeholder: 'filter school',
        });
      const positionSelector = new MultipleSelect('#selectedPositions', {
          placeholder: 'filter position',
        });
      new MultipleSelect('#selectedYears', {
          placeholder: 'filter year',
        });
      positionSelector.$el.children[1].children[1].children[6].classList.add("libero-border")
      positionSelector.$el.children[1].children[1].children[7].classList.add("setter-border")
      positionSelector.$el.children[1].children[1].children[8].classList.add("defense-border")
      positionSelector.$el.children[1].children[1].children[2].classList.add("blocker-border")
      positionSelector.$el.children[1].children[1].children[3].classList.add("outside-border")
      positionSelector.$el.children[1].children[1].children[4].classList.add("oppo-border")
      
    }, "0");
    
    
    
    
    // select.setSelected(['java']); 
  },
  computed: {
    isLoggedIn() {
      return window.user != null;
    },
    filteredList() {

      // dummy calculation do not remove.
      const bruh = this.collapseAll * 0
      
      let list = this.unsortedPlayers.slice();

      // Apply filter by owned players
      
      if (this.searchQuery.length != 0) {
        
        list = list.filter((obj) => obj.Name.toLocaleLowerCase().includes(this.searchQuery.toLocaleLowerCase()));
      }      
      if (this.selectedSchools.length != 0 && !this.selectedSchools.includes("all")) {
        let allowedSchool = [];
        // Find the intersection of arr1 and arr2
        const intersected = this.selectedSchools.filter((item) => this.allConf.includes(item));
        intersected.forEach((el) => {
          allowedSchool = allowedSchool.concat(window.conf_member[el])
        })
        // Find the non-intersection (elements in arr2 but not in arr1)
        const notIntersected = this.selectedSchools.filter((item) => !this.allConf.includes(item));
        allowedSchool = allowedSchool.concat(notIntersected)
        list = list.filter((obj) => allowedSchool.includes(obj.School));
      }

      if (this.selectedPositions.length != 0 && !this.selectedPositions.includes("all")) {
        
        list = list.filter((obj) => {
           const [pos1, pos2] = obj.Position.split("/")
           return this.selectedPositions.includes(pos1) || this.selectedPositions.includes(pos2) 
        });
      }

      if (this.selectedYears.length != 0 && !this.selectedYears.includes("all")) {
        list = list.filter((obj) => this.selectedYears.includes(obj.Year));
      }

      if (!this.showOwnedPlayers) {
        list = list.filter((obj) => !this.ownedPlayers.includes(obj.id));
      }

      
      
      // Sort the list based on the selected key
      list.sort((a, b) => {
          const yearOrder = ["Fr.", "Fy.", "R-Fr.", "So.", "R-So.", "Jr.", "R-Jr.", "Sr.", "R-Sr.", "Sr.+", "Gr."];
          const positionOrder = ["MB","OH","OPP","L","S","DS"]
          let aSortValue;
          let bSortValue;
          if(this.sortKey === "Height"){
            const [feet_a,inch_a] = a.Height.split("-")
            const [feet_b,inch_b] = b.Height.split("-")
            aSortValue = -(Number(feet_a) * 12 + (Number(inch_a)))
            bSortValue = -(Number(feet_b) * 12 + (Number(inch_b)))
            
          }else if(this.sortKey === "Position"){
            aSortValue = positionOrder.indexOf(a.Position.split("/")[0])
            bSortValue = positionOrder.indexOf(b.Position.split("/")[0])
            
          }else{
            aSortValue = this.sortKey === "Year" ? yearOrder.indexOf(a.Year) : a[this.sortKey];
            bSortValue = this.sortKey === "Year" ? yearOrder.indexOf(b.Year) : b[this.sortKey];
          }
          
        
          // If a.year or b.year is not in yearOrder, set their sortValue to a very large number
          const maxYearOrderIndex = yearOrder.length;
          aSortValue = aSortValue === -1 ? maxYearOrderIndex : aSortValue;
          aSortValue = aSortValue === "" ? maxYearOrderIndex : aSortValue;
          aSortValue = aSortValue === undefined ? maxYearOrderIndex : aSortValue;
          
          bSortValue = bSortValue === -1 ? maxYearOrderIndex : bSortValue;
          bSortValue = bSortValue === "" ? maxYearOrderIndex : bSortValue;
          bSortValue = bSortValue === undefined ? maxYearOrderIndex : bSortValue;
        
        
      
        if (typeof aSortValue === 'string' && typeof bSortValue === 'string') {
          return aSortValue.localeCompare(bSortValue);
        } else {
          return aSortValue - bSortValue; // If not strings, assume numeric and perform numeric comparison
        }
      });

      // Pagination
      this.perPage = parseInt(this.perPage)
      const totalPages = Math.ceil(list.length / this.perPage);
      if(totalPages == 0){
        this.currentPage = 1
      }else if(totalPages < this.currentPage){
        this.currentPage = totalPages
      }
      this.totalPages = totalPages;
    
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      
      list = list.slice(startIndex, endIndex);      
      
      return list;
    },
    paginationList() {
      // dummy calculation to force recalculation of pagination when perPage changes
      const _ = 0 * this.perPage;

      
      const closestPages = 2; // Show 5 pages before and after the current page
  
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
          this.unsortedPlayers =  querySnapshot;
          
        })
        .catch((error) => {
          console.log(error)
          this.unsortedPlayers = [
            
          ]
        })
        .finally(() => {
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
        this.noAddError = true;
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
    onCollapseAllChange(){
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      },0);
    }
  },
};
