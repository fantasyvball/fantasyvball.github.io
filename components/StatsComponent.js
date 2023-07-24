export default {
  template:`
<div class="flex-container" style = "display: flex;flex-wrap: wrap;">
          <div class="card mb-4 stat-card">
            <h2>Weeks Spend on _ Place</h2>
            <div class="chart-container">
              <canvas :id="chart1Id" width="200" height="300"></canvas>
            </div>
          </div>
          <div class="card mb-4 stat-card">
            <h2>Rank Change</h2>
            <div class="chart-container">
              <canvas :id="chart2Id" width="200" height="300"></canvas>
            </div>
          </div>
          <div class="card mb-4 stat-card">
            <h2>Point Score by Position</h2>
            <div class="chart-container">
              <canvas :id="chart3Id" width="200" height="300"></canvas>
            </div>
          </div>
          <div class="card mb-4 stat-card">
            <h2>Weekly Points Prediction</h2>
            <div class="chart-container">
              <canvas :id="chart4Id" width="200" height="300"></canvas>
            </div>
          </div>
          <div class="card mb-4 stat-card">
            <h2>Weekly Points Breakdown by Position</h2>
            <div class="chart-container">
              <canvas :id="chart5Id" width="200" height="300"></canvas>
            </div>
          </div>
          <div class="card mb-4 stat-card">
            <h2>Friends Ranking Change</h2>
            <div class="chart-container">
              <canvas :id="chart6Id" width="200" height="300"></canvas>
            </div>
          </div>
</div>
  `,
  data() {
    return {
      chart1Id: 'chart1',
      chart2Id: 'chart2',
      chart3Id: 'chart3',
      chart4Id: 'chart4',
      chart5Id: 'chart5',
      chart6Id: 'chart6',
      playerStats: {
        weeksSpentOn1stPlace: {
          labels: ['1', '2', '3', '4', '5'],
          data: [3, 2, 1, 4, 2],
        },
        rankChange: {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
          data: [2, -1, 0, 3, -2],
        },
        pointScoreByPosition: {
          labels: ['Setter','Opposite Hiiter', 'Libero', 'Middle Blocker', 'Outside Hitter'],
          data: [40, 55, 20, 35, 60],
        },
        weeklyPointsPrediction: {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
          data: [45, 50, 55, 60, 65],
        },
        weeklyPointsByPosition: {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
          datasets: [
            {
              label: 'Setter',
              data: [10, 12, 8, 9, 11],
              backgroundColor: 'rgba(255, 99, 132, 0.7)',
            },
            {
              label: 'Oppo.',
              data: [20, 18, 22, 25, 21],
              backgroundColor: 'rgba(54, 162, 235, 0.7)',
            },
            {
              label: 'Libero',
              data: [5, 7, 6, 8, 10],
              backgroundColor: 'rgba(255, 206, 86, 0.7)',
            },
            {
              label: 'Middle Blocker',
              data: [8, 10, 9, 7, 6],
              backgroundColor: 'rgba(75, 192, 192, 0.7)',
            },
            {
              label: 'Outside Hitter',
              data: [12, 13, 10, 11, 13],
              backgroundColor: 'rgba(153, 102, 255, 0.7)',
            },
          ],
        },
        friendsRankingChange: {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
          data: [-1, 2, -3, 1, -2],
        },
        // Add more playerStats here
      },
    };
  },
  mounted() {
    // Create the charts on component mount
    this.createChart1();
    this.createChart2();
    this.createChart3();
    this.createChart4();
    this.createChart5();
    this.createChart6();
    // Create more charts here
  },
  methods: {
    createChart1() {
      new Chart(document.getElementById(this.chart1Id), {
        type: 'pie',
        data: {
          labels: this.playerStats.weeksSpentOn1stPlace.labels,
          datasets: [{
            data: this.playerStats.weeksSpentOn1stPlace.data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.7)',
              'rgba(54, 162, 235, 0.7)',
              'rgba(255, 206, 86, 0.7)',
              'rgba(75, 192, 192, 0.7)',
              'rgba(153, 102, 255, 0.7)',
              'rgba(255, 159, 64, 0.7)',
              'rgba(80, 80, 80, 0.7)',
            ],
          }],
        },
      });
    },
    createChart2() {
      new Chart(document.getElementById(this.chart2Id), {
        type: 'line',
        data: {
          labels: this.playerStats.rankChange.labels,
          datasets: [{
            label: 'Rank Change',
            data: this.playerStats.rankChange.data,
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: false,
          }],
        },
      });
    },
    createChart3() {
      new Chart(document.getElementById(this.chart3Id), {
        type: 'bar',
        data: {
          labels: this.playerStats.pointScoreByPosition.labels,
          datasets: [{
            label: 'Points',
            data: this.playerStats.pointScoreByPosition.data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.7)',
              'rgba(54, 162, 235, 0.7)',
              'rgba(255, 206, 86, 0.7)',
              'rgba(75, 192, 192, 0.7)',
              'rgba(153, 102, 255, 0.7)',
            ],
          }],
        },
      });
    },
    createChart4() {
      new Chart(document.getElementById(this.chart4Id), {
        type: 'line',
        data: {
          labels: this.playerStats.weeklyPointsPrediction.labels,
          datasets: [{
            label: 'Predicted Points',
            data: this.playerStats.weeklyPointsPrediction.data,
            borderColor: 'rgba(153, 102, 255, 1)',
            fill: false,
          }],
        },
      });
    },
    createChart5() {
      new Chart(document.getElementById(this.chart5Id), {
        type: 'bar',
        data: this.playerStats.weeklyPointsByPosition,
        options: {
          legend: {
            display: true,
            position: 'bottom',
          },
        },
      });
    },
    createChart6() {
      new Chart(document.getElementById(this.chart6Id), {
        type: 'line',
        data: {
          labels: this.playerStats.friendsRankingChange.labels,
          datasets: [{
            label: 'Friends Ranking Change',
            data: this.playerStats.friendsRankingChange.data,
            borderColor: 'rgba(255, 159, 64, 1)',
            fill: false,
          }],
        },
      });
    },

    // Add more chart creation methods here

  },
};

