import {db} from '/firebase';

import { collection, doc, updateDoc, query, getDocs, onSnapshot} from 'firebase/firestore';

onSnapshot(collection(db, "descripcion renta"), function(querySnapshot){
  let casas = document.getElementsByClassName('cont-casas');
  casas.innerHTML = '';
  querySnapshot.forEach((doc) => {
    let casa = doc.data()
      casas.innerHTML += ``;
  });
});

