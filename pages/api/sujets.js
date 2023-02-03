import {db} from "../../firebase"
import { onValue,ref } from 'firebase/database';
import firebase from 'firebase/app'
export default function handler(req, res) {
    onValue(ref(db), (snapshot) => {
        res.status(200).json(snapshot.val())
    })
};

