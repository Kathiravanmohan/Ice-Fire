var div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","books");

var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary","btn-lg","active");
button.innerHTML="Search";
button.style.marginLeft="5px"
button.addEventListener("click",foo);
var div1=document.createElement("div");

div.append(input,button);
document.body.append(div,div1);

async function foo(){
    let res=document.getElementById("books").value;
    console.log(res);
    let url=`https://www.anapioficeandfire.com/api/books/${res}`;
    var res1=await fetch(url);
    var res2=await res1.json();
    try{
    console.log(res2.name,res2.isbn,res2.numberOfPages,res2.authors,res2.publisher,res2.released);
    Character(12);
    div1.innerHTML=
             `<card>
             <div>NAME OF THE BOOK=${res2.name}</div>
             <div>ISBN OF THE BOOK=${res2.isbn}</div>
             <div>NUMBER OF THE PAGES=${res2.numberOfPages}</div>
             <div>AUTHORS OF THE BOOK=${res2.authors}</div>
             <div>PUBLISHER OF THE BOOK=${res2.publisher}</div>
             <div>RELEASE DATE OF THE BOOK=${res2.released}</div>
             </card>
             `
    }catch(error){
        console.log(error);
    }
}

async function Character(char1){
    try{
    var res3=await fetch(`https://www.anapioficeandfire.com/api/characters/${char1}`)
    var res4=await res3.json();
    console.log(res4);
    console.log(res4.name);
    }catch(error){
        console.log(error)
    }
 

}