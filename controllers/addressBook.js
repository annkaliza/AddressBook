const addressBookModel = require("../model/addressBook");

module.exports = class {
	static async allAddresses(req, res) {
		const data = await addressBookModel.getAddresses();

		return res.json(data);
	}
	static async addaddress(req, res) {
		const data = req.body;
		// console.log(data);

		let person = {
			first: data.first == undefined ? "" : data.first,
			last: data.last == undefined ? "" : data.last,
			phone: data.phone == undefined ? "" : data.phone
		};
		let address = {
			street: data.street == undefined ? "" : data.street,
			city: data.city == undefined ? "" : data.city,
			province: data.pprovince == undefined ? "" : data.province,
			country: data.country == undefined ? "" : data.country,
			postal: data.postal == undefined ? "" : data.postal
		};
		const result = addressBookModel.addAddress(person, address);

		//console.log(person);
		// return res.json({});
		return res.json(result);
	}
};
