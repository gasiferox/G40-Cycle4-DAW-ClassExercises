window.onload = function () {

    document.getElementById("paises").addEventListener("change", function () {
        var paises = document.getElementById("paises");

        var seleccionado = paises.options[paises.selectedIndex].text;

        /* alert(seleccionado); */

        getCiudades(seleccionado);

        getEstados(seleccionado);

        getBandera(seleccionado)
    })

    function getCiudades(seleccionado) {
        var arrayCiudades = [];
        if (seleccionado == "Colombia")
            arrayCiudades = ["Bogotá", "Medellin", "Cali", "Cartagena", "Pereira"];
        if (seleccionado == "Venezuela")
            arrayCiudades = ["Caracas", "Valencia", "Maracaibo", "Anaco", "Ciudad Ojeda"];
        if (seleccionado == "Estados Unidos")
            arrayCiudades = ["Miami", "New York", "Tampa", "New Jersey", "San Francisco"];

        var ciudades = document.getElementById("ciudades");
        for (i = 0; i < arrayCiudades.length; i++)
            ciudades.options[i].text = arrayCiudades[i];
    }

    function getEstados(seleccionado) {
        var arrayEstados = [];
        if (seleccionado == "Colombia")
            arrayEstados = ["Cundinamarca", "Boyacá", "Nariño", "Risaralda", "Quindio"];
        if (seleccionado == "Venezuela")
            arrayEstados = ["Carabobo", "Anzoategui", "Zulia", "Apure", "Mérida"];
        if (seleccionado == "Estados Unidos")
            arrayEstados = ["Florida", "Nevada", "Iowa", "Kentuky", "Colorado"]

        var estados = document.getElementById("estados");
        for (i = 0; i < arrayEstados.length; i++)
            estados.options[i].text = arrayEstados[i];
    }

    function getBandera(seleccionado) {
        var bandera = document.getElementById("bandera");
        if (seleccionado == "Colombia") {
            src = 'https://i.pinimg.com/564x/39/75/46/3975463ece752762220e1ef685503d16.jpg'
            bandera.innerHTML = '<img src="' + src + '" alt="">';
        }
        if (seleccionado == "Venezuela") {
            src = 'https://i.pinimg.com/564x/83/2a/9d/832a9d6c084698f80b6df24ec06ab4dd.jpg'
            bandera.innerHTML = '<img src="' + src + '" alt="">';
        }
        if (seleccionado == "Estados Unidos") {
            src = 'https://i.pinimg.com/564x/50/f3/9f/50f39febff794741fed9d23e3a489e07.jpg'
            bandera.innerHTML = '<img src="' + src + '" alt="">';
        }
    }
}