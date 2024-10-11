import { db } from "../firebase/firebaseConfig"
import { collection, query, where, getDocs } from "firebase/firestore";

async function getFoodLogs() {
    try {
        const mealLogsCollection = collection(db, 'mealLogs')
        const mealLogSnapshot = await getDocs(mealLogsCollection)
        const mealsList = mealLogSnapshot.docs.map((doc) => {
          doc.data();
          console.log(mealsList);
        });
    } catch (err) {
        console.error({error: err})
    }
}

export { getFoodLogs }