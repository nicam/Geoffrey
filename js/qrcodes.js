window.onload = function(){
    // fake list
    var li = document.getElementsByTagName("tr")[0];
    for(var i=0; i<10; i++){
        var newli = li.cloneNode(true);
        li.parentNode.appendChild(newli);
    }
};