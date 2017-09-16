$(document).ready(function(){
    //click events
    $('#student').on('click', function(evt){
        evt.preventDefault();
       $('#mainGridStudent').removeClass('hidden fadeIn').addClass('animated bounceInLeft');
        $('#mainGridProfessional').addClass('hidden');
        $('#aboutMe').addClass('hidden');
        $('#contactMe').addClass('hidden');
        $('#pro, #about, #contact').removeClass('activeLink');
        $(this).addClass('activeLink');
    });

    $('#pro').on('click', function(evt){
        evt.preventDefault();
        $('#mainGridProfessional').removeClass('hidden').addClass('animated bounceInLeft');
        $('#mainGridStudent').addClass('hidden');
        $('#aboutMe').addClass('hidden');
        $('#contactMe').addClass('hidden');
        $('#student, #about, #contact').removeClass('activeLink');
        $(this).addClass('activeLink');
    });

    $('#about').on('click', function(evt){
        evt.preventDefault();
        $('#aboutMe').removeClass('hidden').addClass('animated bounceInLeft');
        $('#mainGridProfessional').addClass('hidden');
        $('#mainGridStudent').addClass('hidden');
        $('#contactMe').addClass('hidden');
        $('#student, #pro, #contact').removeClass('activeLink');
        $(this).addClass('activeLink');
    });

    $('#contact').on('click', function(evt){
        evt.preventDefault();
        $('#contactMe').removeClass('hidden').addClass('animated bounceInLeft');
        $('#aboutMe').addClass('hidden');
        $('#mainGridProfessional').addClass('hidden');
        $('#mainGridStudent').addClass('hidden');
        $('#student, #about, #pro').removeClass('activeLink');
        $(this).addClass('activeLink');
    });

    var links = "#pro, #student, #about, #contact";
    //mouse events
    $(links).on('mouseenter mouseleave', function(evt){
        evt.stopPropagation();
       $(this).toggleClass('highlight');
    });

    $(links).on('focusin focusout', function(evt){
        evt.stopPropagation();
        evt.preventDefault();
        $(this).toggleClass('highlight');
    });


    var modalArray = ["#coffee", "#cupcake", "#pie"];
    //modals hover functions for modal images
    $('#coffee').on('mouseenter mouseleave', function(){
        $('#coffeeBig').toggleClass('hidden animated fadeIn');
    });

    $('#cupcake').on('mouseenter mouseleave', function(){
        $('#cupcakeBig').toggleClass('hidden animated fadeIn');
    });


    $('#pie').on('mouseenter mouseleave', function(){
        $('#pieBig').toggleClass('hidden animated fadeIn');
    });

});

