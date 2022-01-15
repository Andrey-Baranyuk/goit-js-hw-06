let counterValue = 0;

const decr = document.querySelector(`[data-action = "decrement"]`)
console.log(decr);
const incr = document.querySelector(`[data-action = "increment"]`)
console.log(incr);
const value = document.querySelector(`#value`)

const decrValue = () =>  {
    counterValue -= 1
    value.textContent = counterValue
};
decr.addEventListener('click', decrValue);

const incrValue = () =>  {
    counterValue += 1;
    value.textContent = counterValue
};
incr.addEventListener('click', incrValue);