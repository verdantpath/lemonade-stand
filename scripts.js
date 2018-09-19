// STATS
let lemonadeSold = 0;
let totalMonies = 0;
let employeesHired = 0;
let upgrades = 0;
let revPerSecond = 0;

const lemonadePrice = 5;
const btnSellLemonade = document.getElementById('btn-sell-lemonade');
btnSellLemonade.addEventListener('click', function() {
  let output = document.getElementById('lemonade-sold');
  lemonadeSold++;
  output.innerHTML = lemonadeSold;
  console.log('clicking');
});
