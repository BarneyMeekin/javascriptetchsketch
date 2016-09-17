//when html loads
var rowNumber = 16;
<<<<<<< HEAD
var sideSize = 700 / rowNumber;
=======
var sideSize = 600 / rowNumber;
>>>>>>> 9712cfae4496b8bc95f588b7eee3fafe04d09d53
var elementNumber = " ";
for (var i = 0; i < rowNumber * rowNumber; i++){
    elementNumber += "<div class = 'square'></div>";
}
$(document).ready(function() {
    $('body').find("#container").append(elementNumber);
    $('.square').css({"height": sideSize + 'px', "width": sideSize + 'px'});
    $(document).on('mouseenter', '.square', function() {
<<<<<<< HEAD
        $(this).css("background-color", "#255E69");
=======
        $(this).css("background-color", "blue");
>>>>>>> 9712cfae4496b8bc95f588b7eee3fafe04d09d53
    });
});
//when new grid button is clicked
function makeGrid(){
    var rowNumber = prompt("How many rows on the grid?");
<<<<<<< HEAD
    var sideSize = 700 / rowNumber;
=======
    var sideSize = 600 / rowNumber;
>>>>>>> 9712cfae4496b8bc95f588b7eee3fafe04d09d53
    var elementNumber = " ";
    for (var i = 0; i < rowNumber * rowNumber; i++){
    elementNumber += "<div class = 'square'></div>";
    }
    $(document).ready(function() {
        $('.square').remove();
        $('body').find("#container").append(elementNumber);
        $('.square').css({"height": sideSize + 'px', "width": sideSize + 'px'});
        $(document).on('mouseenter', '.square', function() {
<<<<<<< HEAD
            $(this).css("background-color", "#255E69");
=======
            $(this).css("background-color", "blue");
>>>>>>> 9712cfae4496b8bc95f588b7eee3fafe04d09d53
        });
    });
}
//when random grid button is clicked
function makeRandomGrid(){
    var rowNumber = prompt("How many rows on the grid?");
<<<<<<< HEAD
    var sideSize = 700 / rowNumber;
=======
    var sideSize = 600 / rowNumber;
>>>>>>> 9712cfae4496b8bc95f588b7eee3fafe04d09d53
    var elementNumber = " ";
    for (var i = 0; i < rowNumber * rowNumber; i++){
    elementNumber += "<div class = 'square'></div>";
    }
    function getRandomColor() {
        function c() {
          var hex = Math.floor(Math.random()*256).toString(16);
          return ("0"+String(hex)).substr(-2); // pad with zero
        }
        return "#"+c()+c()+c();
      }
    $(document).ready(function() {
        $('.square').remove();
        $('body').find("#container").append(elementNumber);
        $('.square').css({"height": sideSize + 'px', "width": sideSize + 'px'});
        $(document).on('mouseenter', '.square', function() {
            $(this).css("background-color", getRandomColor);
        });
    });
}
