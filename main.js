$(document).ready(function() {



    $("#enviar_datos").click(function(e) {


        e.preventDefault();
        let datos_ = [];

        datos_.push($("#nombre").val());
        datos_.push($("#apellido").val());
        datos_.push($("#edad").val());
        $.ajax({
            type: "POST",
            url: "https://pruebacofenalco.000webhostapp.com/Ajax_API/API.php",
            data: { datos_ },
            success: function(response) {
                document.getElementById("Respuesta").innerHTML = "Los datos enviados fueron: " + datos_;;
            }
        });

    });
});