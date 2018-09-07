
    function main(){
    
    $('#hide-me').css('display','none');
    $('#show-me').css('display', 'block');
    $('#grow-me').addClass('big');
    $('#shrink-me').removeClass('big');
    var $input = $("#some-text");
};

const li = $('li');
console.log(li.text(), li.html());

$("#action").on("click", main);
