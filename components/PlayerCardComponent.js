 // " 
export default {
  template: `
    <div class="card" @click="isHovered=!isHovered">
      <div class="card-body">
        <slot v-if="player.name && isHovered"></slot>
        <h5 v-if="player.name" class="card-title">{{ player.name }}</h5>
        <h5 v-else class="card-title">Empty</h5>
        <p class="card-text">Position: {{ player.position }}</p>
        <p class="card-text">School: {{ player.school }}</p>
        <p class="card-text">School Level: {{ player.year }}</p>
        <p class="card-text">Points: {{ player.points }}</p>
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
