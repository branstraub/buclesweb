var materias = ["Matematica", "Mnemotecnia", "Quimica", "Fisica", "Biologia", "Sistemas", "Filosofia", "Locucion", "Sismografia", "Laboratorio", "Programacion"];
var fechas = ["Lunes 21/3", "Viernes 18/3", "Jueves 17/3"]
BuscarMaterias("");
SepararFechas();

//Buscador de materias
$("#search").on('input', function() {
	var query = $(this).val().toLowerCase();
	BuscarMaterias(query);
});

function MostrarMateria(materia){
	$("#materias ul.materia").append(
	"<a href='materia.html'><li class='materia'><h3>" + materia + "</h3><h4>94.05</h4></li></a>"
	)
}

function MostrarFecha(){
}

function BuscarMaterias(query){
	$("#materias ul.materia").html("");
	
	//Recorrer el listado de materias
	materias.forEach(function(i){
		
		//Y fijarse si alguna coincide con lo que se busca
		if (i.toLowerCase().match(new RegExp("^" + query))){
			
			//Si coincide, se muestra.
			MostrarMateria(i);
		}
	});
}

function SepararFechas(){
	$("#timeline ul li.unidate").each(function (i){
		$(this).css('right',(i*150)+'px');
	})
}