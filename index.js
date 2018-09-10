
    function main(){
    
    $('#hide-me').css('display','none');
    $('#show-me').css('display', 'block');
    $('#grow-me').addClass('big');
    $('#shrink-me').removeClass('big');
    var $input = $("#some-text");
    $("li").text(console.log);
    $('h1').html("Welcome " + $("#name").val());
};

const li = $('li');
console.log(li.text(), li.html());

$("#action").on("click", main);
