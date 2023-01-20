import {db} from "../../../Firebase"
import { onValue,ref } from 'firebase/database';
import firebase from 'firebase/app'

export default (req, res) => {
    const { id } = req.query;
    onValue(ref(db), (snapshot) => {
        const grade = snapshot.val().find(grade => grade.name == id);
        res.status(200).json(grade)

    })
};