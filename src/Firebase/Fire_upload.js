const admin = require('firebase-admin');
const serviceAccount = require("./key_service_account.json");
const data = require("./fire.json");
const collectionKey = "sneakers-shop";

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const firestore = admin.firestore();
const settings = {timestampsInSnapshots : true};
firestore.settings(settings);
if(data && (typeof data == "object")) {
    Object.keys(data).forEach(doc =>{
        firestore.collection(collectionKey).doc().set(data[doc]).then((res) =>{
            console.log("Document" + doc + "succesfully written!");
        }).catch((error) => {
            console.error("Error writting document: ", error);
        });
    });
};
