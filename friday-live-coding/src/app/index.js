import img2 from '../image/2.jpg';

const imgWrap = document.querySelector('.img');
const img = new Image();
img.src = img2;
img.width = 500;
imgWrap.append(img);

const helloWorld = 'Hello World'
console.log(helloWorld);
