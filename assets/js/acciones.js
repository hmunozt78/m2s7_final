//var opcion = prompt("¡Hola! Soy Eva, tu asistente virtual del Servicio al Cliente de Mentel. Estoy aquí para ayudarte en lo que necesides.\nEscribe el número de la opción que buscas: \n1.- Boletas y Pagos \n2.- Señal y llamadas \n3.- Oferta comercial  \n4.- Otras consultas")

function boletas (){
    let opcionbol, validabol;

    do{

        opcionbol = prompt("Seleccione una opcion:\n1.- Ver Boleta\n2.- Pagar Cuenta"); 

        switch (opcionbol){
            case "1":
                alert("Haga click aqui para descargar su boleta");
                validabol="ok"
                break;
            case "2":
                alert("Esta siendo transferido. Espere Por favor");
                validabol="ok"
                break;
            default:
                alert("La opcion ingresada no es valida, intente nuevamente");
                validabol=":$"
        }

    } while (validabol == ":$");
    
    return(null);
}

function senalYllamadas (){
    let opcionsyl, mens_cliente, validasyl;

    do{
        opcionsyl = prompt("Seleccione una opcion:\n1.- Problemas con la Señal\n2.- Problemas con las llamadas");

        if (opcionsyl == "1" || opcionsyl == "2"){
            mens_cliente = prompt("A continuacion escriba su solicitud");
            alert("Estimado Usuario, su solicitud: "+mens_cliente+" Ha sido ingresada con exito. \nPronto sera contactado por uno de nuestros ejecutivos");
            validasyl = "s"
        } else {
            alert("La opcion ingresada no es valida, intente nuevamente");
            validasyl = "n"
        };

    } while (validasyl =="n");
    
    
    return(null);
}

function ofertasComerciales(){
    let opcionoc, validaoc;
    do{

        opcionoc= prompt("Mentel tiene una oferta comercial acorde a tus necesidades. \nPara conocer mas informacion y ser asesorado personalmente por un ejecutivo, escribe SI y un ejecutivo te llamara. De lo contrario escribe NO");

        opcionoc = opcionoc.toUpperCase();

        switch (opcionoc){
            case "SI":
                alert("Un ejecutivo contactara con usted");
                validaoc="ok";
                break;
            case "NO":
                alert("Gracias por preferir nuestros servicios");
                validaoc="ok";
                break;
            default:
                alert("La opcion ingresada no es valida, intente nuevamente");
                validaoc = "eehh";
        }
    } while (validaoc == "eehh");
    return(null);
    
}

function otrasConsultas() {
    let mens_oc;
    mens_oc=prompt("A continuacion escriba su consulta");
    alert("Estimado usuario, su consulta: "+mens_oc+" ha sido ingresado con exito. Pronto sera contactado por uno de nuestros ejecutivos");
    return(null);   
}