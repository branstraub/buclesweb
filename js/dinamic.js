//Arrays compartidos
var materias = ["Matematica", "Mnemotecnia", "Quimica", "Fisica", "Biologia", "Sistemas", "Filosofia", "Locucion", "Sismografia", "Laboratorio", "Programacion", "Tecnotur"];
var fechas = ["Miércoles 27", "Lunes 25", "Viernes 22", "Jueves 21", "Jueves 24", "Viernes 25"]

//Funciones al iniciar página
BuscarMaterias("");


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
	"<a href='" + materia + ".html'><li class='materia'><h3>" + materia + "</h3><h4>94.05</h4></li></a>"
	)
}

function MostrarFecha(materia){
	var link = "";
	
	if(materia=="matematica"){
		link="dia.html"
	}else if(materia == "filosofia"){
		link='filo23032015.html'
	}
	
	fechas.every(function(date,index){
		$("#materias #timeline ul").append(
		"<a href='" + link + "'><li class='unidate'><p>"+ date +"<br /> de Mayo</p></li></a>"
		);
		if(index == 4){
			return false;
		}else{
		return true;
		}
	});
	SepararFechas();
}

function BuscarMaterias(query){
	//Limpio de materias
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

function getLink(file){
	$.ajax({
	  method: "POST",
	  url: "test.php"
	})
	  .done(function( msg ) {
		console.log(msg);
		loadNewDate('Jueves 28', file)
	  });
}


function loadNewDate(ndate, file){
	var timeline = $("#timeline");
	var dates = $("#timeline ul a li");
	console.log(dates)
	dates.each(function(i){
		console.log($(this).css('right'))
		$(this).animate({right: parseInt($(this).css('right'))+150 + 'px'},{duration:1000, queue:false});
		$("#timeline ul a li:last").animate({opacity:0},{duration:1000, queue:false});
		$("#timeline ul a li:last").animate({opacity:0},{duration:1000, queue:false});
		$("#materias #timeline ul").append(
		"<a href='" + file + ".html'><li style='opacity:0;display:none;' class='unidate'><p>"+ ndate +"<br /> de Mayo</p></li></a>"
		);
		$("#timeline ul a li:last").css('display','block');
		$("#timeline ul a li:last").animate({opacity:1},{duration:1000, queue:false});
	});
	
	//dates.animate({opacity: '0'},"slow");
	
}