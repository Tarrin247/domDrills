document.addEventListener("DOMContentLoaded", function (){
    //let liBtn = document.getElementsByClassName("li-btn")[0];
    let liBtn = document.querySelector(".li-Btn");
    let counter = 1;
    
    let container = document.createElement("container");
    container.className = "header-container";
    document.body.appendChild(container);

    let h1 = document.createElement("h1");
    let h1TextNode = document.createTextNode("This is an h1.");
    h1.className = "h1";
    h1.appendChild(h1TextNode);
    container.appendChild(h1);
    h1.addEventListener("dblclick", function(){
        let colors = ["red", "blue", "teal", "orange", "brown", "yellow", "green", "violet"];
        h1.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    })



    let h2 = document.createElement("h2");
    let h2TextNode = document.createTextNode("This is an h2.");
    h2.className = "h2";
    h2.appendChild(h2TextNode);
    container.appendChild(h2);
    
    let h3 = document.createElement("h3");
    let h3TextNode = document.createTextNode("This is an h3.");
    h3.className = "h3";
    h3.appendChild(h3TextNode);
    container.appendChild(h3);
    
    let h4 = document.createElement("h4");
    let h4TextNode = document.createTextNode("This is an h4.");
    h4.className = "h4";
    h4.appendChild(h4TextNode);
    container.appendChild(h4);
    
    let h5 = document.createElement("h5");
    let h5TextNode = document.createTextNode("This is an h5.");
    h5.className = "h5";
    h5.appendChild(h5TextNode);
    container.appendChild(h5);
    
    let h6 = document.createElement("h6");
    let h6TextNode = document.createTextNode("This is an h6.");
    h6.className = "h6";
    h6.appendChild(h6TextNode);
    container.appendChild(h6);  
})

    liBtn.addEventListener("click", function(){
    // Created list element, add text to the list item plus a counter for subsequent clicks. 
    // attach the list via appendChild to the container which is the div. Added counter. 
    let li = document.createElement("li");
    let liTextNode = document.createTextNode("This is list item " + counter)
    container.appendChild(li); 

    counter++;
})


    //let headerArr = ["h1", "h2", "h3", "h4", "h5", "h6"]; 
   // for (let i = 0; i < headerArr.length; i++) {
    //   headerArr[i].addEventListener("click" , function () {
     //        let colors = [
    //          "purple",
     //          "orange",
     //         "Teal",
     //          "pink",
     //          "green",
     //           "blue",
      //          "red",
      //       "violet",
     //        ];

            // console.log(headerArr[i])
     //       headerArr[i].style.color = colors[Math.floor(Math.random() * colors.length)];
    //   });  
     
    //}
