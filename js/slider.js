const baseUrl = "https://www.malvinsdatter.no/wp-json/wp/v2/posts";
const sliderCount = 5;
const slider = document.querySelector(".slider");
var currentSlide = 0;

async function sliderList(url) {

    try {
        const response = await fetch(url)
        const posts = await response.json()
        console.log(posts);

      for (let i = 0; i < sliderCount; i++) {
        let title = posts[i].title.rendered;
        slider.innerHTML += `<div class="slider`+i+` slide-card">${title}
        <img src="${posts[i].x_featured_media_medium}">
        </div>`

        if (i > 0) {
            document.querySelector(".slider" + i).setAttribute("style", "display: none")
        }
      }
        
    } catch (error) {
        slider.innerHTML += `An error has occured, please return to main page or contact us`;
    }
}

sliderList(baseUrl)

const buttonNext = document.querySelector(".next")
const buttonPrev = document.querySelector(".prev")

buttonNext.onclick = function() {
    document.querySelector(".slider" + currentSlide).setAttribute("style", "display: none");
    currentSlide++
    document.querySelector(".slider" + currentSlide).setAttribute("style", "display: block");
    if (currentSlide == sliderCount-1) {
        buttonNext.setAttribute("style", "display: none");
    } 
    if (currentSlide > 0) {
        buttonPrev.setAttribute("style", "display: inline")
    }
}

buttonPrev.onclick = function() {
    document.querySelector(".slider" + currentSlide).setAttribute("style", "display: none");
    currentSlide--
    document.querySelector(".slider" + currentSlide).setAttribute("style", "display: block");
    if (currentSlide == 0) {
        buttonPrev.setAttribute("style", "display: none");
    } 
    if (currentSlide < sliderCount) {
        buttonNext.setAttribute("style", "display: inline")
    }
}
