let data_d = [];

$(document).ready(function() {
    $("button").click(function() {
        var x = $("form").serializeArray();
        $.each(x, function(i, field) {
            $("#output").append("<br>" + field.name + ": "
                    + field.value + "<br> <br>");
                    data_d.push(field.value)
        });
        let p1 = data_d[4] * data_d[2];
        let p2 = Math.pow(1 + (data_d[3]));
        let p3 = data_d[4] * data_d[2];
        let ddg = (data_d[1] * p2) ** p1;
        // console.log(data_d[1] * (1 + (data_d[3] / data_d[4]))**p1);
        let return_oi = (data_d[1] * (1 + (data_d[3] / data_d[4]))**p1)
        document.getElementById("roi").innerHTML = return_oi.toFixed(2);


     });
});
