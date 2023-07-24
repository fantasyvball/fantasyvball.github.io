export default{
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <div class="navbar-header">
          <button class="navbar-toggler collapsed" @click="toggle()">
            <span class="icon-bar top-bar"></span>
            <span class="icon-bar middle-bar"></span>
            <span class="icon-bar bottom-bar"></span>
          </button>
        </div>
        <router-link class="navbar-brand flex-grow-1" to="/">Fantasy Volleyball</router-link>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li v-if="isLoggedIn" class="nav-item">
              <router-link class="nav-link" to="/roster">Roster</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/top-players">Top Players</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/leaderboard">Leaderboard</router-link>
            </li>
            <li v-if="isLoggedIn" class="nav-item">
              <router-link class="nav-link" to="/achievement">Achievement</router-link>
            </li>
            <li v-if="isLoggedIn" class="nav-item">
              <router-link class="nav-link" to="/stats">Stats</router-link>
            </li>
            <li v-if="isLoggedIn" class="nav-item">
              <a class="router-link-active router-link-exact-active nav-link" data-bs-toggle="modal" href = "#logoutModal">Logout</a>
            </li>
            <li v-else class="nav-item">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>
            <li class="nav-item">
              <div class="switch">
                <input type="checkbox" class="switch__input" id="Switch"  @change="toggleTheme" >
                <label class="switch__label" for="Switch">
                  <span class="switch__indicator"></span>
                  <span class="switch__decoration"></span>
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    
    <!-- Logout Confirmation Modal -->
    <div class="modal fade" id="logoutModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" style="background-color: #333; color: #fff; border-radius: 0.5rem;">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Logout Confirmation</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Are you sure you want to logout?
          </div>
          <div class="modal-footer">
            <!-- Button to cancel logout -->
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <!-- Button to confirm logout -->
            <button type="button" class="btn btn-danger" @click="logout()"  data-bs-dismiss="modal">Logout</button>
          </div>
        </div>
      </div>
    </div>
    
  `,
  data() {
    return {
      isLoggedIn: false,
      showLogoutModal: true,
    };
  },
  mounted() {
    if(window.hasFireUser()){
      window.user = true;
    }
  },
  watch: {
    $route() {
      this.isLoggedIn = window.user != null;
      this.closeNavbar();
    },
  },
  methods: {
    closeNavbar() {
      // Close the navbar when a route change occurs
      const navbar = document.querySelector('.navbar-collapse');
      const toggler = document.querySelector('.navbar-toggler');
      if (navbar.classList.contains('show')) {
        navbar.classList.remove('show');
        toggler.classList.add("collapsed");
      }
    },
    toggle() {
      const navbar = document.querySelector('.navbar-collapse');
      const toggler = document.querySelector('.navbar-toggler');
      if (navbar.classList.contains('show')) {
        navbar.classList.remove('show'); 
        toggler.classList.add("collapsed");
      }else{
        navbar.classList.add('show'); 
        toggler.classList.remove("collapsed");
      }
    },
    toggleTheme() {
      const themeSwitch = document.getElementById("Switch");
      if (themeSwitch.checked) {
        // Dark theme
        document.body.classList.remove("dark-theme");
      } else {
        // Light theme
        document.body.classList.add("dark-theme");
      }
    },
    logout(){
      window.user = null;
      window.fireAuthOut();
      this.$router.push({path: "/", query: {success: true}});
    },
  },
};