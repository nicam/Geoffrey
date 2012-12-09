window.onload = function(){
    // fake list
    var li = document.getElementsByTagName("li")[1];
    for(var i=0; i<20; i++){
        var newli = li.cloneNode(true);
        li.parentNode.appendChild(newli);
    }
    
    // scroll to 0px to make the safari header on iphone invisible
    window.scrollTo(0, 2000);
    setTimeout(function(){window.scrollTo(0, 0);}, 100);
};

function add(elem){
    var actualCount = parseInt(elem.parentNode.parentNode.childNodes[1].innerHTML, 10);
    actualCount++;
    console.log(actualCount);
    elem.parentNode.parentNode.childNodes[1].innerHTML = actualCount;
}

function sub(elem){
    var actualCount = parseInt(elem.parentNode.parentNode.childNodes[1].innerHTML, 10);
    if(actualCount > 0) actualCount--;
    console.log(actualCount);
    elem.parentNode.parentNode.childNodes[1].innerHTML = actualCount;
}

function getNodeByClassName(node, classname){
    if(node.className == classname){
        return node;
    }
    for(var i=0; i<node.childNodes.length; i++){
        var retNode = getNodeByClassName(node.childNodes[i], classname);
        if(retNode) return retNode;
    }
}

function order(){
    var article = document.getElementsByTagName("article");
    var articleString = "";
    for(var i=0; i<article.length; i++){
        var count = parseInt(getNodeByClassName(article[i], "count").innerHTML, 10);
        if(count == 0) continue;
        articleString += count;
        articleString += " ";
        articleString += getNodeByClassName(article[i], "description").getElementsByTagName("h1")[0].innerHTML;
        articleString += " und ";
    }
    if(articleString.search(" und ")) articleString = articleString.substring(0, articleString.length - 5);
    if(articleString != "") return confirm("Es werden " + articleString + " bestellt.");
    else{
        alert("Es wurde noch nichts ausgewählt.");
        return false;
    }
}

function theBillPlease(){
    return confirm("Zahlungsbegehren absenden?");
}