import rawData from './rawData/rpiWeekly.js';
import sk_lk_obj from './rawData/rpiLink.js';
import prevRPI from './rawData/rpiHistoric.js'
import prevxRPI from './rawData/xrpiHistoric.js';

export default{
    template:`
      
      <div class="modal fade" id="datamodal" tabindex="-1" aria-labelledby="datamodalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content" style="background-color: #333; color: #fff; border-radius: 0.5rem;">
            <div class="modal-header">
              <h5 class="modal-title" id="datamodallLabel">Ranking Trends Visualized</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div id="chart-container">
                
              </div>
            </div>
            <div class="modal-footer">
              <!-- Button to cancel logout -->
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    
      <span>most updated NCAA RPI RANKING YOU WILL EVER FIND. LAST UPDATE OCT 9 2023 11:13EST</span>
      
      
      <div class="col-md-3">
        <div class="mb-3">
          <label for="conf">Show selected conference only:</label>
          <select id="conf" class="form-select" v-model="conf">
            <option>ALL CONFERENCE</option>
            <option v-for="conf in allConf" :key="conf" :value="conf"><!img :src="'./conf_pics/'+conf+'.svg'"/-->{{ conf }}</option>
          </select>
        </div>
      </div>
      
      <div id="performanceTable" class="dataframe"  style="overflow-x: auto;"></div>
    `,
  data() {
    return {
      allConf: ['AAC', 'ACC', 'ASUN', 'America East', 'Atlantic 10', 'Big 12', 'Big East', 'Big Sky', 'Big South', 'Big Ten', 'Big West', 'C-USA', 'CAA', 'DI Independent', 'Horizon', 'Ivy League', 'MAAC', 'MAC', 'MEAC', 'MVC', 'Mountain West', 'NEC', 'OVC', 'Pac-12', 'Patriot', 'SEC', 'SWAC', 'SoCon', 'Southland', 'Summit League', 'Sun Belt', 'WAC', 'WCC'],
      conf:"ALL CONFERENCE",
      
    };
  },
  methods: {
    shouldDisplay(id) {
      if(this.conf == "ALL CONFERENCE"){
          return true
      }
      console.log(id)
      console.log(window.conf_member[this.conf]);
      return 
    },
  },
  watch: {
    conf: function () {
      const all_rows = document.getElementsByClassName("gridjs-tr")
      if(this.conf == "ALL CONFERENCE"){
          for(let i = 1;i<all_rows.length;i++){
            all_rows[i].style = "display:revert;"
          }
      }
      else{
        for(let i = 1;i<all_rows.length;i++){
            const school_name = all_rows[i].children[0].textContent;
            if(window.conf_member[this.conf].includes(school_name)){
              all_rows[i].style = "display:revert;"              
            }else{
              all_rows[i].style = "display:none;"              
            }
          }
      }
      return window.conf_member[this.conf]
      console.log(this.conf)
    },
  },
  mounted() {
    // Grid.js initialization for the performance table

    const gameByGameData = [];


      

    window.drawTrend = ((rpi_data, xrpi_data, labels) => {
      const canvas_container = document.getElementById("chart-container");
      canvas_container.innerHTML = ""
      const canvas = document.createElement("canvas")
      canvas_container.prepend(canvas)
      new Chart(canvas, {
        type: 'line',
        data: {
          labels: labels,
          
          datasets: [{
            label: 'RPI Ranking',
            data: rpi_data
          }, {
            label: 'xRPI Ranking',
            data: xrpi_data,
          }],
        },
        options :{
            scales: {
                y: {
                    
                    reverse: true
                  
                }
            }
        }
        
      });
    })

    const weeklabel = ["w1","w2","w3","w4","w5","w6","w7","w8"]


    
    rawData.forEach((el) =>{
      const img = new Image()
      const sk_name = el[0];
      
      img.src = "https://fantasyvball.github.io/assets/"+sk_name+".svg";
      el[0] = document.createElement("a");
      el[0].href = sk_lk_obj[sk_name];
      el[0].target="_blank";
      
      el[0].innerHTML = sk_name;
      el[0].prepend(img);
      const a_tag = document.createElement("a");
      a_tag.innerHTML = "show trends";
      a_tag.setAttribute("data-bs-toggle","modal")
      a_tag.setAttribute("href","#datamodal")
      a_tag.setAttribute("onclick",`window.drawTrend(`+window.JSON.stringify(prevRPI[sk_name])+","+window.JSON.stringify(prevxRPI[sk_name])+","+window.JSON.stringify(weeklabel)+`)`)
      
      el[9] = a_tag;
      gameByGameData.push(el);
    });

    new gridjs.Grid({
      columns: [
        { 
          name: 'School',
          sort: {
            compare: (a, b) => {
              
              const code = (x) => {
                const s = x.props.content;
                return s.slice(s.indexOf('.svg">')+6,s.indexOf('</a>'))
              };
              
              if (code(a) > code(b)) {
                return 1;
              } else if (code(b) > code(a)) {
                return -1;
              } else {
                return 0;
              }
            }
          }
        },
        "W",
        "L",
        "PCT",
        "set won",
        "set lost",
        "set ratio",
        { 
          name: 'RPI',
          sort: {
            compare: (a, b) => {
              const code = (x) => Number(x.substring(x.indexOf("(")+1,x.indexOf(")")));
              
              if (code(a) > code(b)) {
                return 1;
              } else if (code(b) > code(a)) {
                return -1;
              } else {
                return 0;
              }
            }
          }
        },
        { 
          name: 'xRPI',
          sort: {
            compare: (a, b) => {
              const code = (x) => Number(x.substring(x.indexOf("(")+1,x.indexOf(")")));
              
              if (code(a) > code(b)) {
                return 1;
              } else if (code(b) > code(a)) {
                return -1;
              } else {
                return 0;
              }
            }
          }
        },
      "trends",
      ],
      
      data: gameByGameData,
      fixedHeader: true,
      sort: true,
      width: "1000px",
      height:"900px"
      
    }).render(document.getElementById('performanceTable'));

  }
}
