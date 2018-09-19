// STATS
let lemonadeSold = 0;
let totalMonies = 0;
let employeesHired = 0;
let upgrades = 0;
let revPerSecond = 0;

const lemonadePrice = 5;
const employeePrice = 50;

const btnSellLemonade = document.getElementById('btn-sell-lemonade');
btnSellLemonade.addEventListener('click', function() {
  let output = document.getElementById('lemonade-sold');
  lemonadeSold++;
  output.innerHTML = lemonadeSold;
  calculateTotalMonies();
  console.log('clicking');
});

const btnHireEmployee = document.getElementById('btn-hire-employee');
btnHireEmployee.addEventListener('click', function() {
  let output = document.getElementById('employees-hired');
  employeesHired++;
  output.innerHTML = employeesHired;
  calculateTotalMonies();
});

const calculateTotalMonies = () => {

  if (employeesHired > 0) {
    setTimeout(start, 0);

    function start() {
      setInterval(increase, 1000);
    }

    function increase() {
        totalMonies++;
        document.getElementById('total-monies').innerHTML = totalMonies;
    }
  }
  totalMonies = (lemonadeSold * lemonadePrice) - (employeesHired * employeePrice);
  document.getElementById('total-monies').innerHTML = totalMonies;
};
