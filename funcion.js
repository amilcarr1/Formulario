function password_iguales()
{
    pass1 = document.getElementById('pass1_id').value; //document accede a los datos directamente desde el html
    pass2 = document.getElementById('pass2_id').value;

    if (pass1.value == pass2.value)
    {
        // Si las contraseñas coinciden ocultamos el mensaje de error
        document.getElementById("error").classList.remove("mostrar");

        // Mostramos un mensaje mencionando que las Contraseñas coinciden 
        document.getElementById("ok").classList.remove("ocultar");

        setTimeout(function()
        {
            location.reload();
        }, 3000);

        return true;
    }
    else
    {
        // Si las constraseñas no coinciden mostramos un mensaje 
        document.getElementById("error").classList.add("mostrar");
        return false;
    }
}


function handleSubmit()
{
    let nombre = document.formulario.nombre.value;
    let apellido = document.getElementById("apellidoId").value;
    let email = document.formulario.email.value;
    let telefono = document.formulario.telefono.value;
    let dni = document.formulario.dni.value;

    if(nombre==="" || apellido==="" || email==="" || telefono==="" || dni==="")
    {
        document.getElementById("errorRellenar").innerHTML = "Todos los campos son obligatorios";
    }
    else
    {
        document.getElementById("errorRellenar").innerHTML = "";
    }
}
