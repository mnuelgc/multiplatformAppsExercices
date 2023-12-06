var screen = document.getElementById("screen");
var cadenaOperacion = "";

var onError = false

function Limpiar(){
    cadenaOperacion = "";
    RefreshScreen()
}

function SetValue(value)
{
    if (onError == true)
    {
        Limpiar();
        onError = false;
    }
    cadenaOperacion += value;
    RefreshScreen()
}

function Calcular()
{
    if(cadenaOperacion == "")
        onError = true;

        try {
        cadenaOperacion = eval(cadenaOperacion);
        if (cadenaOperacion == "Infinity" || cadenaOperacion == "NaN")
        {
            onError = true;
        }
        RefreshScreen()
        } catch (e) {
            onError = true
            RefreshScreen()
            // error
        }
}

function RefreshScreen()
{
    if (onError)
    {
        screen.innerHTML = "ERROR"
    }
        else{screen.innerHTML = cadenaOperacion
    }
}