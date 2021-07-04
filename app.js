const hamburger = document.getElementById('hamburger');
const menuItems = document.querySelectorAll('.menu-item');

const openMenu = () => {
  const nav = document.getElementById('nav');
  
  nav.style.display === 'block' ? 
    nav.style.display = 'none' : 
    nav.style.display = 'block';

  hamburger.firstElementChild.classList.toggle('hidden');
  hamburger.lastElementChild.classList.toggle('hidden');
};

// Accordian subMenu
menuItems.forEach((item, idx) => {
  const subMenu = document.querySelectorAll('.sub-menu');
  item.addEventListener('click', () => {
    menuItems.forEach((itemAgain, idx) => {
      if(item !== itemAgain) {
        subMenu[idx].classList.add('hidden');
      };
    });
    subMenu[idx].classList.toggle('hidden');
  });
});

hamburger.addEventListener('click', openMenu);

