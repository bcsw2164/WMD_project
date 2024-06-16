let scrollElement1 = document.querySelector('.scroll-1');
let scrollElement2 = document.querySelector('.scroll-2');

window.addEventListener('scroll', function () {
  let value = window.scrollY;
  console.log('scrollY', value);

  if (value > 600) {
    scrollElement1.style.animation = 'slide 1s ease-out forwards';
  } else {
    scrollElement1.style.animation = 'disappear 1s ease-out forwards';
  }

  if (value > 800) {
    scrollElement2.style.animation = 'slide 1s ease-out forwards';
  } else {
    scrollElement2.style.animation = 'disappear 1s ease-out forwards';
  }
});
