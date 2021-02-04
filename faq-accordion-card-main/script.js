
const questions = document.querySelectorAll('.question');

questions.forEach(el => {
    const btn = el.parentElement;
    btn.addEventListener('click', () => {
        questions.forEach(item => {
            const perent = item.parentElement;
            if (perent !== btn) {
                perent.classList.remove('show')
                item.classList.remove('rotate');

            }
        });
        btn.classList.toggle('show')
        el.classList.toggle('rotate');
        
    })
});
