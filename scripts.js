document.addEventListener("DOMContentLoaded", function (){
    
    
    let container = document.createElement("container");
    container.className = "header-container";
    document.body.appendChild(container);

    let h1 = document.createElement("h1");
    let h1TextNode = document.createTextNode("This is an h1.");
    h1.appendChild(h1TextNode);
    container.appendChild(h1);
    
    let h2 = document.createElement("h2");
    let h2TextNode = document.createTextNode("This is an h2.");
    h2.appendChild(h2TextNode);
    container.appendChild(h2);
    
    let h3 = document.createElement("h3");
    let h3TextNode = document.createTextNode("This is an h3.");
    h3.appendChild(h3TextNode);
    container.appendChild(h3);
    
    let h4 = document.createElement("h4");
    let h4TextNode = document.createTextNode("This is an h4.");
    h4.appendChild(h4TextNode);
    container.appendChild(h4);
    
    let h5 = document.createElement("h5");
    let h5TextNode = document.createTextNode("This is an h5.");
    h5.appendChild(h5TextNode);
    container.appendChild(h5);
    
    let h6 = document.createElement("h6");
    let h6TextNode = document.createTextNode("This is an h6.");
    h6.appendChild(h6TextNode);
    container.appendChild(h6);
    
})
