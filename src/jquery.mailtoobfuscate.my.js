/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */
/*
 * mailtoobfuscate.my
 * https://github.com/peachio/mailtoobfuscate
 *
 * Copyright (c) 2014 Peter Ruler
 * Licensed under the MIT license.
 */
;(function ( $, window, document, undefined ) {
    var counter = 0;//to pass object this closure variable must be used
    var pluginName = "mailtoobfuscate_my",
        defaults = {
            DEBUG : true,
            address : "JOHN.DOE",
            domain : "GMAIL",
            toplevel : "COM",
            subject: null,
            body: null
        };

    function Plugin( element, options ) {
        this.element = element;
        this.o = $.extend( {}, defaults, options) ;
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }
    Plugin.prototype.init = function () {
        var o = this.o;
        var elem = $(this.element);
        var merged =o.address.toLowerCase() + "@" + o.domain.toLowerCase().toLowerCase() + "."+o.toplevel;
        if(o.subject != null){
            var subject = "?subject="+o.subject;
        }
        if(o.body != null){
            var body = "&amp;body="+o.body
        }

        var content = elem.html();
        elem.children().remove();
        var mailto = "<a href=\"mailto:";
        if( o.subject == null && o.body == null ) {
            mailto += merged + "\">" + merged + "</a>";
        } else if( o.subject != null && o.body == null ) {
            mailto += + merged +subject+ "\">" + merged + "";
        } else if( o.subject == null && o.body != null ) {
            mailto += + merged+"?subject=''" +body+ "\">" + merged + "";
        } else if( o.subject != null && o.body != null ) {
            mailto += merged+subject+body+ "\">" + merged + "";
        }
        //output mailto-href content
        //(o.DEBUG == true) ? console.log(mailto) : false == false;
        elem.append(mailto);
    };
    $.fn.mailtoobfuscate_my = function ( options ) {
        return this.each(function () {

            if ( !$.data(this, "plugin_" + pluginName )) {
                $.data( this, "plugin_" + pluginName,
                    new Plugin( this, options[counter] ));//counter
                counter++;//next array value
            }
        });

    }

})( jQuery, window, document );
