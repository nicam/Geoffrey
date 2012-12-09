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

    $('.mobileList li').click(cash);
};

function kaufm(x) {
    var k = (Math.round(x * 100) / 100).toString();
    k += (k.indexOf('.') == -1)? '.00' : '00';
    return k.substring(0, k.indexOf('.') + 3);
}

function cash(){
    var direction;
    if ($(this).hasClass("active")) {
        $(this).removeClass('active');
        direction = -1;
    } else {
        $(this).addClass('active');
        direction = 1;
    }
    
    var amount = parseFloat($(this).find(".deskAmount").get(0).innerHTML, 10) * direction;
    var totalAmount = parseFloat($('#amount').get(0).innerHTML, 10);
    totalAmount += amount;
    totalAmount = kaufm(totalAmount);
    totalAmount += " CHF";
    document.getElementById("amount").innerHTML = totalAmount;
}