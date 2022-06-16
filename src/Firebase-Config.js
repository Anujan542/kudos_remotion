import {initializeApp} from 'firebase/app';

import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyC44G46FPIkKA2WImt_JEwAln-iwDTTxck',
	authDomain: 'remotion-kudos.firebaseapp.com',
	projectId: 'remotion-kudos',
	storageBucket: 'remotion-kudos.appspot.com',
	messagingSenderId: '898035089400',
	appId: '1:898035089400:web:eca407317f2037146e200d',
	measurementId: 'G-PNXNDE2JSB',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
