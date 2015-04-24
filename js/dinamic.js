
//***********************************//
//****** BUSCADOR DE MATERIAS *******//
//***********************************//

//Al escribir en el buscador
$("#search").on('input', function() {
	var match = $(this).val().toLowerCase();
	var materias = ["Matematica", "Mnemotecnia", "Quimica", "Fisica", "Biologia", "Sistemas", "Filosofia"];
	$("#materias ul.materia").html("");
	
	//Recorrer el listado de materias
	materias.forEach(function(i){
		
		//Y fijarse si alguna coincide con lo que se busca
		if (i.toLowerCase().match(new RegExp("^" + match))){
			
			//Si coincide, se muestra.
			MostrarMateria(i);
		}
	});
});

function MostrarMateria(materia){
	$("#materias ul.materia").append(
	"<a href='materia.html'><li class='materia'><h3>"+ materia +"</h3><h4>94.05</h4></li></a>"
	)
}