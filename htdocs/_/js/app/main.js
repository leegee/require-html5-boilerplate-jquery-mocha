// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

require.config({
    baseUrl: "_/js/", // Relative to the caller
    paths: {
        jquery: [
            '//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js',
            'vendor/jquery-1.11.1.min'
        ],
        modernizer: 'vendor/modernizr-2.8.0.min'
    }
});

// requirejs.onError = function (err) {}

define( ['jquery'], function (jquery) {
    jquery(document).ready( function () {
        jquery('body').append('<h1>Loaded and ready</h1>');
    });
});




