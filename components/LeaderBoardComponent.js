export default {
  template:`
    <div class="container">
      <h1>Leaderboard</h1>
  
      <div class="btn-group mb-3" role="group">
        <button
          v-for="btn in buttons"
          :key="btn.value"
          type="button"
          class="btn btn-outline-primary"
          :class="{ active: btn.value === selectedButton }"
          :disabled="btn.value === selectedButton"
          @click="updateRanking(btn.value)"
        >
          {{ btn.label }}
        </button>
      </div>
  
      <div class="row">
        <div class="col-lg-6">
          <div class="card mb-3" v-for="(player, index) in getCurrentPagePlayers" :key="player.name" :class="getPlayerCardClass(player)">
            <div class="card-body">
              <div style="position:absolute; top:0; right:0;">
                <button class="btn btn-primary me-2" @click="viewRoster(player)">view roster</button>
              </div>
              <h5 class="card-title">Rank {{ player.rank }}: {{ relabel(player) }}</h5>
              <div class="card-text">
                <p>Points: {{ calcPoints(player) }}</p>
                <p>Most Points in a Week: {{ calcMost(player) }}</p>
                <p>Favorite Team: {{ player.favoriteTeam }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav v-if="totalPages > 1" class="mt-4">
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <a class="page-link" @click.prevent="changePage(currentPage - 1)" href="#">Previous</a>
          </li>
          <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: currentPage === page }">
            <a class="page-link" @click.prevent="changePage(page)" href="#">{{ page }}</a>
          </li>
          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <a class="page-link" @click.prevent="changePage(currentPage + 1)" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  `,
  data() {
    return {
      selectedButton: 'globalCumulative',
      
      players: [
        {
          name: 'Player K',
          id: 0,
          favoriteTeam: 'Team Y',
          weeklyPoints: [30, 40, 20, 50, 45, 35, 60]
        },
        {
          name: 'Player L',
          id: 1,
          favoriteTeam: 'Team Z',
          weeklyPoints: [15, 25, 30, 20, 40, 30, 35]
        },
        {
          name: 'Player M',
          id: 2,
          favoriteTeam: 'Team X',
          weeklyPoints: [10, 20, 15, 25, 30, 40, 50]
        },
        {
          name: 'Player N',
          id: 3,
          favoriteTeam: 'Team Y',
          weeklyPoints: [25, 35, 40, 15, 20, 25, 30]
        },
        {
          name: 'Player O',
          id: 4,
          favoriteTeam: 'Team Z',
          weeklyPoints: [20, 30, 25, 35, 40, 20, 25]
        },
        {
          name: 'Player P',
          id: 5,
          favoriteTeam: 'Team X',
          weeklyPoints: [40, 50, 45, 35, 30, 40, 20]
        },
        {
          name: 'Player Q',
          id: 6,
          favoriteTeam: 'Team Y',
          weeklyPoints: [30, 40, 20, 50, 45, 35, 60]
        },
        {
          name: 'Player R',
          id: 7,
          favoriteTeam: 'Team Z',
          weeklyPoints: [15, 25, 30, 20, 40, 30, 35]
        },
        {
          name: 'Player S',
          id: 8,
          favoriteTeam: 'Team X',
          weeklyPoints: [10, 20, 15, 25, 30, 40, 50]
        },
        {
          name: 'Player T',
          id: 9,
          favoriteTeam: 'Team Y',
          weeklyPoints: [25, 35, 40, 15, 20, 25, 30]
        },
        {
          name: 'Player U',
          id: 10,
          favoriteTeam: 'Team Z',
          weeklyPoints: [20, 30, 25, 35, 40, 20, 25]
        },
        {
          name: 'Player V',
          id: 11,
          favoriteTeam: 'Team X',
          weeklyPoints: [40, 50, 45, 35, 30, 40, 20]
        },
        // Add more players...
      ],
      friends: ['Player L', 'Player O', 'Player Q','Player S', 'Player U', 'Player V'], // Dummy list of friends
      currentPage: 1,
      pageSize: 5,
    };
  },
  computed: {
    buttons() { 
      if (window.user) {
        return [
          { label: 'Global Cumulative', value: 'globalCumulative' },
          { label: 'Global Weekly', value: 'globalWeekly' },
          { label: 'Friend Cumulative', value: 'friendCumulative' },
          { label: 'Friend Weekly', value: 'friendWeekly' },
        ];  
      }
      return [
        { label: 'Global Cumulative', value: 'globalCumulative' },
        { label: 'Global Weekly', value: 'globalWeekly' }
      ];
    },
    rankedPlayers() {
      // Filter and rank players based on the selected button
      let filteredPlayers = [];
      switch (this.selectedButton) {
        case 'friendCumulative':
          filteredPlayers = this.rankPlayersByPoints(this.filterFriends());
          break;
        case 'friendWeekly':
          filteredPlayers = this.rankPlayersByWeeklyPoints(this.filterFriends());
          break;
        case 'globalCumulative':
          filteredPlayers = this.rankPlayersByPoints(this.players);
          break;
        case 'globalWeekly':
          filteredPlayers = this.rankPlayersByWeeklyPoints(this.players);
          break;
        default:
          filteredPlayers = this.rankPlayersByPoints(this.players);
          break;
      }

      return filteredPlayers;
    },
    currentUserID() {
      if (window.user) {
        return 0;
      }
      return '';
    },
    totalPages() {
      return Math.ceil(this.rankedPlayers.length / this.pageSize);
    },

    // Get the players for the current page
    getCurrentPagePlayers() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.rankedPlayers.slice(start, end);
    },
  },
  methods: {
    getPlayerCardClass(player) {
      return {
        'bg-primary': player.id === this.currentUserID,
        'text-white': player.id === this.currentUserID
      };
    },
    relabel(player) {
      if (player.id === this.currentUserID) {
        return 'You';
      }
      return player.name;
    },
    updateRanking(buttonValue) {
      this.selectedButton = buttonValue;
      this.currentPage = 1;
    },
    filterFriends() {
      return this.players.filter(player => this.friends.includes(player.name) || player.id == this.currentUserID);
    },
    rankPlayersByPoints(players) {
      return players
        .slice()
        .sort((a, b) => this.calcPoints(b) - this.calcPoints(a))
        .map((player, index) => ({
          ...player,
          rank: index + 1
        }));
    },
    rankPlayersByWeeklyPoints(players) {
      return players
        .slice()
        .sort((a, b) => this.calcMost(b) - this.calcMost(a))
        .map((player, index) => ({
          ...player,
          rank: index + 1
        }));
    },
    calcPoints(player) {
      if (this.selectedButton.toLowerCase() === 'globalcumulative' || this.selectedButton.toLowerCase() === 'friendcumulative') {
        return player.weeklyPoints.reduce((partialSum, a) => partialSum + a, 0);
      } else {
        return player.weeklyPoints[player.weeklyPoints.length - 1];
      }
    },
    calcMost(player) {
      return Math.max.apply(Math, player.weeklyPoints);
    },
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    viewRoster(player){
      this.$router.push({path: "/user/"+player.name[7]});
    },
  }
};
