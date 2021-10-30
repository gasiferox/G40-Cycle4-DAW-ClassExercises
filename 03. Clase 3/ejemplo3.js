window.onload = function () {

    document.getElementById("paises").addEventListener("change", function () {
        var paises = document.getElementById("paises");

        var seleccionado = paises.options[paises.selectedIndex].text;

        /* alert(seleccionado); */

        getCiudades(seleccionado);

    })

    function getCiudades(seleccionado) {
        var array =[];
        if (seleccionado == "Colombia")
            array = ["Bogotá", "Medellin", "Cali", "Cartagena", "Pereira"];
        if (seleccionado == "Venezuela")
            array = ["Caracas", "Valencia", "Maracaibo", "Anaco", "Ciudad Ojeda"];
        if (seleccionado == "Estados Unidos")
            array = ["Miami", "New York", "Tampa", "New Jersey", "San Francisco"];


        var ciudades = document.getElementById("ciudades");
        for (i = 0; i < array.length; i++)
            ciudades.options[i].text = array[i];
        
    }
}