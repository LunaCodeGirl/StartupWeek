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
        };
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

});