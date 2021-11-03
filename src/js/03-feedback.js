import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector('.feedback-form');


const savedForm = localStorage.getItem(STORAGE_KEY);
    if (savedForm) {
        savedForm = JSON.parse(savedForm);
        Object.keys(savedForm).forEach(([name, value]) => {
            form.elements[name].value = value;
        });
    }

form.addEventListener('submit', evt => {
    evt.preventDefault();
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    form.reset()
    localStorage.removeItem(STORAGE_KEY);
});


form.addEventListener('input', throttle(evt => {
    let savedForm = localStorage.getItem(STORAGE_KEY);
    savedForm = savedForm ? JSON.parse(savedForm) : {};
    savedForm[evt.target.name] = evt.target.value;
    // console.log(savedForm);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedForm));
}, 500));