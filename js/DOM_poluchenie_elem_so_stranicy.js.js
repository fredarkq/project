'Use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');

// box.style.backgroundColor = "pink";

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'green';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'lime';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'lime';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут бов Женя, но не Андерканич');

div.classList.add('black');

wrapper.append(div);
// wrapper.appendChild(div); // stariy sposib

// wrapper.prepend(div);

// hearts[0].before(div);

// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[1]); // stariy sposib

// circles[0].remove();
// wrapper.removeChild(hearts[1]); // staryi sposob

hearts[1].replaceWith(circles[0]);

// wrapper.replaceChild(circles[0], hearts[0]); // stariy sposib

div.innerHTML = "<h1>Hello World</h1>";

// div.textContent = 'HEllo';

div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');

// skdfjsldjfhsdljfhalsuifhasfasef
//sdfsdfsdfsdf