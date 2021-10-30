window.onload = function() {

    document.getElementById("paises").addEventListener("change", function() 
    {
        var paises = document.getElementById("paises");

        seleccionado = paises.options[paises.selectedIndex].text;

        /* alert(seleccionado); */

    })

    function getCiudades() 
    {
//        document.getElementById("ciudades")addEventListener    
        var colombiaCiudades = ("Bogotá", "Medellin", "Cali", "Cartagena", "Pereira");
        var venezuelaCiudades = ("Caracas", "Valencia", "Maracaibo", "Anaco", "Ciudad Ojeda");
        var usaCiudades = ("Miami", "New York", "Tampa", "New Jersey", "San Francisco");

        if (seleccionado == Colombia) {
            
        }
    }
}