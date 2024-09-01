const check = document.querySelector('.check');
const checkBall = document.querySelector('.check-ball');

check.addEventListener('click', () => {
  check.classList.toggle('checked');
  checkBall.classList.toggle('checked-ball');
});
