import Achievement from './AchievementComponent.js';

export default {
  template:`
    <div v-if="isLoggedIn" class="player-achievement">
      <h3>Player Achievements</h3>
      <div class="row">
        <div class="col-md-4" v-for="achievement in achievements" :key="achievement.id">
          <achievement :achievement="achievement" />
          <br>
        </div>
      </div>
    </div>
    <div v-else>
      please log in to see all the achievements
    </div>
  `,
  components: {
    Achievement,
  },
  computed: {
    isLoggedIn() {
      return window.user != null;
    },
  },
  data() {
    return {
      achievements: [
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
      ],
    };
  },
};

