const posts = [
    {title:"Title One",body:"Body One"},
    {title:"Title Two",body:"Body Two"}
];

function getPosts(){
    setTimeout(()=>{
        posts.forEach((post) =>{
            console.log(post.title);
        });
    },1000)
}

function createPost(post){
    setTimeout(()=>{
            posts.push(post)
    },2000)
}

getPosts();
createPost({title:"Title Three",body:"Body Three"});

