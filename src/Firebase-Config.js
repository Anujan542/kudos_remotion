import {initializeApp} from 'firebase/app';

import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAAeXCp4VADOYAMSZ4EPZXIZqmlLnDtAjc',
	authDomain: 'kudos-529e8.firebaseapp.com',
	projectId: 'kudos-529e8',
	storageBucket: 'kudos-529e8.appspot.com',
	messagingSenderId: '224911380766',
	appId: '1:224911380766:web:5723a3b42adcf9a76f790f',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
