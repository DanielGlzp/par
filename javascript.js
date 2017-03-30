var boton = document.getElementById('btn'),
		contenedor = document.getElementById('for'),
		contenedor2 = document.getElementById('contenedor2'),
		contenedor3 = document.getElementById('contenedor3'),
		boton2 = document.getElementById('btn_2'),
		boton3 = document.getElementById('btn_3');



	var par_for = function () {

		for (var i = 0; i < 100; i++) {
			if (i % 2 == 0) {

			}
		else {
			i++;
			contenedor.appendChild(document.createTextNode(i + " "));
		}
		}
	}

	var par_dowhile = function () {
		var par = 0

		do {

			par++;
			if (par % 2 == 0) {
				contenedor2.appendChild(document.createTextNode(par + ' '));

			}

		}

		while(par<100)
	}

	var par_while = function () {

		var i = 0;

		while(i < 100) {
			i++;
			if (i % 2 == 0) {
				contenedor3.appendChild(document.createTextNode(i + " "));
			}
		}
	}

	boton.addEventListener("click", par_for);
	boton2.addEventListener("click", par_dowhile);
	boton3.addEventListener('click', par_while);
