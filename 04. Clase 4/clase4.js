window.onload = function () {

    document.getElementById("paises").addEventListener("change", function () {
        var paises = document.getElementById("paises");

        var seleccionado = paises.options[paises.selectedIndex].text;

        /* document.body.style.background = 'url("https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg")'; */


        /* alert(seleccionado); */

        getEstados(seleccionado);

        /* getCiudades(seleccionado); */

        getBandera(seleccionado)

        verificarCedula()
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
            estados.options[i + 1].text = arrayEstados[i];
    }

    document.getElementById("estados").addEventListener("change", () => {
        var estados = document.getElementById("estados");

        var estadoSel = estados.options[estados.selectedIndex].text;

        console.log("el estado seleccionado es " + estadoSel)

        getCiudades(estadoSel);
    })

    function getCiudades(estadoSel) {
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
            ciudades.options[i + 1].text = arrayCiudades[i];
        }

    }

    function getBandera(seleccionado) {
        var bandera = document.getElementById("bandera");
        if (seleccionado == "Colombia") {
            src = 'https://i.pinimg.com/564x/61/eb/62/61eb62d2f8c8698189225b2b6412ba31.jpg'
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

    document.getElementById("terms").addEventListener("change", e => {
        if (e.target.checked) {
            console.log("Términos aceptados")
        } else {
            console.log("Términos no aceptados")
        }
    })

    function verificarCedula() {
        var cedula = document.getElementById("cedula").value
        var verificacionCedula = document.getElementById("verificacionCedula");
        var expreNum = /^[0-9]{5,10}$/
        var expreLetras = /[a-z]/

        if (cedula.length == 0) {
            verificacionCedula.innerHTML = "El campo no puede estar vacio"
        } else {
            if (expreNum.test(cedula)) {
                verificacionCedula.innerHTML = ""
                console.log("el numero de la cedula es " + cedula)
            } else {
                verificacionCedula.innerHTML = "El campo debe contener numeros minimo 5 máximo 10"
            }
            if (expreLetras.test(cedula)) {
                verificacionCedula.innerHTML = ""
                verificacionCedula.innerHTML = "El campo no puede contener letras"
            }
        }
    }

    document.getElementById("submit1").addEventListener("click", () => {
        verificarCedula()
    })

    /* document.getElementById("submit").addEventListener("click", () => {
        var cedula = document.getElementById("cedula").value;

        if (cedula.length == 0) {
            var verificacionCedula = document.getElementById("verificacionCedula");
            verificacionCedula.innerHTML = "El campo no puede estar vacio"
            // alert("El campo no puede ir vacío");
        }
        else {
            // verificacionCedula.innerHTML = "" 
            console.log("El valor de la cedula es " + cedula);
        }
    }) */

    function verificarCelular() {
        var celular = document.getElementById("celular").value
        var verificacionCelular = document.getElementById("verificacionCelular");
        var expreNum = /^[0-9]{10}$/
        var expreLetras = /[a-z]/

        if (celular.length == 0) {
            verificacionCelular.innerHTML = "El campo no puede estar vacio"
        } else {
            if (expreNum.test(celular)) {
                verificacionCelular.innerHTML = ""
                console.log("el numero de la celular es " + celular)
            } else {
                verificacionCelular.innerHTML = "El campo debe contener 10 números"
            }
            if (expreLetras.test(celular)) {
                verificacionCelular.innerHTML = ""
                verificacionCelular.innerHTML = "El campo no puede contener letras"
            }
        }
    }

    document.getElementById("submit2").addEventListener("click", () => {
        verificarCelular()
    })

    /* document.getElementById("submit2").addEventListener("click", () => {
        var celular = document.getElementById("celular").value
        var expression = /^[0-9]{3,5}$/  // Expresión regular que toma solo numeros y minimo 3 maximo 5
        var letras = /[a-z]/

        if (expression.test(celular)) {
            alert("El celular es " + celular)
        } if (celular == "") {
            alert("Ingrese valores al campo")
        } if (letras.test(celular)) {
            alert("ingrese valores numéricos")
        }
    }) */


}