let selectedColor;
let selectedWidth, selectedHeight;

// Select color input
$('#colorPicker').on('input', function() {
  selectedColor = $('#colorPicker').val();
});

// Select size input
$('#input_height').on('input', function() {
  selectedHeight = $('#input_height').val();
});

$('#input_width').on('input', function() {
  selectedWidth = $('#input_width').val();
});

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function() {
  event.preventDefault();
  makeGrid();
});

function makeGrid() {
  // get the table
  let grid = $('#pixel_canvas');

  // clear prior table, if any
  contents = grid.find('*');
  contents.remove();

  // create rows and columns
  for (let r = 0; r < selectedHeight; r++) {
    let row = $('<tr></tr>');
    grid.append(row);

    for (let c = 0; c < selectedWidth; c++) {
      let column = $('<td></td>');
      row.append(column);
    }
  }

  // change the color of the block the user just clicked on
  $('td').click(function() {  
    $(this).css("background-color", selectedColor);
  });
}
