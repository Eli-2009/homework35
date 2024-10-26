let h1 = document.querySelector('h1');
let start = document.querySelector('.start');
let stop = document.querySelector('.stop');
let reset = document.querySelector('.reset');

let a = 0;

let int = setInterval(()=>{
    a++;
    h1.textContent = a;
},1000);



stop.addEventListener('click', () =>{
    clearInterval(int);
    int = null;
})


// reset.addEventListener('click', () =>{
//     a = -1;
// })


reset.addEventListener('click', () => {
    a = 0;
    h1.textContent = a;
    if (int) {
        clearInterval(int);
        int = null;
    }
});



start.addEventListener('click', () => {
    if (!int) {
        int = setInterval(() => {
            a++;
            h1.textContent = a;
        }, 1000);
    }
});






// let img = document.createElement('img');

// img.src = 'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-autumn-nature-with-a-river-in-the-middle-of-the-forest-free-image.jpeg?w=600&quality=80'
// img.style.width = '150px'
// img.style.height = '150px'
// img.style.margin = '100px'


// let img2 = document.createElement('img')

// img2.src = 'https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg'



// let div = document.querySelector('.img-div')
// div.appendChild(img)