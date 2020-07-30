const main = document.getElementById('main');
const addBtn = document.getElementById('btn-add');
const doubleBtn = document.getElementById('btn-double');
const showBtn = document.getElementById('btn-show');
const sortBtn = document.getElementById('btn-sort');
const calculateBtn = document.getElementById('btn-calculate');

let data = [];

// getRandomUser();
getRandomUser();
getRandomUser();
getRandomUser();

// fetch random user and add money
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  };

  addData(newUser);
}


// double money
function doubleMoney() {
  data = data.map(user => {
    return { ...user, money: user.money * 2 };
  });
  updateDOM();
}

// sort by richest
function sortByRichest() {
  data.sort((a, b) => b.money - a.money);
  updateDOM();
}

// filter only millionaires
function showMillionaires() {
  data = data.filter(user => user.money > 1000000);
  updateDOM();
}


function addData(obj) {
  data.push(obj);
  updateDOM();
}


// update DOM
function updateDOM(providedData = data) {
  main.innerHTML = "<h2><strong>Person </strong>Wealth</h2>";

  providedData.forEach((item) => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
    main.appendChild(element);
  });
}

// format as money
function formatMoney(number) {
  return '$ ' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// event listeners
addBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
showBtn.addEventListener('click', showMillionaires);
