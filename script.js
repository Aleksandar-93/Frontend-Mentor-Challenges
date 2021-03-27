// filter buttons
const listItems = document.querySelectorAll('ul li');
const projects = document.querySelectorAll('#list li');
const projectType = [];
const contener = document.querySelector('.buttons');


// Buttons


projects.forEach(element => {
    projectType.push(element.getAttribute('class'))
});

const uniqueV = ['all',...new Set (projectType)];



    // for evry unique value create button
    uniqueV.forEach(name => {
        const button = document.createElement('button');
        button.type= 'button';
        button.appendChild(document.createTextNode(name));
        button.setAttribute('id',name);
        contener.appendChild(button);
    });

    
    

// add addEventListener for evry button 
const buttons = document.querySelectorAll('.buttons button')

    buttons.forEach((e) => {
        
        // html css elements
        if(e.textContent === 'html_css'){
            e.addEventListener('click', () =>{
                listItems.forEach(e => {
                    const ifContaine=e.classList.contains('html_css_js');
                    if(ifContaine){
                        e.style.display="none";
                    }else{
                        e.style.display="block";
            
                    }
                });
            });

        }

    // html css  js elements
    if(e.textContent === 'html_css_js'){
        e.addEventListener('click', () =>{
            listItems.forEach(e => {
                const ifContaine=e.classList.contains('html_css');
                if(ifContaine){
                    e.style.display="none";
                }else{
                    e.style.display="block";
        
                }
            });
        });
    }


    // All elements
    if(e.textContent === 'all'){
        e.addEventListener('click', () =>{
            listItems.forEach(e => {
                e.style.display="block";
            });
        });
    }


    });

// buttons end


 /* \\\\ attribution ////*/
const amBtn = document.querySelector('.a-m');
const made = document.querySelector('.made');

 amBtn.addEventListener('click', ()=>{
     made.classList.toggle('made-show');
     amBtn.classList.toggle('a-m-red');
 });

//  scroll show

const topLink = document.querySelector('.top-link');
window.addEventListener('scroll', ()=>{
    const scrollHeight = window.pageYOffset;
    if(scrollHeight > 300){
        topLink.classList.add('show-link')
    }else{
        topLink.classList.remove('show-link')
        
    }
});






