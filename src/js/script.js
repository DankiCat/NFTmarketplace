let scrollPosition = window.scrollY

const header = document.querySelector("header")

//Сколько пикселей нужно проскролить, чтобы добавить класс
const scrollChange = 50

//Отслеживаем событие "скролл"
window.addEventListener('scroll', () => { 
  scrollPosition = window.scrollY;

  //Если прокрутили больше, чем мы указали в переменной scrollChange, то выполняется функция добавления класса
  if (scrollPosition >= scrollChange) { 
    header.classList.add("header_active")
  } else {
    header.classList.remove("header_active")
  }
})