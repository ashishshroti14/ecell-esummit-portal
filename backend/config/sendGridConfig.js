const api_key_array = [
	
];

// info@esummitiitm.org
const PREMIUM_API_KEY = "";

// The generator function
function* getApiKeys(limit) {
	let num = 0;

	while (true) {
		if (num === limit) return api_key_array[limit - 1];
		yield api_key_array[num++];
	}
}

const limit = api_key_array.length;
let apiKeys = getApiKeys(limit);

const configSendGrid = () => {
	const sgMail = require("@sendgrid/mail");
	sgMail.setApiKey(api_key_array[7]);
	return sgMail;
};

module.exports = { configSendGrid, apiKeys, api_key_array };
