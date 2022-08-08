var earnings_total, earnings, expenses, expenses_total, net_total;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


let element_line1 = document.getElementById('line1');
element_line1.style.backgroundColor = '#000066';
let element_line2 = document.getElementById('line2');
element_line2.style.backgroundColor = '#000066';
earnings = [];
expenses = [];
net_total = 0;


document.getElementById('earning_button').addEventListener('click', (event) => {
  let element_earnings_list = document.getElementById('earnings_list');
  let new_li = document.createElement('li');
  new_li.innerText = getNumberOrString(document.getElementById('earning_input').value);

  element_earnings_list.appendChild(new_li);
  earnings.push(getNumberOrString(document.getElementById('earning_input').value));
  let element_ea_total = document.getElementById('ea_total');
  element_ea_total.innerText = earnings.reduce((a,b) => a+b, 0);
  let element_earnings_total_text = document.getElementById('earnings_total_text');
  element_earnings_total_text.style.color = '#ffffff';
  net_total = [earnings.reduce((a,b) => a+b, 0), expenses.reduce((a,b) => a+b, 0)];
  let element_total = document.getElementById('total');
  element_total.innerText = net_total.reduce((a,b) => a+b, 0);

});

document.getElementById('expense_button').addEventListener('click', (event) => {
  let element_expenses_list = document.getElementById('expenses_list');
  let new_li2 = document.createElement('li');
  new_li2.innerText = getNumberOrString(document.getElementById('expense_input').value);

  element_expenses_list.appendChild(new_li2);
  expenses.push(getNumberOrString(document.getElementById('expense_input').value));
  let element_ex_total = document.getElementById('ex_total');
  element_ex_total.innerText = expenses.reduce((a,b) => a+b, 0);
  let element_expenses_total_text = document.getElementById('expenses_total_text');
  element_expenses_total_text.style.color = '#ffffff';
  net_total = [earnings.reduce((a,b) => a+b, 0), expenses.reduce((a,b) => a+b, 0)];
  let element_total2 = document.getElementById('total');
  element_total2.innerText = net_total.reduce((a,b) => a+b, 0);

});
