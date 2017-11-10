// Select color input
let color = $("#colorPicker").val();
$("#colorPicker").on("input", function() {
    color = $("#colorPicker").val();
});

// When size is submitted by the user, call makeGrid()
$( "form" ).submit(function(e) {
    let canvasHeight = $("#input_height").val();
    let canvasWidth = $("#input_width").val();
    makeGrid(canvasWidth,canvasHeight);
    e.preventDefault();
});
function makeGrid(cells,rows) {
    $("#pixel_canvas tr").remove(); //clear content if exist.
    let build;
    for(let $i=1;$i<=rows;$i++) {
        build += "<tr>";
        for(let $j=1;$j<=cells;$j++){
            build += "<td></td>";
        }
        build += "</tr>";
    }
    $("#pixel_canvas").append(build);

    $("#pixel_canvas").on( 'click', 'td', function() {
        $(this).css("background-color",color);
    });
};



