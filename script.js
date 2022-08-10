const postContainer=document.getElementById("myposts");
let posts=[];
let start=0,
    end=9;

function createPostCard(id,name,username,email,address,phone,website,company){
    const cd=`<div class="card m-5" style="width:18rem">
    <div class="card-body border-primary">
        <h5 class="card-header text-primary">${id}</h5>
        <p class="card-name text-primary">${name}</p>
        <p class="card-username text-primary">${username}</p>
        <p class="card-email text-primary">${email}</p>
    <div class="card-address text-primary">
        <p class="card-address text-primary">${address}</p>
    </div>
        <p class="card-phone text-primary">${phone}</p>
        <p class="card-website text-primary">${website}</p>
        <p class="card-company text-primary">${company}</p>
        
    </div>
</div>`;
return cd;
}

function fetchPosts(){
    const xhr= new XMLHttpRequest();

    const api=`https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`;
    xhr.onreadystatechange = () =>{
        if(xhr.readyState==4 && xhr.status==200){
            const res=JSON.parse(xhr.responseText);
            console.log(posts);

            postContainer.innerHTML=null;
            for(let i=0;i<9;i++){
                postContainer.innerHTML+=createPostCard(
                    posts[i].id,
                    posts[i].name,
                    posts[i].username,
                    posts[i].email,
                    posts[i].address.city,
                    posts[i].phone,
                    posts[i].website,
                    posts[i].company.name
                );
            }
        }
    }
    xhr.open("GET",api);
    xhr.send();
}