const main = document.getElementById('main');
const addBtn = document.getElementById('btn-add');
const doubleBtn = document.getElementById('btn-show');
const showBtn = document.getElementById('btn-show');
const sortBtn = document.getElementById('btn-sort');
const calculateBtn = document.getElementById('btn-calculate');

let data = [];

// getRandomUser();
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
