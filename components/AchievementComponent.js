

export default {
  template:`
    <div class="card achievement">
      <img :src="achievement.image" class="card-img-top" :alt="achievement.title+'.png'">
      <div class="card-body" :style="calcStyle(achievement.level)">
        <h5 class="card-title">{{ achievement.title }}</h5>
        <p class="card-text">{{ achievement.description }}</p>
        <div class="progress">
          <div class="progress-bar" :style="{ width: progressWidth }"></div>
        </div>
        <p class="card-text">{{ progressText }}</p>
        <button class="btn btn-primary" @click="claimReward" :disabled="!isCompleted">Claim Reward</button>
      </div>
    </div>  
  `,
  props: {
    achievement: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isCompleted() {
      return this.achievement.progress >= this.achievement.target;
    },
    progressWidth() {
      return (this.achievement.progress / this.achievement.target) * 100 + "%";
    },
    progressText() {
      return `${this.achievement.progress}/${this.achievement.target}`;
    },
  },
  methods: {
    claimReward() {
      // TODO: Implement reward claim functionality
    },
    calcStyle(level) { 
      let style = {}
      if(level === 1){
        style.backgroundColor = "#BA8C63"
      }else if(level == 2){
        style.backgroundColor = "#825E2F"
      }else if(level == 3){
        style.backgroundColor = "#A6A6A6"
      }else if(level >= 4){
        style.backgroundColor = "#B78727"
      }
      return style 
    },
  },
};

