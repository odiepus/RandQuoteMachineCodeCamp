
(function(){
    var $randQuote = $('.random-quote-container');
    var i = 0;

    $("button").click(function(){
        i = (i + 1) % $randQuote.length;
        $randQuote.hide().eq(i).show();
    })
})();