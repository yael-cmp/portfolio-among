/*
to use this you need to pass it in the use effect hook
in react
this needs
    an array of words
    speed of characthers
    speed of words
    if it stops(if stops this will only print the first word in the array) 
    and the query (the class name or the object you will modify)
*/
export default function TypeWriter({
  words = [""],
  SpeedSchrtr = 300,
  SpeedWord = 3000,
  stop = false,
  query = false,
}) {
  let texts = words;
  let count = 0; //indice en el array
  let index = 0; //indice en la palabra
  let currentText = ""; //que palabra se esta typewriteando
  let letter = ""; //resultado en el momento
  type();
  function type() {
    //this function will be ejected the whole time
    if (count === texts.length) {
      count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    //this only will work if you've pass an query on the parameters

    if (query ) {
      document.querySelector(query).textContent = letter;
    }
    //recursividad
    if (letter.length === texts[count].length && stop === false) {
      //si termino con la palbra actual...
      count++; // reinicia el contador de palabras
      index = 0;
      setTimeout(type, SpeedWord); //y vuelve a empezar con un pequeño delay
      // y reincicia el contador de letras
    } else {
      //si no ha terminado con la palabra simplemente vuelve a empezar :)
      setTimeout(type, SpeedSchrtr);
    }
  }
}
