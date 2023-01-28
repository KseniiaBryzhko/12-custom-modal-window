// querySelector()
// classList.add()
// classList.remove()
// addEventListener()
// () => {}
// виклик функції за посиланням

// отримання доступу до елементів
// посилання з двома колами
const elgatoKeylight = document.querySelector("#elgatoKeylight");

// вся структура з модальним вікном
const elgatoKeylightModal = document.querySelector("#elgatoKeylightModal");

// кнопка закривання модального вікна
const closeButton = document.querySelector(".close");

// функція, яка активує модальне вікно
const showModal = (event) => {
  elgatoKeylightModal.classList.add("show");
};

// функція, яка деактивує модальне вікно
const closeModal = (event) => {
  elgatoKeylightModal.classList.remove("show");
};

// контроль події на стартовому екрані по колами
elgatoKeylight.addEventListener("click", showModal);

// контроль події кнопочці закривання модального вікна
closeButton.addEventListener("click", closeModal);
