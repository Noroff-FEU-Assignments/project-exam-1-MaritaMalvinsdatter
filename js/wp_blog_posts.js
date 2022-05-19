const newTitle = document.querySelector("title")
const blogInfo = document.querySelector(".blog-posts")

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const baseUrl = `https://www.malvinsdatter.no/wp-json/wp/v2/blog/${id}?acf_format=standard`;

console.log(baseUrl)

// Fetching the post specifics

async function getBlogPost() {

    try {
        const response = await fetch(baseUrl);
        const post = await response.json();

        console.log(post);

        blogInfo.innerHTML += `<div class="post">
        <h1>${post.acf.title}</h1>
        <img src="${post.acf.featured_img.url}" alt="${post.acf.featured_img.alt}">
        <h2>${post.acf.h2}</h2>
        <div class="post-content">
        <p>${post.acf.p1}</p>
        <p>${post.acf.p2}</p>
        <p>${post.acf.p3}</p>
        <h3>${post.acf.ul_title}</h3>
        <ul>
            <li>${post.acf.li1}</li>
            <li>${post.acf.li2}</li>
            <li>${post.acf.li3}</li>
            <li>${post.acf.li4}</li>
            <li>${post.acf.li5}</li>
            <li>${post.acf.li6}</li>
            <li>${post.acf.li7}</li>
            <li>${post.acf.li8}</li>
        </ul>
        <div class="img-column">
            <div class="img-box">
                <img src="${post.acf.img1.url}" class="image" alt="${post.acf.img1.alt}">
                <p class="caption">${post.acf.img1.caption}</p>
            </div>
            <div class="img-box">
                <img src="${post.acf.img2.url}" class="image" alt="${post.acf.img2.alt}">
                <p class="caption">${post.acf.img2.caption}</p>
            </div>
            <div class="img-box">
                <img src="${post.acf.img3.url}" class="image" alt="${post.acf.img3.alt}">
                <p class="caption">${post.acf.img3.caption}</p>
            </div>
        </div>
        <p>${post.acf.p4}</p>
        <p>${post.acf.p5}</p>
        <div class="quote-container">
            <p class="quote">${post.acf.quote}</p>
            <p class="author">${post.acf.quote_author}</p>
        </div>
        </div>`


        // Creating the modal for making the post images bigger

        const images = document.querySelectorAll(".image");
        let imgSrc;
      
        images.forEach((img) => {
          img.addEventListener("click", (e) => {
            imgSrc = e.target.src;
            popUpModal(imgSrc);
            // console.log(imgSrc)
          });
        });

        let popUpModal = (src) => {
            const modal = document.createElement("div");
            modal.setAttribute("class", "modal");
            document.querySelector(".img-box").append(modal);
            const newImage = document.createElement("img");
            newImage.setAttribute("src", src);

            window.onclick = function (event) {
                if (event.target == modal) {
                  modal.style.display = "none";
                }
              };

            modal.append(newImage);
        };

        // Adding post title in the browser tab

        newTitle.innerHTML += `${post.acf.title}`;

    } catch (error) {
        blogInfo.innerHTML += `An error has occured, please return to main page or contact us`;
    }

}

getBlogPost();


