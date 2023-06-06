$(document).ready(function () {
    $('.toolbar-togle').click(function () {
        $('.acblty').toggleClass('acblty-show', 1000);
        
        $('.size-plus').click(function () {
            fontSize = parseInt($('body').css('font-size')) + 2;
            fontSizeh1 = parseInt($('h1').css('font-size')) + 2;
            fontSizeh2 = parseInt($('h2').css('font-size')) + 2;
            fontSizeh3 = parseInt($('h3').css('font-size')) + 2;
            fontSizeh4 = parseInt($('h4').css('font-size')) + 2;
            fontSizeh5 = parseInt($('h5').css('font-size')) + 2;
            fontSizeh6 = parseInt($('h6').css('font-size')) + 2;
            fontSizeSpan = parseInt($('span').css('font-size')) + 2;
            if (fontSize <= 22) {
                $('body').css({ 'font-size': fontSize });
                $('h1').css({ 'font-size': fontSizeh1 });
                $('h2').css({ 'font-size': fontSizeh2 });
                $('h3').css({ 'font-size': fontSizeh3 });
                $('h4').css({ 'font-size': fontSizeh4 });
                $('h5').css({ 'font-size': fontSizeh5 });
                $('h6').css({ 'font-size': fontSizeh6 });
                $('span').css({ 'font-size': fontSizespan });
            } else if (fontSize >= 22) {
                $('body').css({ 'font-size': 22 });
            } else {
                $('body').css({ 'font-size': fontSize });
                $('h1').css({ 'font-size': fontSizeh1 });
                $('h2').css({ 'font-size': fontSizeh2 });
                $('h3').css({ 'font-size': fontSizeh3 });
                $('h4').css({ 'font-size': fontSizeh4 });
                $('h5').css({ 'font-size': fontSizeh5 });
                $('h6').css({ 'font-size': fontSizeh6 });
                $('span').css({ 'font-size': fontSizeSpan });
            }
        })
    
        $('.size-minus').click(function () {
            fontSize = parseInt($('body').css('font-size')) - 2;
            fontSizeh1 = parseInt($('h1').css('font-size')) - 2;
            fontSizeh2 = parseInt($('h2').css('font-size')) - 2;
            fontSizeh3 = parseInt($('h3').css('font-size')) - 2;
            fontSizeh4 = parseInt($('h4').css('font-size')) - 2;
            fontSizeh5 = parseInt($('h5').css('font-size')) - 2;
            fontSizeh6 = parseInt($('h6').css('font-size')) - 2;
            fontSizeSpan = parseInt($('span').css('font-size')) - 2;
            if (fontSize >= 12) {
                $('body').css({ 'font-size': fontSize });
                $('h1').css({ 'font-size': fontSizeh1 });
                $('h2').css({ 'font-size': fontSizeh2 });
                $('h3').css({ 'font-size': fontSizeh3 });
                $('h4').css({ 'font-size': fontSizeh4 });
                $('h5').css({ 'font-size': fontSizeh5 });
                $('h6').css({ 'font-size': fontSizeh6 });
                $('span').css({ 'font-size': fontSizespan });
            } else if (fontSize <= 12) {
                $('body').css({ 'font-size': 12 });
            } else {
                $('body').css({ 'font-size': fontSize });
                $('h1').css({ 'font-size': fontSizeh1 });
                $('h2').css({ 'font-size': fontSizeh2 });
                $('h3').css({ 'font-size': fontSizeh3 });
                $('h4').css({ 'font-size': fontSizeh4 });
                $('h5').css({ 'font-size': fontSizeh5 });
                $('h6').css({ 'font-size': fontSizeh6 });
                $('span').css({ 'font-size': fontSizeSpan });
            }
        })
    
        $('.btn-skala-abu').click(function () {
            $('body').toggleClass('skala-abu');
        });
    
        $('.btn-height-contras').click(function () {
            $('body').toggleClass('high-contrast');
        });
    
        $('.btn-contrast-negative').click(function () {
            $('body').toggleClass('negative-contrast');
        });
    
        $('.btn-light-background').click(function () {
            $('body').toggleClass('light-background');
        });
    
        $('.btn-link-underline').click(function () {
            $('body').toggleClass('links-underline');
        });
    
        $('.btn-reset').click(function () {
            $('body').css({'font-size': '100%'});
            $('h1').css({'font-size': '2em'});
            $('h2').css({'font-size': '1.5em'});
            $('h3').css({'font-size': '1.17em'});
            $('h4').css({'font-size': '1em'});
            $('h5').css({'font-size': '.83em'});
            $('h6').css({'font-size': '.67em'});
            $('body').removeClass('size-plus');
            $('body').removeClass('size-minus');
            $('body').removeClass('light-background');
            $('body').removeClass('skala-abu');
            $('body').removeClass('high-contrast');
            $('body').removeClass('negative-contrast');
            $('body').removeClass('links-underline');
        });
    });

});