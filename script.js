const all = document.querySelector('#all');
const htmlCss = document.querySelector('#html-css');
const htmlCssJs = document.querySelector('#html-css-js');
const listItems = document.querySelectorAll('ul li');


// html css elements
htmlCss.addEventListener('click', () =>{
    listItems.forEach(e => {
        const ifContaine=e.classList.contains('html_css_js');
        if(ifContaine){
            e.style.display="none";
        }else{
            e.style.display="block";

        }
    });
});

// html css  js elements
htmlCssJs.addEventListener('click', () =>{
    listItems.forEach(e => {
        const ifContaine=e.classList.contains('html_css');
        if(ifContaine){
            e.style.display="none";
        }else{
            e.style.display="block";

        }
    });
});

// All elements
all.addEventListener('click', () =>{
    listItems.forEach(e => {
        e.style.display="block";
    });
});