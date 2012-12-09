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

function getNodeByClassName(node, classname){
    if(node.className == classname){
        return node;
    }
    for(var i=0; i<node.childNodes.length; i++){
        var retNode = getNodeByClassName(node.childNodes[i], classname);
        if(retNode) return retNode;
    }
}

function kaufm(x) {
    var k = (Math.round(x * 100) / 100).toString();
    k += (k.indexOf('.') == -1)? '.00' : '00';
    return k.substring(0, k.indexOf('.') + 3);
}

function cash(elem){
    elem.className = "active";
    var amount = parseFloat(getNodeByClassName(elem, "deskAmount").innerHTML, 10);
    var totalAmount = parseFloat(document.getElementById("amount").innerHTML, 10);
    totalAmount += amount;
    totalAmount = kaufm(totalAmount);
    totalAmount += " CHF";
    document.getElementById("amount").innerHTML = totalAmount;
}