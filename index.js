const admin = require('firebase-admin');
const serviceAccount = require('./goodbank-5ffef-firebase-adminsdk-kkr59-24c426125c.json');
admin.initializeApp({
	credential:admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

db.collection("sampleData").doc("inspiration").set({
    quote: "I love Los Angeles",
    author: "abel sanchez"
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});

function getQuote(){
	db.collection("sampleData").get().then((querySnapshot)=> {
    querySnapshot.forEach((doc)=> {
        console.log('docId = ' + doc.id + ' doc data ='+ 
        		JSON.stringify(doc.data()));
    });
});
}
getQuote();
/*
getQuote().then(result=>{
	console.log(result.body);
	const obj = JSON.parse(result.body);
	const quoteData = {
		quote: obj.quote,
		author: obj.author
	};
	return db.collection('sampleData').doc('inspiration')
	.set(quoteData).then(()=>{
		console.log('new quote written to db');
	});
});

*/

