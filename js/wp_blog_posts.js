const newTitle = document.querySelector("title")
const blogInfo = document.querySelector(".blog-posts-specifics")

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const baseUrl = "https://www.malvinsdatter.no/wp-json/wp/v2/posts/" + id;

console.log(baseUrl)

async function getBlogPost() {

    try {
        const response = await fetch(baseUrl);
        const post = await response.json();

        blogInfo.innerHTML += `<div class="post"
        <h1>${post.title.rendered}</h1>
            <div>
            ${post.content.rendered}
            </div>
        </div>`

        newTitle.innerHTML += `${post.title.rendered}`;

    } catch (error) {
        blogInfo.innerHTML += `An error has occured, please return to main page or contact us`;
    }

}

getBlogPost();

