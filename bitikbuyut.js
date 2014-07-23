(function ( $ ) {

    $.fn.bitikbuyut = function( options ) {

        var settings = $.extend({
            // Default değerler
            tikvspx: 10,
            kactik: 1
        }, options );

        return this.each(function() {
            settings.height = this.offsetHeight;
            settings.width = this.offsetWidth;
        }).css({
            height: settings.height + (settings.kactik * settings.tikvspx),
            width: settings.width + (settings.kactik * settings.tikvspx)
        });
    };

}( jQuery ));