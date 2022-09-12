
  

async function foo(){
    var res = await fetch("https://api.chucknorris.io/jokes/random");
  var res1= await res.json();
  console.log(res1);
  var div=document.createElement("div");
    div.style.margin="20px 50px"
    try{
        for(let i in res1){
            div.innerHTML=`<div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
            <div class="card-body">
    <h5 class="card-title">${res1[i]}</h5>
    </div>
  </div>`
        document.body.append(div)
        }
    }
    catch(error){
        console.log(error);
    }
}
foo();
