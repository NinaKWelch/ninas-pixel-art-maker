// Select color input


// When size is submitted by the user, call makeGrid()

function makeGrid() {
    // Select size input
    var height = $('#input_height').val();
    var width = $('#input_height').val();
    var table = $('#pixel_canvas');

    // Reset table with new submit
	table.empty();

    // Add rows (tr) to table based on the heigh value
	for (i = 0; i < height; i++) {
	table.append('<tr></tr>');
	}

    // Add cells (td) to table rows (tr) based on the width value
	for (j = 0; j < width; j++) {
	$('tr').append('<td></td>');
	}

	// Select color input
	table.on('click', 'td', function() {
		var color = $("#colorPicker").val();
		$(this).attr('bgcolor', color);
	});

}

// Stop the page from refreshing on each submit
$('input[type="submit"]').click(function(event) {
  event.preventDefault();
  makeGrid();
});
