//when html loads
var rowNumber = 16;
var sideSize = 700 / rowNumber;//calculates element size
var elementNumber = " ";
for (var i = 0; i < rowNumber * rowNumber; i++){
    elementNumber += "<div class = 'square'></div>";
} //counts amount of elements
$(document).ready(function() {
    $('body').find("#container").append(elementNumber);//adds elements
    $('.square').css({"height": sideSize + 'px', "width": sideSize + 'px'});
    $(document).on('mouseenter', '.square', function() {
        $(this).css("background-color", "#255E69");//changes colour on event
    });
});
//when new grid button is clicked
function makeGrid(){
    var rowNumber = prompt("How many rows on the grid?");
    var sideSize = 700 / rowNumber;
    var elementNumber = " ";
    for (var i = 0; i < rowNumber * rowNumber; i++){
    elementNumber += "<div class = 'square'></div>";
    }
    $(document).ready(function() {
        $('.square').remove(); //clears grid 
        $('body').find("#container").append(elementNumber);
        $('.square').css({"height": sideSize + 'px', "width": sideSize + 'px'});
        $(document).on('mouseenter', '.square', function() {
            $(this).css("background-color", "#255E69");
        });
    });
}
//when random grid button is clicked
function makeRandomGrid(){
    var rowNumber = prompt("How many rows on the grid?");
    var sideSize = 700 / rowNumber;
    var elementNumber = " ";
    for (var i = 0; i < rowNumber * rowNumber; i++){
    elementNumber += "<div class = 'square'></div>";
    }
    function getRandomColor() { //generates random color
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
