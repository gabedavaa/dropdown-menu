console.log('hello');

const btn = document.getElementById('btn');
const dropdown = document.getElementById('dropdown');
const arrow = document.getElementById('arrow');



const toggleDropdown = function () {
    dropdown.classList.toggle('show');
    arrow.classList.toggle('arrow');
}

btn.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleDropdown();
});

document.documentElement.addEventListener('click', function () {
    if (dropdown.classList.contains('show')) {
        toggleDropdown();
        // dropdown.classList.remove('show');
        // arrow.classList.remove('arrow');
    }
})