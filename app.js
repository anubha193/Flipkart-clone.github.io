let carousel = document.querySelector('.images');
let sliders = [];

let slideIndex = 0;

const createSlide = () =>{
    if(slideIndex >= movies.length){
        slideIndex=0;
    }

    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');

    imgElement.appendChild(document.createTextNode(''));

    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);


    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    slide.className = 'slider';
    
    sliders.push(slide);

    if(sliders.length){
        sliders[0].style.marginLeft =  `calc(-${100 * (sliders.length - 2)}% - ${30 *(sliders.length - 2)}px)`; 
    }  
}

for(let i = 0; i < 6; i++){
    createSlide();
};

setInterval(()=>{
    createSlide();
},3000);
