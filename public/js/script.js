/* Author:

*/

// ----------------------------------------------window.resize -----------------------------------//
if (!($('html').hasClass('ie8'))) {
    $(window).resize(debouncer(function (e) {
        if (containerWidth > 768) {
            // ----------------------------------------------desktop action -----------------------------------//
            // ---------------------------------------------- END OF desktop action -----------------------------------//
        } else {
            // ----------------------------------------------mobile action -----------------------------------//
            // ----------------------------------------------END OF mobile action -----------------------------------//
        }




    }));
}
// ----------------------------------------------END OF window.resize -----------------------------------//



// ----------------------------------------------window.load -----------------------------------//
$(window).load(function () {

});
// ----------------------------------------------END OF window.load -----------------------------------//





// ----------------------------------------------document.ready -----------------------------------//
$(function () {

    if (containerWidth <= 768) {
        // ----------------------------------------------mobile related actions-----------------------------------//

        // ----------------------------------------------END OF mobile related actions-----------------------------------//

    } else {
        // ----------------------------------------------desktop related actions-----------------------------------//

        // ----------------------------------------------END OF desktop related actions-----------------------------------//
    }

    //hide the search filed label when focused
    $('.search-wrapper').find('input').focusin(
            function () { $(this).parent().find('label.prompt').hide(); }
        ).focusout(
            function () {
                if ($(this).attr("value") === "") $(this).parent().find('label.prompt').show();
            }
        );

});
// ----------------------------------------------END OF document.ready -----------------------------------//


function equilzeHeights(selector, steps, child_selector) {
    var items, wrapper;
    if ((wrapper = $(selector)).length) {
        //console.log(wrapper);
        wrapper.each(function (index, div) {
            items = $(div).find(child_selector);
            for (var i = 0; i < items.length; i += steps) {
                var current_items = new Array();
                for (var j = 0; j < steps; j++) {
                    var item = items[i + j];
                    if (item)
                        current_items.push(item);
                }
                var heights = jQuery.map(current_items, function (item, index) {
                    return $(item).height();
                });
                var max_height = Math.max.apply(null, heights)
                $(current_items).each(function (h_index, item) {
                    $(item).height(max_height);
                });
            }
        });
    }
}

function centerElement(selector) {
    var element = $(selector);
    var container = element.parent();

    element.css('margin-left', (container.outerWidth() - element.outerWidth()) / 2 - 6 + 'px');

}


function FirstAndLastinaRow(selector, steps) {
    var elements = $(selector);

    for (var i = 0; i < elements.size(); i += steps) {
        $(elements[i]).addClass('first-in-row');
    }

    for (var i = steps - 1; i < elements.size(); i += steps) {
        $(elements[i]).addClass('last-in-row');
    }
}


function debouncer(func, timeout) {
    var timeoutID, timeout = timeout || 200;
    return function () {
        var scope = this, args = arguments;
        clearTimeout(timeoutID);
        timeoutID = setTimeout(function () {
            func.apply(scope, Array.prototype.slice.call(args));
        }, timeout);
    }
}