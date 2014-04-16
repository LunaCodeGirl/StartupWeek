// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require superhero/loader
//= require superhero/bootswatch
//= require jquery.tagcanvas



function setupSections ()
{
    $windowHeight = $(window).height();

    $('body').data('offset', $windowHeight / 2.0);

    $("#home-sections section").each(function()
    {
        $thisHeight = $(this).height();

        if ($thisHeight < $windowHeight)
        {
            $halfDiff = ($windowHeight - $thisHeight) / 2.0;

            $(this).css('margin-top', $halfDiff).css('margin-bottom', $halfDiff);
        }
        else
        {
            $(this).css('margin-top', '80px');
        }
    });
};


$( document ).on('page:load', setupSections());

$( window ).resize(function(){setupSections();});

$( document ).ready(function()
{
    setupSections();

    $('a[href*="#"]').on('click',function (e)
    {
            e.preventDefault();

            var target = this.hash,
            $target = $(target);

            $newScrollPos = (this.hash === '') ? 0 : $target.offset().top - parseInt($target.css('margin-top'));

            $('html, body').stop().animate({
                'scrollTop': $newScrollPos
            }, 900, 'swing', function () {
                window.location.hash = target;
            });
    });


    et = $('#events').offset().top;
    wh = $(window).height();

    scrollPos = (et - wh);


    $(window).scroll(function()
    {
        var st = $(window).scrollTop();
        
        if(st < scrollPos)
            $('li.active').removeClass('active');

    });



    $width = $('#sponsorcloudcanvas').parent().width();
    $('#sponsorcloudcanvas').attr('width', $width).attr('height', $width / 2.0);


    $sponsorcloud = $('#sponsorcloudcanvas').tagcanvas(
    {
        textColour : '#ccc',
        outlineMethod: 'block',
        outlineColour: '#2B3E50',
        outlineThickness : 1,
        maxSpeed : 0.05,
        depth : 1.0,
        initial : [0.5, 0.5],
        wheelZoom : false,
        tooltip : 'div',
        freezeDecel : true,
        // freezeActive : true,
        tooltipDelay : 0,
        minBrightness : 0.5,
        decel : 1.0,
        radiusX : 0.8,
        radiusY : 0.8,
        radiusZ : 0.8
    });

    if( !$sponsorcloud )
        $('#sponsorcloud').hide();   

});