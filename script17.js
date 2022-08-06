/* paste the JavaScript code from the 'Generated Code' section of the CYF Blocks editor here */
var dice, current_roll, rolls, total, item;

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


dice = [1, 2, 3, 4, 5, 6];
rolls = [];


document.getElementById('button_roll').addEventListener('click', (event) => {
  current_roll = randomMember(dice);
  rolls.push(current_roll);
  total = rolls.reduce((a,b) => a+b, 0);
  let element_list = document.getElementById('list');
  element_list.replaceChildren();
  rolls.forEach((item) => {
    let element_list2 = document.getElementById('list');
    let new_li = document.createElement('li');
    new_li.innerText = item;

    element_list2.appendChild(new_li);
  });
  let element_total = document.getElementById('total');
  element_total.innerText = total;
  if (total == 11) {
    let element_info = document.getElementById('info');
    element_info.innerText = 'Wahoo! You win!';
  } else if (total < 11) {
    let element_info2 = document.getElementById('info');
    element_info2.innerText = 'Keep playing!';
  } else {
    let element_info3 = document.getElementById('info');
    element_info3.innerText = 'Oh no!! You\'ve gone higher than 11!';
  }

});

document.getElementById('button_restart').addEventListener('click', (event) => {
  let element_info4 = document.getElementById('info');
  element_info4.replaceChildren();
  rolls = [0];
  total = rolls.reduce((a,b) => a+b, 0);
  let element_list3 = document.getElementById('list');
  element_list3.replaceChildren();
  let element_total2 = document.getElementById('total');
  element_total2.innerText = 0;
  if (total == 11) {
    let element_info5 = document.getElementById('info');
    element_info5.innerText = 'Wahoo! You win!';
  } else if (total < 11) {
    let element_info6 = document.getElementById('info');
    element_info6.innerText = 'Keep playing!';
  } else if (total > 11) {
    let element_info7 = document.getElementById('info');
    element_info7.innerText = 'Oh no!! You\'ve gone higher than 11!';
  } else {
  }

});

document.getElementById('button_remove').addEventListener('click', (event) => {
  rolls.pop();
  let element_list4 = document.getElementById('list');
  element_list4.replaceChildren();
  rolls.forEach((item) => {
    let element_list5 = document.getElementById('list');
    let new_li2 = document.createElement('li');
    new_li2.innerText = item;

    element_list5.appendChild(new_li2);
  });
  total = rolls.reduce((a,b) => a+b, 0);
  let element_total3 = document.getElementById('total');
  element_total3.innerText = total;
  if (total == 11) {
    let element_info8 = document.getElementById('info');
    element_info8.innerText = 'Wahoo! You win!';
  } else if (total < 11) {
    let element_info9 = document.getElementById('info');
    element_info9.innerText = 'Keep playing!';
  } else {
    let element_info10 = document.getElementById('info');
    element_info10.innerText = 'Oh no!! You\'ve gone higher than 11!';
  }

});
