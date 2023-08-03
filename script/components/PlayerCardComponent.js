export default {
  template: `
    <div class="card" :class="calcBorderClass(player)" @click="updateCard()">
      <div class="card-body">
        <div v-if="player.Name && isHovered" style="position: absolute; top: 0; right: 0; display: flex; justify-content: space-between;align-items: center;">
          <slot>
          </slot>
          <button class="btn btn-secondary" @click.stop="CollapseCard()">collapse</button>
          
        </div>  
        <h5 v-if="player.Name" class="card-title">{{ player.Name }}<sup v-if="player.oldList">?</sup><a v-if="player.NO != null"> #{{ player.NO }}</a></h5>
        <h5 v-else class="card-title">Empty</h5>
        <div v-if="!actual_state_collapse && player.Name">
          <div class="image-container">
            <img v-if="player.School" class="player-image" :src="getImageSrc(player.School)" class="player-image" alt="Team Logo" />
          </div>
          <p class="card-text">Height: {{player.Height}}</p>
          <p class="card-text">Position: {{ player.Position }}</p>
          <p class="card-text">School: {{ player.School }} {{ calcConf(player.School) }}</p>
          <p class="card-text">School Level: {{ player.Year }}</p>
          <p class="card-text">Points: no data</p>
        </div>
        <div v-else>
          <div class="image-container" style="justify-content: right;">
            <img v-if="player.School" class="player-image" :src="getImageSrc(player.School)" class="player-image" alt="Team Logo" />
          </div>
        </div>
      </div>
    </div>
  `,
  mounted(){
    //zbUBaumzZVwFUNgXnHRl
    this.state_collapse = this.collapse 
  },
  props: {
    player: {
      type: Object,
      required: true,
    },
    collapse: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    actual_state_collapse(){
      if(!this.player.Name){
        this.state_collapse = true
        this.isHovered = false;
      }
      return this.state_collapse && this.player.Name
    }
  },
  data() {
    return {
      state_collapse: false,
      isHovered: false,
    };
  },methods: {
    getImageSrc(team){
      if(team == "Saint Francis (PA)" || team == "UMES"){
        return "https://fantasyvball.github.io/assets/" + team + ".png"
      }
      
      return "https://fantasyvball.github.io/assets/" + team + ".svg"
    },
    CollapseCard(event) {
      this.state_collapse = true;
      this.isHovered = false;
    },
    updateCard(){
      if(this.state_collapse){
        this.state_collapse = !this.state_collapse;
      }else{
        this.isHovered = !this.isHovered
      }
    },
    calcBorderClass(player){
      if(!player.Position){
        return {}
      }
      const position = player.Position.split("/")[0]
      if(position == "L"){
        return {"libero-border": true}
      }
      else if(position == "DS"){
        return {"defense-border": true}
      }
      else if(position == "S"){
        return {"setter-border": true}
      }
      else if(position == "MB"){
        return {"blocker-border": true}
      }
      else if(position == "OH"){
        return {"outside-border": true}
      }
      else if(position == "OPP"){
        return {"oppo-border": true}
      }
      else{
        return {"unknow-border": true}
      }
    },
    calcConf(school) {
      if (school) {
        for (const [conf, conf_members] of Object.entries(window.conf_member)) {
          if (conf_members.includes(school)) {
            return `(${conf} Conf.)`;
          }
        }
      }
      return "";
    },
  },
};
