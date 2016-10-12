$(document).ready(function() {
    $("#comentarios").on('keyup', function() {
        var words = this.value.match(/\S+/g).length;
        if (words > 150) {
            
            var trimmed = $(this).val().split(/\s+/, 150).join(" ");
            
            $(this).val(trimmed + " ");
        }
        else {
            $('#display_count').text(words);
            $('#word_left').text(150-words);
        }
    });
 }); 