let query = new URLSearchParams(window.location.search);
let postId = query.get("id");

fetchAllpost();

async function fetchAllpost() {
    try {
        const response = await fetch(`https://blog-api-assignment.up.railway.app/posts/${postId}`);
        const post = await response.json();
        console.log(post)

 
           let postslistHTML = `
            <li id="posts">
            <p>${post.title} <br> ${post.author} <br> ${post.date} <br> ${post.content} <br> ${post.tags} </p> 
            </li> `;

        
        
        document.getElementById("blog-post").innerHTML = postslistHTML;
    
    } catch(error) {
        console.log(error);
    }
}
