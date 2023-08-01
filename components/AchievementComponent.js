export default {
  template:`
    <div class="card achievement">
      <img src="./assets/question_mark.jpg" class="card-img-top" alt="trophy image">
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
        style.backgroundColor = "#C19A6B"
      }else if(level == 2){
        style.backgroundColor = "#CD7F32"
      }else if(level == 3){
        style.backgroundColor = "#D8D8D8"
      }else if(level == 4){
        style.backgroundColor = "#D4AF37"
      }else if(level >=5){
        style.backgroundColor = "#89CFF0"
      }
      
      return style 
    },
  },
};
