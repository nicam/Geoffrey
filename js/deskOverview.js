window.onload = function(){
    // fake list
    var li = document.getElementsByTagName("li")[0];
    for(var i=0; i<20; i++){
        var newli = li.cloneNode(true);
        li.parentNode.appendChild(newli);
    }
    
    // scroll to 0px to make the safari header on iphone invisible
    window.scrollTo(0, 2000);
    setTimeout(function(){window.scrollTo(0, 0);}, 100);
    
};