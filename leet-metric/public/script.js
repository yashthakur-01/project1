 // Question data (done and total)
const easyDone = 0, easyTotal = 0;
const mediumDone = 0, mediumTotal = 0;
const hardDone = 0, hardTotal = 0;





const stats = window.leetcodeStats;

// Function to render one pie chart
function renderPieChart(canvasId, done, total, color) {
  const ctx = document.getElementById(canvasId).getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      
      datasets: [{
        data: [done, total - done],
        backgroundColor: [color, '#333'],
        borderColor: 'rgba(0, 0, 0, 0.4)', // soft border
        borderWidth: 2,
        borderRadius: 2, // or 5, depending on thickness
        
      }]
    },
    options: {
      cutout: '60%',
      plugins: {
        legend: {
          display:false
        }
      }
    }
  });
}

// Render all 3
renderPieChart('easyPieChart', stats.easyDone, stats.easyTotal, '#4CAF50');
renderPieChart('mediumPieChart', stats.mediumDone, stats.mediumTotal, '#FFC107');
renderPieChart('hardPieChart', stats.hardDone, stats.hardTotal, '#F44336');