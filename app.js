let carousel = document.querySelector(".carousel");
const sliders = [];
let cnt = 0;
const videoCards = [...document.querySelectorAll(".video-card")];

// console.log(sliders);
//current slide index
let slideIndex = 0;
console.log(movies);
const createSlide = () => {
  console.log("movies.length", movies.length);
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }
  if (sliders.length < movies.length) {
    //creating dom elements
    let slide = document.createElement("div");
    let imgElem = document.createElement("img");
    let content = document.createElement("div");
    let movieTitle = document.createElement("h1");
    let movieDes = document.createElement("p");

    //attaching elements
    movieTitle.innerHTML = movies[slideIndex].name;
    movieDes.innerHTML = movies[slideIndex].des;
    content.appendChild(movieTitle);
    content.appendChild(movieDes);
    slide.appendChild(content);
    slide.appendChild(imgElem);
    carousel.appendChild(slide);

    //setting up image
    imgElem.src = movies[slideIndex].image;
    slide.className = "slider";
    content.className = "slider-content";
    movieTitle.className = "movie-title";
    movieDes.className = "movie-des";
    sliders.push(slide);
  }

  cnt++;
  if (sliders.length) {
    console.log("hello");
    // sliders[0].style.marginLeft = `calc(-${100 * (slideIndex-2)}% - ${
    //   30 * (slideIndex-2)
    // }%)`;
    for (let i = 0; i < sliders.length; i++) {
      if (i != slideIndex) {
        sliders[i].style.display = "none";
      } else {
        sliders[i].style.display = "contents";
        // sliders[i].style.marginLeft = `calc(-${100 * (slideIndex-2)}% - ${
        //       30 * (slideIndex-2)
        //     }%)`;
      }
    }
    console.log(sliders[0].style.marginLeft);
    console.log(sliders.length);
  }
  slideIndex++;
};
// for (i = 0; i < movies.length; i++) {
//   createSlide();
// }

setInterval(() => {
  createSlide();
}, 3000);
createSlide();


//video card

console.log(videoCards);

videoCards.forEach(videoCard => {
  let videoElement = videoCard.children[1];
  console.log(videoElement);
  videoElement.addEventListener('mouseover',()=>{
      videoElement.play();
  });
  videoElement.addEventListener('mouseleave',()=>{
    videoElement.pause();
});
});