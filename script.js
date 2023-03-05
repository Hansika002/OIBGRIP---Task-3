const form = document.querySelector('form');
const result = document.querySelector('#result');

form.addEventListener('submit', e => {
  e.preventDefault();
  const temp = parseFloat(form.temp.value);
  const scale = form.scale.value;
  if (scale === 'celsius') {
    const fahrenheit = (temp * 9 / 5) + 32;
    result.innerHTML = `${temp} &#8451; = ${fahrenheit} &#8457;`;
  } else if (scale === 'fahrenheit') {
    const celsius = (temp - 32) * 5 / 9;
    result.innerHTML = `${temp} &#8457; = ${celsius} &#8451;`;
  }
});
