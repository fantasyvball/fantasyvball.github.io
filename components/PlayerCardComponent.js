export default {
  template: `
    <div class="card" @click="updateCard()">
      <div class="card-body">
        <div v-if="player.Name && isHovered" style="position: absolute; top: 0; right: 0;" style="display: flex; justify-content: space-between;align-items: center;">
          <slot>
          </slot>
          <button class="btn btn-secondary" @click.stop="CollapseCard()">collapse</button>
          
        </div>  
        <h5 v-if="player.Name" class="card-title">{{ player.Name }}<a v-if="player.NO != null"> #{{ player.NO }}</a></h5>
        <h5 v-else class="card-title">Empty</h5>
        <div v-if="!state_collapse">
          <div class="image-container">
            <img class="player-image" :src="getImageSrc(player.School)" class="player-image" alt="Team Logo" />
          </div>
          <p class="card-text">Height: {{player.Height}}</p>
          <p class="card-text">Position: {{ player.Position }}</p>
          <p class="card-text">School: {{ player.School }} ({{ schoolConfLookup[player.School] }} Conf.)</p>
          <p class="card-text">School Level: {{ player.Year }}</p>
          <p class="card-text">Points: no data</p>
        </div>
        <div v-else>
          <div class="image-container" style="justify-content: right;">
            <img class="player-image" :src="getImageSrc(player.School)" class="player-image" alt="Team Logo" />
          </div>
        </div>
      </div>
    </div>
  `,
  mounted(){
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
  data() {
    return {
      state_collapse: false,
      isHovered: false,
      schoolConfLookup: {'Texas': 'Big 12', 'Louisville': 'ACC', 'Pittsburgh': 'ACC', 'Wisconsin': 'Big Ten', 'Stanford': 'Pac-12', 'San Diego': 'WCC', 'Ohio St.': 'Big Ten', 'Minnesota': 'Big Ten', 'Nebraska': 'Big Ten', 'Kentucky': 'SEC', 'Florida': 'SEC', 'Creighton': 'Big East', 'Oregon': 'Pac-12', 'Marquette': 'Big East', 'Rice': 'C-USA', 'Baylor': 'Big 12', 'UCF': 'AAC', 'Houston': 'AAC', 'Penn St.': 'Big Ten', 'Georgia Tech': 'ACC', 'James Madison': 'Sun Belt', 'Western Ky.': 'C-USA', 'Arkansas': 'SEC', 'UNLV': 'Mountain West', 'Southern California': 'Pac-12', 'BYU': 'WCC', 'Purdue': 'Big Ten', 'Kansas': 'Big 12', 'Yale': 'Ivy League', 'Florida St.': 'ACC', 'Iowa St.': 'Big 12', 'Towson': 'CAA', 'FGCU': 'ASUN', 'Washington St.': 'Pac-12', 'Miami (FL)': 'ACC', 'Hawaii': 'Big West', 'Washington': 'Pac-12', 'Georgia': 'SEC', 'TCU': 'Big 12', 'South Dakota': 'Summit League', 'UNI': 'MVC', 'Bowling Green': 'MAC', 'Texas St.': 'Sun Belt', 'Colorado': 'Pac-12', 'Pepperdine': 'WCC', 'Utah St.': 'Mountain West', 'Wright St.': 'Horizon', 'LSU': 'SEC', 'LMU (CA)': 'WCC', 'Auburn': 'SEC', 'Ball St.': 'MAC', 'High Point': 'Big South', 'SFA': 'WAC', 'Kennesaw St.': 'ASUN', 'Colorado St.': 'Mountain West', 'Tennessee': 'SEC', 'UTRGV': 'WAC', 'UCLA': 'Pac-12', 'SMU': 'AAC', 'Wichita St.': 'AAC', 'Mississippi St.': 'SEC', 'Drake': 'MVC', 'Lipscomb': 'ASUN', 'Jacksonville St.': 'ASUN', 'North Carolina': 'ACC', 'Colgate': 'Patriot', 'Michigan': 'Big Ten', 'Omaha': 'Summit League', 'Utah': 'Pac-12', 'Liberty': 'ASUN', 'Northwestern': 'Big Ten', 'Texas Tech': 'Big 12', 'UMBC': 'America East', 'Loyola Chicago': 'Atlantic 10', 'Texas A&M': 'SEC', 'Princeton': 'Ivy League', 'South Alabama': 'Sun Belt', 'NC State': 'ACC', 'Kansas St.': 'Big 12', 'San Jose St.': 'Mountain West', 'UIC': 'MVC', 'Long Beach St.': 'Big West', 'Illinois': 'Big Ten', 'Northern Ky.': 'Horizon', 'Duke': 'ACC', 'Indiana': 'Big Ten', 'UConn': 'Big East', 'New Mexico': 'Mountain West', 'Northern Colo.': 'Big Sky', "St. John's (NY)": 'Big East', 'Toledo': 'MAC', 'UC Santa Barbara': 'Big West', 'Boston College': 'ACC', 'South Carolina': 'SEC', 'Utah Valley': 'WAC', 'Ohio': 'MAC', 'ETSU': 'SoCon', 'Wake Forest': 'ACC', 'Army West Point': 'Patriot', 'Syracuse': 'ACC', 'Arizona': 'Pac-12', 'Troy': 'Sun Belt', 'UC Irvine': 'Big West', 'UTEP': 'C-USA', 'Denver': 'Summit League', 'Cal Poly': 'Big West', 'Xavier': 'Big East', 'Oklahoma': 'Big 12', 'Green Bay': 'Horizon', 'Central Mich.': 'MAC', 'Ole Miss': 'SEC', 'Coastal Carolina': 'Sun Belt', 'Arizona St.': 'Pac-12', 'North Texas': 'C-USA', 'Brown': 'Ivy League', 'North Dakota St.': 'Summit League', 'Dayton': 'Atlantic 10', 'New Mexico St.': 'WAC', 'Portland St.': 'Big Sky', 'Maryland': 'Big Ten', 'Buffalo': 'MAC', 'Samford': 'SoCon', 'Valparaiso': 'MVC', 'Delaware': 'CAA', 'Fairfield': 'MAAC', 'Grand Canyon': 'WAC', 'Louisiana': 'Sun Belt', 'Pacific': 'WCC', 'Austin Peay': 'ASUN', 'Central Ark.': 'ASUN', 'Davidson': 'Atlantic 10', 'Western Mich.': 'MAC', 'Iowa': 'Big Ten', 'NIU': 'MAC', 'Hofstra': 'CAA', 'North Florida': 'ASUN', 'Southern Miss.': 'Sun Belt', 'Southeastern La.': 'Southland', 'Navy': 'Patriot', 'UC Davis': 'Big West', 'Boise St.': 'Mountain West', 'Northeastern': 'CAA', 'Notre Dame': 'ACC', 'Western Caro.': 'SoCon', 'Weber St.': 'Big Sky', 'DePaul': 'Big East', 'App State': 'Sun Belt', 'Alabama': 'SEC', 'UAB': 'C-USA', 'Michigan St.': 'Big Ten', 'UT Arlington': 'WAC', 'Tulsa': 'AAC', 'Air Force': 'Mountain West', 'American': 'Patriot', 'Sacred Heart': 'NEC', 'Clemson': 'ACC', 'San Diego St.': 'Mountain West', 'Seton Hall': 'Big East', 'Virginia': 'ACC', 'Missouri': 'SEC', 'Cincinnati': 'AAC', 'Binghamton': 'America East', 'Memphis': 'AAC', 'Butler': 'Big East', 'Montana': 'Big Sky', 'Howard': 'MEAC', 'Dartmouth': 'Ivy League', 'Houston Christian': 'Southland', 'West Virginia': 'Big 12', 'Bryant': 'America East', 'VCU': 'Atlantic 10', 'South Dakota St.': 'Summit League', 'Ga. Southern': 'Sun Belt', 'Middle Tenn.': 'C-USA', 'UT Martin': 'OVC', 'Eastern Ky.': 'ASUN', 'Delaware St.': 'MEAC', 'Villanova': 'Big East', 'McNeese': 'Southland', 'Virginia Tech': 'ACC', 'Bucknell': 'Patriot', 'Loyola Maryland': 'Patriot', 'Santa Clara': 'WCC', 'Elon': 'CAA', 'Charlotte': 'C-USA', 'Montana St.': 'Big Sky', 'Oregon St.': 'Pac-12', 'San Francisco': 'WCC', 'Winthrop': 'Big South', 'George Washington': 'Atlantic 10', 'Stetson': 'ASUN', 'California Baptist': 'WAC', 'East Carolina': 'AAC', 'Col. of Charleston': 'CAA', 'Utah Tech': 'WAC', 'Tennessee Tech': 'OVC', 'Nevada': 'Mountain West', 'Old Dominion': 'Sun Belt', 'Illinois St.': 'MVC', 'Sacramento St.': 'Big Sky', 'A&M-Corpus Christi': 'Southland', 'Coppin St.': 'MEAC', 'Campbell': 'Big South', 'Southern Ill.': 'MVC', 'Jacksonville': 'ASUN', 'Portland': 'WCC', 'Cal St. Fullerton': 'Big West', 'Stony Brook': 'CAA', 'UTSA': 'C-USA', 'North Dakota': 'Summit League', 'Florida A&M': 'SWAC', 'South Fla.': 'AAC', 'UC San Diego': 'Big West', 'Alabama St.': 'SWAC', 'Tarleton St.': 'WAC', "Saint Mary's (CA)": 'WCC', 'Southeast Mo. St.': 'OVC', 'FIU': 'C-USA', 'Wyoming': 'Mountain West', 'Youngstown St.': 'Horizon', 'Tennessee St.': 'OVC', 'California': 'Pac-12', 'Rutgers': 'Big Ten', 'North Ala.': 'ASUN', 'Evansville': 'MVC', 'Milwaukee': 'Horizon', 'Fla. Atlantic': 'C-USA', 'Saint Louis': 'Atlantic 10', 'Temple': 'AAC', 'Marist': 'MAAC', 'Wofford': 'SoCon', 'New Hampshire': 'America East', 'Fordham': 'Atlantic 10', 'Sam Houston': 'WAC', 'Kent St.': 'MAC', 'Cleveland St.': 'Horizon', 'SIUE': 'OVC', 'Idaho St.': 'Big Sky', 'William & Mary': 'CAA', 'Northwestern St.': 'Southland', 'Furman': 'SoCon', 'Chicago St.': 'DI Independent', 'Southern Utah': 'WAC', 'Kansas City': 'Summit League', 'Tulane': 'AAC', 'Eastern Ill.': 'OVC', 'Louisiana Tech': 'C-USA', 'Providence': 'Big East', 'Chattanooga': 'SoCon', 'Bradley': 'MVC', 'Murray St.': 'MVC', 'Quinnipiac': 'MAAC', 'Iona': 'MAAC', 'Oral Roberts': 'Summit League', 'Abilene Christian': 'WAC', 'Eastern Wash.': 'Big Sky', 'Lehigh': 'Patriot', 'The Citadel': 'SoCon', 'Charleston So.': 'Big South', 'N.C. A&T': 'CAA', 'Marshall': 'Sun Belt', 'Harvard': 'Ivy League', 'Lindenwood': 'OVC', 'Radford': 'Big South', 'UAlbany': 'America East', 'Fairleigh Dickinson': 'NEC', 'CSU Bakersfield': 'Big West', 'Bellarmine': 'ASUN', 'Gonzaga': 'WCC', 'Eastern Mich.': 'MAC', 'LIU': 'NEC', 'UNCW': 'CAA', 'Missouri St.': 'MVC', 'Mercer': 'SoCon', 'Morehead St.': 'OVC', 'Lafayette': 'Patriot', 'CSUN': 'Big West', 'Fresno St.': 'Mountain West', 'Arkansas St.': 'Sun Belt', 'Georgetown': 'Big East', 'Niagara': 'MAAC', 'Rider': 'MAAC', 'Tex. A&M-Commerce': 'Southland', 'Oakland': 'Horizon', 'Rhode Island': 'Atlantic 10', 'Belmont': 'MVC', 'Siena': 'MAAC', 'Canisius': 'MAAC', 'Robert Morris': 'Horizon', 'UNC Greensboro': 'SoCon', 'Saint Francis (PA)': 'NEC', 'Akron': 'MAC', 'Cornell': 'Ivy League', 'Northern Ariz.': 'Big Sky', 'Jackson St.': 'SWAC', 'Miami (OH)': 'MAC', 'Purdue Fort Wayne': 'Horizon', 'IUPUI': 'Horizon', 'Queens (NC)': 'ASUN', 'New Orleans': 'Southland', 'UIW': 'Southland', 'St. Francis Brooklyn': 'NEC', 'Georgia St.': 'Sun Belt', 'George Mason': 'Atlantic 10', 'Gardner-Webb': 'Big South', 'Seattle U': 'WAC', 'ULM': 'Sun Belt', 'UC Riverside': 'Big West', 'Columbia': 'Ivy League', 'Central Conn. St.': 'NEC', 'St. Thomas (MN)': 'Summit League', 'NJIT': 'America East', 'Duquesne': 'Atlantic 10', 'Little Rock': 'OVC', 'Indiana St.': 'MVC', 'Grambling': 'SWAC', 'Nicholls': 'Southland', 'Presbyterian': 'Big South', 'N.C. Central': 'MEAC', 'Idaho': 'Big Sky', 'Lamar University': 'Southland', 'Norfolk St.': 'MEAC', 'Holy Cross': 'Patriot', 'Hampton': 'CAA', 'UMES': 'MEAC', 'Western Ill.': 'Summit League', 'Penn': 'Ivy League', 'USC Upstate': 'Big South', 'Bethune-Cookman': 'SWAC', 'Texas Southern': 'SWAC', 'Morgan St.': 'MEAC', 'Merrimack': 'NEC', 'Prairie View': 'SWAC', 'Alabama A&M': 'SWAC', 'UNC Asheville': 'Big South', 'Ark.-Pine Bluff': 'SWAC', 'Southern Ind.': 'OVC', 'Stonehill': 'NEC', 'Alcorn': 'SWAC', 'Manhattan': 'MAAC', "Saint Peter's": 'MAAC', 'Mississippi Val.': 'SWAC', 'South Carolina St.': 'MEAC', 'Southern U.': 'SWAC'},
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
    }
  },
};
