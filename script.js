import {db} from './firebase';

import { collection, query, getDocs} from 'firebase/firestore';

const conn = query(collection(db, 'descripcion casas'));

const querySnapshot = await getDocs(conn);

const contCasas = document.getElementById('contCasas');

querySnapshot.forEach((doc) => {
  const casas = doc.data();

contCasas.innerHTML += `

<div class="flex justify-between lg:justify-around p-2 mb-4  bg-gray-100">
      <img class="w-1/2 rounded-md cursor-pointer" src="${casas.img}" alt="">

      <div class="flex flex-col justify-center gap-2 lg:gap-4">
        <p class="text-xl font-bold xl:text-3xl">${casas.precio}/mes</p>
        <div class="flex gap-2">
          <svg class="w-6 lg:w-7 hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="DodgerBlue"
            viewBox="0 0 16 16">
            <path d="M3.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-9Z" />
            <path
              d="M3 3a1 1 0 0 0-1 1v1.293L.293 7A1 1 0 0 0 0 7.707V12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7.707A1 1 0 0 0 15.707 7L14 5.293V4a1 1 0 0 0-1-1H3Zm0 1h10v1.293a1 1 0 0 0 .293.707L15 7.707V12H1V7.707L2.707 6A1 1 0 0 0 3 5.293V4Z" />
          </svg>
          <p class="text-sm lg:text-lg">${casas.camas} Camas</p>
        </div>
        <div class="flex gap-2">
          <svg class="w-6 lg:w-7 hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="DodgerBlue"
            viewBox="0 0 16 16">
            <path d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2zm1 13h8V2H4v13z" />
            <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0z" />
          </svg>
          <p class="text-sm lg:text-lg">${casas.banios} Baños</p>
        </div>
        <span class="w-full h-auto border-t-2 border-gray-300 rounded-lg"></span>
        <p class="text-sm lg:text-lg">${casas.direc}</p>
        <P class="text-sm lg:text-lg">${casas.depart}</P>
      </div>
    </div>

`
});