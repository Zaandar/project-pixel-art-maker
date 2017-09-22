let selectedColor;
let selectedWidth, selectedHeight;

// Select color input
$('#colorPicker').on('input', function(){
    selectedColor = $('#colorPicker').val();
    console.log(selectedColor);
});

// Select size input
$('#input_height').on('input', function(){
    selectedHeight = $('#input_height').val();
    console.log(selectedHeight);
});

$('#input_width').on('input', function(){
    selectedWidth = $('#input_width').val();
    console.log(selectedWidth);
});

// When size is submitted by the user, call makeGrid()
$('#sizePicker').on('submit', function(){
    console.log("submitted");
    makeGrid();
});

function makeGrid() {

console.log("GRID!!!");

}
