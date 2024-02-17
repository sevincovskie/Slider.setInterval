let images = [
  "./assets/image/qiz1.png",
  "./assets/image/qiz2.png",
  "./assets/image/qiz3.png",
];

let img =document.querySelector("#slider");
let currentIndex =0;
let waitingTime = 3000;

function nextImage (){
  img.setAttribute("src",images[currentIndex]);
 
  if (currentIndex < images.length-1){
    currentIndex++;

  }else {
   currentIndex = 0;
  }
  setTimeout(() =>{
    img.setAttribute('src','./assets/image/spinner.gif');

  },waitingTime-1000);

}
nextImage();

let t = setInterval(nextImage, waitingTime);

img.addEventListener('mouseenter', function(){
  clearInterval(t);
});

img.addEventListener('mouseleave', function(){
   t=setInterval(nextImage, waitingTime );
})