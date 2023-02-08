const searchInput = document.querySelector('.search-field');
const searchBtn = document.querySelector('.search-button');
const macNode = document.querySelector('.mac');
const macVendor = document.querySelector('.mac-ven');

async function getData() {
	const res = await fetch(url);
	const data = await res.json();
	macVendor.innerHTML = data.vendorDetails.companyName;
}

searchBtn.addEventListener('click', () => {
	let mac = searchInput.value
		.toLowerCase()
		.split('')
		.filter(x => x != ':' && x != '-' && x != '.' && x != ' ')
		.join('')
		.match(/.{1,2}/g)
		.join(':');
	macNode.innerHTML = mac;
	url = 'https://api.macaddress.io/v1?apiKey=at_GPMaRj94JKmEO70f6xNfpdoYU5bvv&output=json&search=' + mac;
	console.log(mac)
	getData();
	searchInput.value = '';
	document.getSelection().selectAllChildren(macNode)
})

searchInput.addEventListener("keyup", (event) => {
	event.preventDefault();
	if (event.keyCode === 13) {
		searchBtn.click();
	}
})