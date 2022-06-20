let myPicture = [
    {
name: "images/mir.jpg",
text: "Мир",
description:"1",
},
{
    name: "images/red.jpg",
    text: "Костел", 
    description:"2",
},
{
    name: "images/troi.jpg",
    text: "Троицкое",
    description:"3",
  }

]
let s= "";
for (i=0; i<myPicture.length; i++) {
    s += `
    <figure>
    <p><img src="${myPicture[i].name}" alt="" width="500" onclick="change()"></p>
    <figcaption id="caption">${myPicture[i].text}</figcaption>
    <p id="add-text">${myPicture[i].description}</p>
    </figure>
    `;
}
    
    block.innerHTML = s;


    
let arrA = document.getElementsByTagName("figcaption");
for (index of arrA) {
    index.style = `
        font-size: 20px;
        font-weight: bold;
        color: indigo;
        text-align: center;
    `;
}    


function change() {

    //let myImg = document.getElementById("im1");

    // im = "id" + 1;
    // let myIm = document.getElementById(im);
    // myIm.src = "";    
    
    //let myP = document.getElementById("id1");
    


    let myA = document.getElementById("caption");
    let myB = document.getElementById("description");

    //myImg.src = "images/2.jpg";
    //myP.innerHTML = "Новая надпись";  
    myA.style.display = "none";  
    myB.style.display = "block"; 

        // im1.src = "images/2.jpg";
        // id1.innerHTML = "Новая надпись";
        // b1.style.display = "none";

    }
