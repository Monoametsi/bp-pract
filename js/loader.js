const body = document.getElementsByTagName('body')[0];
const spinner = document.getElementById('spinner');

window.onload = () => {
    spinner.classList.add('fadeOut');

    setTimeout(() => {
        spinner.classList.add('d-none');
    },1000)
    
}