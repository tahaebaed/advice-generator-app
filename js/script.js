'use strict';

const generateRandomAdvice = async () => {
  const response = await fetch('https://api.adviceslip.com/advice');
  const data = response.json();
  return data;
};

const renderRandomAdvice = () => {
  generateRandomAdvice().then(({ slip }) => {
    document.getElementById('advice-id').innerHTML = `Advice#${slip.id}`;
    document.getElementById('advice-details').innerHTML = `${slip.advice}`;
  });
};

document
  .getElementById('generator-btn')
  .addEventListener('click', renderRandomAdvice);

renderRandomAdvice();
