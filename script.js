const main = document.getElementById('main');
const addBtn = document.getElementById('btn-add');
const DoubleBtn = document.getElementById('btn-show');
const ShowBtn = document.getElementById('btn-show');
const SortBtn = document.getElementById('btn-sort');
const CalculateBtn = document.getElementById('btn-calculate');

let data = [];

// getRandomUser();
// getRandomUser();
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
}
