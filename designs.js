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
function makeGrid(x,y) {
    let build = "";
    for(let $i=1;$i<=y;$i++) {
        build += "<tr>";
        for(let $j=1;$j<=x;$j++){
            build += "<td></td>";
        }
        build += "</tr>";
    }
    $("#pixel_canvas").append(build);
};
