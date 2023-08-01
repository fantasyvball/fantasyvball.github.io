import Achievement from './AchievementComponent.js';

export default {
  template:`
    <div class="player-achievement">
      <div class="alert alert-info mt-3 position-relative" role="alert">
        🚧 🚧 🚧 This page is currently under construction! We appreciate your understanding and would love to hear your feedback as we continue to develop and improve it! 👷👷👷
      </div>
      
      <h3>Achievements</h3>
  
      <div v-if="isLoggedIn">
        <!-- Completed Achievements -->
        <h4>Completed</h4>
        <div class="row">
          <div class="col-md-4" v-for="achievement in completedAchievements" :key="achievement.id">
            <achievement :achievement="achievement" />
            <br>
          </div>
        </div>
  
        <!-- In Progress Achievements -->
        <h4>In Progress</h4>
        <div class="row">
          <div class="col-md-4" v-for="achievement in inProgressAchievements" :key="achievement.id">
            <achievement :achievement="achievement" />
            <br>
          </div>
        </div>
  
        <!-- Undiscovered Achievements -->
        <h4>Undiscovered</h4>
        <div class="row">
          <div class="col-md-4" v-for="achievement in undiscoveredAchievements" :key="achievement.id">
            <achievement :achievement="{id: -1, title: '???', description: '???', level: 0, progress: 0, target: 1}" />
            <br>
          </div>
        </div>
      </div>
  
      <div v-else>
        please log in to see all the achievements
      </div>
    </div>
  `,
  components: {
    Achievement,
  },
  computed: {
    isLoggedIn() {
      return window.user != null;
    },
    completedAchievements() {
      return this.achievements.filter(achievement => achievement.progress === achievement.target);
    },
    inProgressAchievements() {
      return this.achievements.filter(achievement => achievement.progress > 0 && achievement.progress < achievement.target);
    },
    undiscoveredAchievements() {
      return this.achievements.filter(achievement => achievement.progress === 0);
    },
  },
  data() {
    return {
      achievements: [
        {
          id: 0,
          title: 'Early Investor',
          description: 'Earn this badge by signing up before official release. Thank you for your support!',
          level: 5,
          progress: 1,
          target: 1,
        },
        {
          id: 1,
          title: 'Most Valuable Player',
          description: 'acquire top scorer from the week.',
          level: 0,
          progress: 0,
          target: 1,
        },
        {
          id: 2,
          title: 'Mini Fame',
          description: 'Became the top scorer of the friend group',
          level: 1,
          progress: 1,
          target: 5,
        },
        {
          id: 3,
          title: 'Flamming hot hand',
          description: 'acquire 4 players with at least one ace during the week',
          level: 2,
          progress: 3,
          target: 4,
        },
        {
          id: 4,
          title: 'All Conference',
          description: 'Aquire 7 players from the same conference but different team.',
          level: 3,
          progress: 6,
          target: 7,
        },
        {
          id: 5,
          title: 'All Collegiate',
          description: 'Aquire 10 players from 10 different conference.',
          level: 4,
          progress: 8,
          target: 15,
        },
        {
          id: 6,
          title: 'Most Valuable Player',
          description: 'acquire top scorer from the week.',
          level: 0,
          progress: 0,
          target: 1,
        },
        {
          id: 7,
          title: '???',
          description: '???',
          level: 0,
          progress: 0,
          target: 1,
        },
        {
          id: 8,
          title: '???',
          description: '???',
          level: 0,
          progress: 0,
          target: 1,
        },
      ],
    };
  },
};
