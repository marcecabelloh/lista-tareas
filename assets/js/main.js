

var arreglo = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  },
  ];



function listaTarea(){

	var tareas = document.getElementById("lista"); //llamo al id de mi lista vacía en <ul> dentro del HTML
	arreglo.forEach(function(elementos){ // arreglo es mi variable donde contengo el arreglo de objetos y le aplico forEach para que itere
		tareas.innerHTML += '<li>' + elementos.title + '</li>';// mi variable tareas contiene la lista <ul> vacía y quiero que con innerHTML
																	//imprima  <li> los title presentes en mi arreglo de objetos.
	})
}
listaTarea(); //llamando a mi función

function ingresarTarea(){
	var tareas = document.getElementById("lista"); 
	var ingresar= document.getElementById("tareaInput").value;
		tareas.innerHTML += '<li>' + ingresar + '</li>';

}

ingresarTarea();






