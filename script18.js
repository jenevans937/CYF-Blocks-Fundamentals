var facilitators, show_hide, item;

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


facilitators = ['Anna', 'Bert', 'Callum'];
let element_facilitator = document.getElementById('facilitator');
element_facilitator.innerText = randomMember(facilitators);


document.getElementById('refresh').addEventListener('click', (event) => {
  let element_facilitator2 = document.getElementById('facilitator');
  element_facilitator2.innerText = randomMember(facilitators);

});

document.getElementById('submit').addEventListener('click', (event) => {
  facilitators.push(getNumberOrString(document.getElementById('add').value));
  let element_add = document.getElementById('add');
  element_add.innerText = ' ';
  if (show_hide == 'hide') {
    let element_list = document.getElementById('list');
    element_list.replaceChildren();
    let element_list2 = document.getElementById('list');
    facilitators.forEach((item) => {
      let element_list3 = document.getElementById('list');
      let new_li = document.createElement('li');
      new_li.innerText = item;

      element_list3.appendChild(new_li);
    });
  }

});

document.getElementById('show-hide').addEventListener('click', (event) => {
  if (show_hide == 'hide') {
    event.target.innerText = '\\\\ Show full list of facilitators.\\\\';
    show_hide = 'show';
    let element_list4 = document.getElementById('list');
    element_list4.replaceChildren();
  } else {
    event.target.innerText = '\\\\ Hide full list of facilitators.\\\\';
    show_hide = 'hide';
    let element_list5 = document.getElementById('list');
    facilitators.forEach((item) => {
      let element_list6 = document.getElementById('list');
      let new_li2 = document.createElement('li');
      new_li2.innerText = item;

      element_list6.appendChild(new_li2);
    });
    let element_show_hide = document.getElementById('show-hide');
    element_show_hide.innerText = '\\\\ Hide full list of facilitators.\\\\';
  }

});
