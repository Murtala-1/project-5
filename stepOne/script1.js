let theBeginning = ['My hat', 'The dog', 'My little sister', 'The dog', 'Be a good person'];
let theMiddle = ['is', 'ran', 'ran', 'eats', 'don\'t waste your time'];
let theEnd = ['on the table', 'around the tree', 'away last night', 'the bone', 'to prove it']

const getWord = () =>{
	const randomBeginning = Math.floor(Math.random() * (theBeginning.length));
	const randomMiddle = Math.floor(Math.random() * (theMiddle.length));
	const randomEnd = Math.floor(Math.random() * (theEnd.length));
	console.log(`"${theBeginning[randomBeginning]} ${theMiddle[randomMiddle]} ${theEnd[randomEnd]}"`);
	document.getElementById("text").innerHTML = `"${theBeginning[randomBeginning]} ${theMiddle[randomMiddle]} ${theEnd[randomEnd]}"`;
}

