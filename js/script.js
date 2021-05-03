$(function(){
// ---------------Modification des liens du menu en tablette et smartphone---------------//
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
        $("#jeffrey").toggleClass('cachem');
        $("#jarvis").toggleClass('cachem');
        $("#menuRestaurantElt").addClass('cache');
        $("#menuChambreElt").addClass('cache');
        $("#menuSpaElt").addClass('cache');
        $("#menuHotelElt").addClass('cache');
        
    });



// -----------------------Changement de langue---------//
$('#fr').on('click',function(){
    alert('le site va être traduit en Francais')
});
$('#en').on('click',function(){
    alert('le site va être traduit en Anglais')
});


// ---------------------Reservation---------------------------//


// date picker------------//
$.datepicker.regional['fr'] = {
    closeText: 'Fermer',
    prevText: '&#x3c;Préc',
    nextText: 'Suiv&#x3e;',
    currentText: 'Aujourd\'hui',
    monthNames: ['Janvier','Fevrier','Mars','Avril','Mai','Juin',
    'Juillet','Aout','Septembre','Octobre','Novembre','Decembre'],
    monthNamesShort: ['Jan','Fev','Mar','Avr','Mai','Jun',
    'Jul','Aou','Sep','Oct','Nov','Dec'],
    dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
    dayNamesShort: ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],
    dayNamesMin: ['Di','Lu','Ma','Me','Je','Ve','Sa'],
    weekHeader: 'Sm',
    dateFormat: 'dd-mm-yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: '',
    minDate: 0,
    maxDate: '+12M +0D',
    numberOfMonths: 2,
    showButtonPanel: true
    };
    $( "#datepicker" ).datepicker( "option",
    $.datepicker.regional['fr'] );
//   $.datepicker.setDefaults($.datepicker.regional['fr']);

var dateFormat = "mm/dd/yy",
from = $( "#from" )
  .datepicker({
    defaultDate: "+1w",
    changeMonth: true,
    numberOfMonths: 3,
    dayNamesShort: $.datepicker.regional[ "fr" ].dayNamesShort,
    dayNames: $.datepicker.regional[ "fr" ].dayNames,
    monthNamesShort: $.datepicker.regional[ "fr" ].monthNamesShort,
    dayNamesMin: $.datepicker.regional[ "fr" ].dayNamesMin,
    monthNames: $.datepicker.regional[ "fr" ].monthNames
  })
  .on( "change", function() {
    to.datepicker( "option", "minDate", getDate( this ) );
  }),
to = $( "#to" ).datepicker({
  defaultDate: "+1w",
  changeMonth: true,
  numberOfMonths: 3,
  dayNamesShort: $.datepicker.regional[ "fr" ].dayNamesShort,
  dayNames: $.datepicker.regional[ "fr" ].dayNames,
  monthNamesShort: $.datepicker.regional[ "fr" ].monthNamesShort,
  dayNamesMin: $.datepicker.regional[ "fr" ].dayNamesMin,
  monthNames: $.datepicker.regional[ "fr" ].monthNames
})
.on( "change", function() {
  from.datepicker( "option", "maxDate", getDate( this ) );
});

function getDate( element ) {
var date;
try {
  date = $.datepicker.parseDate( dateFormat, element.value );
} catch( error ) {
  date = null;
}

return date;
}
// $('#datedebut').datepicker( $.datepicker.regional[ "fr" ] );
// --------Test Date fin apres date debut----------------//
$('#datefin').on('change',function(){
    let endDate = $(this).datepicker("getDate");
    let startDate = $('#datedebut').datepicker("getDate");
    let diff = endDate - startDate;
    let diffjours = diff / 86400000;
    console.log(diffjours);
        if(diffjours < 0){
        alert("vous ne pouvez pas partir avant d'ariver");
    }
})


// ------------- Video----------------------------------//
$("#vidLinks a").click(function () {
    $("#modal").fadeIn();
  });
  $("#modal span").click(function () {
    $("#modal").fadeOut();
    $("#mainVid").attr("src", "");
  });

  

// -----------------fin Video---------------------------------------//

// ----------------------Début Chambre------------------------------//
$(".visible").on('click',function(){
    $("#chambreClassique").toggleClass('cache');
});
$(".visible1").on('click',function(){
    $("#chambreConfort").toggleClass('cache');
});
$(".visible2").on('click',function(){
    $("#chambreLuxe").toggleClass('cache');
});
$(".visible3").on('click',function(){
    $("#chambreSuite").toggleClass('cache');
});
// ----------------------Fin Chambre------------------------------//



 

});/////////////////////////////////////////////////////////////////////////////////////////////////////
