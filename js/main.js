var mybutton = document.getElementById("myButton");
window.onscroll=function()
{
    scrollFunction()
};

function scrollFunction() 
{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
    {
        mybutton.style.display = "block";
    } 
    else 
    {
        mybutton.style.display = "none";
    }
}
    
    // When the user clicks on the button, scroll to the top of the document
function topFunction() 
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

$(document).ready(function(){

    $('.dropdown-trigger').dropdown();
    $('.parallax').parallax();
    $('.carousel').carousel();
    $('.modal').modal();
    $('.sidenav').sidenav();
})
