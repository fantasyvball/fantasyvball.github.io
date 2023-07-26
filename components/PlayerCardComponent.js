 // " 
export default {
  template: `
    <div class="card" @click="isHovered=!isHovered">
      <div class="card-body">
        <slot v-if="player.Name && isHovered"></slot>
        <h5 v-if="player.Name" class="card-title">{{ player.Name }}</h5>
        <h5 v-else class="card-title">Empty</h5>
        <p class="card-text">Position: {{ player.Position }}</p>
        <p class="card-text">School: {{ player.School }}</p>
        <p class="card-text">School Level: {{ player.Year }}</p>
        <p class="card-text">Points: {{ player.Points }}</p>
      </div>
    </div>
  `,
  props: ['player'],
  data() {
    return {
      isHovered: false,
    };
  },
};
