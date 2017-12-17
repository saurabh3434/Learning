function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function openFeatProduct(){
    if(document.getElementById("featuredProducts").style.display=='none')
    document.getElementById("featuredProducts").style.display='list-item';
    else
    document.getElementById("featuredProducts").style.display='none';
}
function kidsSection(){
    var e = document.getElementById("cat").value
    switch(e) {
        case "select" :
        document.getElementById("Kids").style.display='none';
        document.getElementById("Men").style.display='none';
        document.getElementById("Women").style.display='none';
         break;
            
        case "Kids": 
            document.getElementById("Kids").style.display='block';
            document.getElementById("Men").style.display='none';
            document.getElementById("Women").style.display='none';
             break;
        case "Men":
            document.getElementById("Men").style.display='block';
            document.getElementById("Women").style.display='none';
            document.getElementById("Kids").style.display='none';
            break;
        case "Women":
            document.getElementById("Men").style.display='none';
            document.getElementById("Women").style.display='block';
            document.getElementById("Kids").style.display='none';
            break;
    }
}