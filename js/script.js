$(function(){
// ---------------menu simple en mode tablette et smartphone---------------//
$("#menuChambre").on('click',function(){
    if (window.matchMedia("(max-width: 1200px)").matches)
    $(this).attr('href',"/chambres.html");
});

$("#menuRestaurant").on('click',function(){
    if (window.matchMedia("(max-width: 1200px)").matches)
    $(this).attr('href',"/restaurant.html");
});

$("#menuSpa").on('click',function(){
    if (window.matchMedia("(max-width: 1200px)").matches)
    $(this).attr('href',"/spa.html");
});

$("#menuHotel").on('click',function(){
    if (window.matchMedia("(max-width: 1200px)").matches)
    $(this).attr('href',"/hotel.html");
});
// ---------Cacher le sousMenu en mode tablette---------//

    $("#menuChambre").on('click',function(){
        if (window.matchMedia("(max-width: 768px)").matches){
            $("#menuRestaurantElt").addClass('cache');
            $("#menuChambreElt").addClass('cache');
            $("#menuSpaElt").addClass('cache');
            $("#menuHotelElt").addClass('cache');
            $(this).attr('href',"/chambres.html");  
        }else if(window.matchMedia("(min-width: 1224px)").matches){
            $("#menuRestaurantElt").addClass('cache');
            $("#menuChambreElt").toggleClass('cache');
            $("#menuSpaElt").addClass('cache');
            $("#menuHotelElt").addClass('cache');
        }
        
    });
    
    $("#menuRestaurant").on('click',function(){
        if (window.matchMedia("(max-width: 768px)").matches){
            $("#menuRestaurantElt").addClass('cache');
            $("#menuChambreElt").addClass('cache');
            $("#menuSpaElt").addClass('cache');
            $("#menuHotelElt").addClass('cache');
            $(this).attr('href',"/restaurant.html");
        }else if(window.matchMedia("(min-width: 1200px)").matches){
            $("#menuRestaurantElt").toggleClass('cache');
            $("#menuChambreElt").addClass('cache');
            $("#menuSpaElt").addClass('cache');
            $("#menuHotelElt").addClass('cache');
        }  
    });
    
    
    
    $("#menuSpa").on('click',function(){
        if (window.matchMedia("(max-width: 768px)").matches){
            $("#menuRestaurantElt").addClass('cache');
            $("#menuChambreElt").addClass('cache');
            $("#menuSpaElt").addClass('cache');
            $("#menuHotelElt").addClass('cache');
            $(this).attr('href',"/spa.html");
        }else if(window.matchMedia("(min-width: 1200px)").matches){
            $("#menuRestaurantElt").addClass('cache');
            $("#menuChambreElt").addClass('cache');
            $("#menuSpaElt").toggleClass('cache');
            $("#menuHotelElt").addClass('cache');
        }  
    });
    
    $("#menuHotel").on('click',function(){
        if (window.matchMedia("(max-width: 768px)").matches){
            $("#menuRestaurantElt").addClass('cache');
            $("#menuChambreElt").addClass('cache');
            $("#menuSpaElt").addClass('cache');
            $("#menuHotelElt").addClass('cache');
            $(this).attr('href',"/hotel.html");
        }else if(window.matchMedia("(min-width: 1200px)").matches){
            $("#menuRestaurantElt").addClass('cache');
            $("#menuChambreElt").addClass('cache');
            $("#menuSpaElt").addClass('cache');
            $("#menuHotelElt").toggleClass('cache');
        }  
    });
    
    
    // -------------Affiche / Cache question Jeffrey--------------//
    $("#jeffrey").on('mouseover',function(){
        $("#search").removeClass('cache');
    });
    $("#jeffrey").on('mouseout',function(){
        $("#search").addClass('cache');
    });


// ---------Cacher le Menu en mode smartphone---------// 

    $('#menuHomeElt').on('click',()=>{
        $("#menuChambre").toggleClass('cachem');
        $("#menuRestaurant").toggleClass('cachem');
        $("#menuSpa").toggleClass('cachem');
        $("#menuHotel").toggleClass('cachem');
        $("#menuRestaurantElt").addClass('cache');
        $("#menuChambreElt").addClass('cache');
        $("#menuSpaElt").addClass('cache');
        $("#menuHotelElt").addClass('cache');
        
    })


});/////////////////////////////////////////////////////////////////////////////////////////////////////
