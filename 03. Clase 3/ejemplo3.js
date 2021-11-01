window.onload = function () {

    document.getElementById("paises").addEventListener("change", function () {
        var paises = document.getElementById("paises");

        var seleccionado = paises.options[paises.selectedIndex].text;

        /* document.body.style.background = 'url("https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg")'; */


        /* alert(seleccionado); */

        getEstados(seleccionado);

        /* getCiudades(seleccionado); */

        getBandera(seleccionado)
    })

    function getEstados(seleccionado) {
        var arrayEstados = [];
        if (seleccionado == "Colombia")
            arrayEstados = ["Cundinamarca", "Boyacá", "Nariño", "Risaralda", "Quindio"];
        if (seleccionado == "Venezuela")
            arrayEstados = ["Carabobo", "Anzoategui", "Zulia", "Apure", "Mérida"];
        if (seleccionado == "Estados Unidos")
            arrayEstados = ["Florida", "Nevada", "Iowa", "Kentucky", "Colorado"]

        var estados = document.getElementById("estados");
        for (i = 0; i < arrayEstados.length; i++)
            estados.options[i+1].text = arrayEstados[i];
    }

    /* function getCiudades(seleccionado) {
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
    } */

    document.getElementById("estados").addEventListener("change", () => {
        var estados = document.getElementById("estados");

        var estadoSel = estados.options[estados.selectedIndex].text;

        console.log("el estado seleccionado es " + estadoSel)

        getCiudades(estadoSel);
    })

    function getCiudades(estadoSel)
    {
        var arrayCiudades = [];
        /* Colombia */
        if (estadoSel == "Cundinamarca") {
            arrayCiudades = ["Bogotá", "Sopó", "Chia", "Cajicá", "Cucunubá"];
        }
        if (estadoSel == "Boyacá") {
            arrayCiudades = ["Tunja", "Duitama", "Paipa", "Sogamoso", "Villa de Leyva"];
            console.log("dentro del if, " + estadoSel)
        }
        if (estadoSel == "Nariño") {
            arrayCiudades = ["Pasto", "Tumaco", "Ipiales", "La Cruz", "Santacruz"];
        }
        if (estadoSel == "Risaralda") {
            arrayCiudades = ["Pereira", "Dos Quebradas", "La Virginia", "Belén de Umbría", "Guática"];
        }
        if (estadoSel == "Quindio") {
            arrayCiudades = ["Armenia", "Calarcá", "Circasia", "Cordoba", "Filandia"];
        }

        /* Venezuela */
        if (estadoSel == "Carabobo") {
            arrayCiudades = ["Valencia", "Naguanagua", "Puerto Cabello", "Tocuyito", "Guacara"]
        }

        if (estadoSel == "Anzoategui") {
            arrayCiudades = ["Barcelona", "Puerto La Cruz", "Anaco", "El Tigre", "Lechería"]
        }

        if (estadoSel == "Zulia") {
            arrayCiudades = ["Maracaibo", "Cabimas", "Ciudad Ojeda", "La Concepción", "Machiques"]
        }

        if (estadoSel == "Apure") {
            arrayCiudades = ["San Fernando", "Guasdualito", "Achaguas", "Bruzual", "Mantecal"]
        }

        if (estadoSel == "Mérida") {
            arrayCiudades = ["Mérida", "El Vigia", "Ejido", "Lagunillas", "Nueva Bolivia"]
        }

        /* USA */
        if (estadoSel == "Florida") {
            arrayCiudades = ["Miami", "Forth Lauderdale", "Boca Ratón", "Tampa", "Orlando"]
        }

        if (estadoSel == "Nevada") {
            arrayCiudades = ["Las Vegas", "Reno", "Carson City", "Henderson", "Sparks"]
        }

        if (estadoSel == "Iowa") {
            arrayCiudades = ["Des Moines", "Iowa City", "Cedar Rapids", "Davenport", "Ames"]
        }

        if (estadoSel == "Kentucky") {
            arrayCiudades = ["Luisville", "Lexington", "Fráncfort", "Paducah", "Hazard"]
        }

        if (estadoSel == "Colorado") {
            arrayCiudades = ["Denver", "Colorado Springs", "Aspen", "Boulder", "Fort Collins"]
        }

        document.getElementById("ciudades").addEventListener("change", () => {
            var ciudades = document.getElementById("ciudades");

            ciudadSel = ciudades.options[ciudades.selectedIndex].text;

            console.log("Ciudad seleccionada es " + ciudadSel);
        })

        var ciudades = document.getElementById("ciudades");
        for (i = 0; i < arrayCiudades.length; i++) {
            ciudades.options[i+1].text = arrayCiudades[i];
        }

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