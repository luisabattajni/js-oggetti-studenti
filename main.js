//Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.

let studente = {
    nome: 'Mario',
    cognome: 'Rossi',
    eta: 12,
  };
//Stampare in console attraverso un ciclo for-in tutte le proprietà dell’oggetto.
console.log("Stampo le proprietà");
for(let key in studente){
    console.log(key);
    console.log(studente[key]);
}
//Creare un array di oggetti di studenti.
let studenti = [
    {
      nome: 'Nome#1',
      cognome: 'Cognome#1',
      eta: 13,
    },
    {
        nome: 'Nome#2',
        cognome: 'Cognome#2',
        eta: 14,
    },
    {
        nome: 'Nome#3',
        cognome: 'Cognome#3',
        eta: 15,
    },
  ];
  

//Ciclare su tutti gli studenti e stampare, per ognuno di essi, nome e cognome.
console.log("Stampo nome e cognome");
for (let i = 0; i < studenti.length; i++) {
    let studenteCorrente = studenti[i];
    // proprietà
    // console.log('nome: ' + studenteCorrente.nome);
    // console.log('cognome: ' + studenteCorrente.cognome);
    console.log(studenteCorrente.nome);
    console.log(studenteCorrente.cognome);
  }
//Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

let nomeStudente = prompt('Inserisci il nome dello studente');
let cognomeStudente = prompt('Inserisci il cognome dello studente');
let etaStudente = prompt('Inserisci gli anni dello studente');
//Aggiungere il nuovo studente all’array di studenti
studenti.push({
    nome: nomeStudente,
    cognome: cognomeStudente,
    eta: etaStudente,
  });

//Ciclare su tutti gli studenti e stampare per ognuno di essi tutte le proprietà
console.log("Stampo tutte le proprietà");
for (let i = 0; i < studenti.length; i++) {
    let studenteCorrente = studenti[i];
    // proprietà
    console.log('nome: ' + studenteCorrente.nome);
    console.log('cognome: ' + studenteCorrente.cognome);
    console.log('età: ' + studenteCorrente.eta);

  }







