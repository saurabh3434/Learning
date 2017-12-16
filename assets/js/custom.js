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