const baseUrl = "https://www.malvinsdatter.no/wp-json/wp/v2/blog?acf_format=standard";
const blogContainer = document.querySelector(".blog-post-list");
const morePosts = document.querySelector(".more-posts")

async function blogList(url) {

    // Getting the list of 10 first posts

    try {
        const response = await fetch(url)
        const posts = await response.json()
        console.log(posts);

        blogContainer.innerHTML = "";

        // Displaying post details
    
        posts.forEach((post) => {
            blogContainer.innerHTML += `<div class="post-cards">
            <a href="blog_posts.html?id=${post.id}"><img src="${post.acf.featured_img.url}" alt="${post.acf.featured_img.alt}"></a>
            <a href="blog_posts.html?id=${post.id}"><h3>${post.acf.title}</h3></a>
            </div>`
            
        });
        
    } catch (error) {
        blogContainer.innerHTML += `An error has occured, please return to main page or contact us`;
    }

}

blogList(baseUrl)

// Fetching the rest of the posts when clicking button

morePosts.onclick = function() {
    const newUrl = baseUrl + "&per_page=20";
    blogContainer.innerHTML = "";
    blogList(newUrl);
}