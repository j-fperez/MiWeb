
counter = function() {
    var value = $('#comentarios').val();
    var wordCount = 0;
    if (value.length == 0) {
        $('#display_count').text(wordCount);
        $('#word_left').text(150-wordCount);
        return;
    }

    var regex = /\s+/gi;

    if (value == value.match(regex)){
        wordCount = 0;
        value = "";
    } else {
        wordCount = value.trim().replace(regex, ' ').split(' ').length;
    }
    


    if (wordCount > 150) {
        var trimmed = value.split(/\s+/, 150).join(" ");
        $(this).val(trimmed + " ");
    }
    else {
        $('#display_count').text(wordCount);
        $('#word_left').text(150-wordCount);
    }
};

$(document).ready(function() {
    //$('#comentarios').change(counter);
    //$('#comentarios').keydown(counter);
    //$('#comentarios').keypress(counter);
    $('#comentarios').keyup(counter);
    //$('#comentarios').blur(counter);
    //$('#comentarios').focus(counter);
});