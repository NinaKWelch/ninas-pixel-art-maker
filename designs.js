// When size is submitted by the user, call makeGrid()

function makeGrid() {
    // Select size input
    const TABLE = $('#pixel_canvas');
    const TABLE_HEIGHT = $('#input_height').val();
    const TABLE_WIDTH = $('#input_width').val();


    // Reset table with new submit
	TABLE.empty();

    // Add rows (tr) to table based on the heigh value
	for (let i = 0; i < TABLE_HEIGHT; i++) {
	    TABLE.append('<tr></tr>');
	}

    // Add cells (td) to rows based on the width value
	for (let j = 0; j < TABLE_WIDTH; j++) {
	    $('tr').append('<td></td>');
	}

	// Select color input
	TABLE.on('click', 'td', function() {
		let cellColor = $("#colorPicker").val();
		$(this).attr('bgcolor', cellColor);
	});

}

// Stop the page from refreshing on each submit
$('input[type="submit"]').click(function(event) {
    event.preventDefault();
    // remove placeholder img and h2 on click
    $('div.content img').css('display', 'none');
    $('div.content h3').css('display', 'none');
    makeGrid();
});

