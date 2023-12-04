 console.log("hello");

// fetch ("https://api.github.com/users/bushra")
// //json format
// .then((Response)=> Response.json())
// //print console object in document
// .then((data)=>{

//   console.log(data)
//   document.write(`${data.id} - ${data.name} - ${data.node_id} - ${data. avatar_url} - ${data.  gravatar_id} `);
   
//   // for (var x in data){
//   //  console.log(`${data.id} - ${data.name} - ${data.detail} - ${data. avatar_url} - ${data.  gravatar_id} `)
//   // }
   
// })
// //error
// .catch((error)=> document.write("Not Verified"));


//link

//toggle show-hide
function toggleHide() {
  let btnhide = document.getElementById('btn');
  let card = document.getElementById('card');

  if ( card.style.display != 'none'){
    card.style.display= 'none';
  }
  else{
    card.style.display= 'block';
  }

}

//fecth api

//variable for getting data from innerhtm
const detail = document.getElementById("details");
const userName = document.getElementById("userName")
const userId = document.getElementById("userId")
const userUrl = document.getElementById("userUrl")


//calling ids from html
const btn = document.getElementById("btn");
const text= document.getElementById("text");
const card = document.getElementById("card")
const img = document.getElementById("img")

card.style.display = "none"
btn.addEventListener("click", () => {
  fetch(`https://api.github.com/users/${text.value}`)
     .then((res) => res.json()).then((data) => {
      console.log(data);
      // Setting HTML here
      text.value = ""
      card.style.marginLeft = "33rem"
      card.style.display = "block"
    //  detail.innerHTML = data.name;
    userName.innerHTML = data.name;
    userId.innerHTML = data.id;
    userUrl.innerHTML = data.avatar_url;
    img.src = data.avatar_url
    })
})

