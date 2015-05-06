//Arrays compartidos
var materias = ["Matematica", "Mnemotecnia", "Quimica", "Fisica", "Biologia", "Sistemas", "Filosofia", "Locucion", "Sismografia", "Laboratorio", "Programacion"];
var fechas = ["Lunes 21", "Viernes 18", "Jueves 17", "Miercoles 23"]

//Funciones al iniciar página
MostrarFecha();
BuscarMaterias("");
SepararFechas();

//Buscador de materias
$("#search").on('input', function() {
	var query = $(this).val().toLowerCase();
	BuscarMaterias(query);
});

//Buscador de fechas
$("#search.date").on('input', function(){
	var timeline = $("#timeline");
	var icono = $("#searchcont i");
	
 	if($(this).val() == ""){
		timeline.animate({width: '800px'},"slow");
		icono.removeClass('fa-spinner').removeClass('fa-spin').addClass('fa-search');
		$("#timeline ul li:last").animate({opacity: '0'},"slow");
		setTimeout(function(){
			$("#timeline ul li:last").remove();
		},500);
	}else if(icono.hasClass('fa-search')){
		icono.removeClass('fa-search').addClass('fa-spinner').addClass('fa-spin');
		$("#timeline ul").append(
		"<a href='dia.html'><li class='unidate special'><p>Lunes 12<br /> de Marzo</p></li></a>"
		);
		$("#timeline ul li:last").css('opacity','0');
		SepararFechas();
		timeline.delay(1200).animate({width: '900px'},"slow");
		$("#timeline ul li:last").delay(1300).animate({opacity: '1'},"slow");
	}
});

function MostrarMateria(materia){
	$("#materias ul.materia").append(
	"<a href='materia.html'><li class='materia'><h3>" + materia + "</h3><h4>94.05</h4></li></a>"
	)
}

function MostrarFecha(){
	fechas.every(function(date,index){
		$("#materias #timeline ul").append(
		"<a href='dia.html'><li class='unidate'><p>"+ date +"<br /> de Marzo</p></li></a>"
		);
		if(index == 2){
			return false;
		}else{
		return true;
		}
	});
}

function BuscarMaterias(query){

	//Recorrer el listado de materias
	materias.forEach(function(i){
		
		//Y fijarse si alguna coincide con lo que se busca
		if (i.toLowerCase().match(new RegExp("^" + query))){
			
			//Si coincide, se muestra.
			MostrarMateria(i);
		}
	});
}

function ExisteFecha(query){
	$("#materias ul.materia").html("");
	
	//Recorrer el listado de materias
	fechas.forEach(function(i){
		
		//Y fijarse si alguna coincide con lo que se busca
		if (i.toLowerCase().match(new RegExp(query))){
			console.log(i)
			console.log(query)
			return i;
		}
	});
}

function SepararFechas(){
	$("#timeline ul li.unidate").each(function (i){
		$(this).css('right',(i*150)+'px');
	})
}