var  alumnos=[],j, dos="",uno="", i=0,div,tabla,tbody,ttitulo,textitulo=0,hilera,celda  ,texto,anombre,cnombre,asisnombre,datos={};
function guardar()
{
  var person={};
  person.nombre=document.getElementById("name").value;
  person.calificacion=document.getElementById("calificacion").value;
  person.asistencia=document.getElementById("asistencias").value;
  alumnos.push(person);
  uno=JSON.stringify(alumnos);
  dos+="Alumno: "+alumnos[i].nombre+"<br>Calificacion: "+alumnos[i].calificacion+"<br>inasistencias: "+alumnos[i].asistencia+"<br>";
  i++;

}
function imprimir()
{
  datos=JSON.stringify(alumnos);
  div=document.getElementById("tablon");
  tabla=document.createElement("table");
  tbody=document.createElement("tbody");

  for ( j in alumnos)
  {
    hilera=document.createElement("tr");
    console.log(textitulo);
    for (var a=0;a<3;a++)
    {

      celda=document.createElement("td");
      celda.setAttribute("id","celda");
      //dentro de la tr crear una td de nombre una de calificacion y una de asistencias
      if(a==0)
      {
      texto=document.createTextNode(alumnos[j].nombre);
      }
      if (a==1) {
        texto=document.createTextNode(alumnos [j].calificacion);

      }
      if (a==2) {
          texto=document.createTextNode(alumnos[j].asistencia);
      }
      // ttitulo.appendChild(textitulo);

      celda.appendChild(texto);
      hilera.appendChild(celda);
    }

      // ttitulo=document.createElement("th");
      // if (j<3) {
      //     textitulo=Object.keys(alumnos[j])[j] ;
      // }else {
      //
      // }

      // textitulo=document.getElementsByTagName("th").innerHTML+=j;
      // textitulo.innerHTML +=j ;
       // ttitulo.innerHTML=textitulo;

    // tabla.appendChild(ttitulo);

    tbody.appendChild(hilera);

  }

  tabla.appendChild(tbody);
  div.appendChild(tabla);
  console.log(alumnos);
  console.log(Object.keys(alumnos).length);
  document.getElementById("reporte").innerHTML=dos;
}
