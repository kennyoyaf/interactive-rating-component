const frontPage = document.querySelector('.main-container');
const backPage = document.querySelector('.thankyou-container');
const submitBtn = document.querySelector('#submit');
const numBtn = document.querySelectorAll('.btn');
const rateBtn = document.querySelector('.rate');

submitBtn.addEventListener('click', () => {
    backPage.classList.remove('hidden');
    frontPage.style.display = 'none';
})

numBtn.forEach((rate) => {
    rate.addEventListener('click', () => {
    rateBtn.innerHTML = rate.innerHTML
})
})