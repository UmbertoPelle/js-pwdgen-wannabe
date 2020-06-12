// Chiedi all’utente il suo nome,poi chiedi il suo cognome,
//poi chiedi il suo colore preferito.

var name= prompt("Per creare una password perfetta inserisci qui il tuo nome :");
var cognome= prompt("Ora il tuo cognome :");
var colorePref= prompt("E in fine il tuo colore preferito:");

var passfinale= name + cognome + colorePref + 19;

//Infine scrivi sulla pagina nomecognomecolorepreferito19

document.getElementById("titolo").innerHTML="Hai generato una PASSWORD INFALLIBILE: "
document.getElementById("passw").innerHTML= passfinale;
