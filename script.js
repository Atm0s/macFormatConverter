const macNode = document.querySelector('.mac');
const resultNode = document.querySelector('.result');
let range = new Range();

let mac = prompt("Enter MAC in any format:");
// let mac = '70:4f:57:90:da:d3';
mac = mac.toLowerCase().split('').filter(x => x != ':' && x != '-' && x != '.').join('').match(/.{1,2}/g).join(':')
url = 'https://api.macaddress.io/v1?apiKey=at_GPMaRj94JKmEO70f6xNfpdoYU5bvv&output=json&search=' + mac
async function getData() {
	const res = await fetch(url);
	const data = await res.json();
	// alert(`Your mac is: \n${mac}\n ${data.vendorDetails.companyName}`);
	// console.log(data);
	macNode.innerHTML = mac;
	resultNode.innerHTML = data.vendorDetails.companyName;

	document.getSelection().selectAllChildren(macNode)
	// document.execCommand("copy");
	// macNode.innerHTML.select();
}
getData();
