export default class Vector {
	constructor (coordinates) {
		this.coordinates = coordinates;
	}

	add (v) {
		return new Vector(this.coordinates.map( (x, i) => x + v[i]));
	}

	subtract (v) {
		return new Vector(this.coordinates.map( (x, i) => x - v[i]));
	}

	magnitude () {

	}

	scale () {

	}

	dot_product () {

	}


}
