import { expect } from 'chai';

import Vector from './../src/lib/__lib_vector';

describe('Vector', () => {
	let vector = null;

	afterEach(function(done) {
		vector = null;
		done();
	});

	it('should create a vector object', () => {
		vector = new Vector([3, 1]);
		expect(vector).to.exist;
		expect(vector).to.be.an('object');
	});

	it('should add a vector and return a new vector object', () => {
		vector = new Vector([8.218, -9.341]);
		let resultant = vector.add([-1.129, 2.111]);
		expect(resultant).to.be.an('object');
		expect(resultant.coordinates[0].toFixed(3)).to.equal((7.089).toFixed(3));
		expect(resultant.coordinates[1].toFixed(3)).to.equal((-7.230).toFixed(3));
	});

	it('should subtract a vector and return a new vector object', () => {
		vector = new Vector([7.119, 8.215]);
		let resultant = vector.subtract([-8.223, 0.878]);
		expect(resultant).to.be.an('object');
		expect(resultant.coordinates[0].toFixed(3)).to.equal((15.342).toFixed(3));
		expect(resultant.coordinates[1].toFixed(3)).to.equal((7.337).toFixed(3));
	});

	// it('should scale a vector and return a new vector object', () => {
	// 	vector = new Vector([1.671, -1.012, -0.318]);
	// 	let resultant = vector.scale(vector.coordinates, 7.41);
	// 	expect(resultant).to.be.an('object');
	// 	expect(resultant.coordinates[0].toFixed(3)).to.equal((12.382).toFixed(3));
	// 	expect(resultant.coordinates[1].toFixed(3)).to.equal((-7.499).toFixed(3));
	// 	expect(resultant.coordinates[2].toFixed(3)).to.equal((-2.356).toFixed(3));
	// });

	// it('should return the magnitude of a vector', () => {
	// 	vector = new Vector([8.813, -1.331, -6.247]);
	// 	let magnitude = vector.magnitude(vector.coordinates);
	// 	expect(magnitude.toFixed(3)).to.equal((10.884).toFixed(3));
	// });

	// it('should normalise a vector and return a new vector object', () => {
	// 	vector = new Vector([1.996, 3.108, -4.554]);
	// 	let resultant = vector.normalised(vector.coordinates, 7.41);
	// 	expect(resultant).to.be.an('object');
	// 	expect(resultant.coordinates[0].toFixed(3)).to.equal((0.340).toFixed(3));
	// 	expect(resultant.coordinates[1].toFixed(3)).to.equal((0.530).toFixed(3));
	// 	expect(resultant.coordinates[2].toFixed(3)).to.equal((-0.777).toFixed(3));
	// });

	// it('should multiply the inner product of two vectors', () => {
	// 	vector = new Vector([-5.955, -4.904, -1.874]);
	// 	let resultant = vector.dot_product([-4.496, -8.755, 7.103]);
	// 	expect(resultant.toFixed(3)).to.equal((56.397).toFixed(3));
	// });

	// it('should determine the angle between two vectors in rads', () => {
	// 	/*vector = new Vector([7.35, 0.221, 5.188]);
	// 	let resultant = vector.angle([2.751, 8.259, 3.985], true)
	// 	expect(resultant.toFixed(3)).to.equal((56.397).toFixed(3));*/

	// 	vector = new Vector([3.183, -7.627]);
	// 	let resultant = vector.angle([-2.668, 5.319]);
	// 	expect(resultant.toFixed(3)).to.equal((3.072).toFixed(3));
	// });

	// it('should determine the angle between two vectors in degrees', () => {
	// 	vector = new Vector([7.35, 0.221, 5.188]);
	// 	let resultant = vector.angle([2.751, 8.259, 3.985], true);
	// 	expect(resultant.toFixed(3)).to.equal((60.276).toFixed(3));
	// });

	// it('should determine if two vectors are parallel', () => {
	// 	vector = new Vector([-7.579, -7.88]);
	// 	let isParallel = vector.isParallel_to([22.737, 23.64]);
	// 	expect(isParallel).to.equal(true);
	// });

	// it('should determine if two vectors are not parallel', () => {
	// 	vector = new Vector([-2.029, 9.97, 4.172]);
	// 	let isParallel = vector.isParallel_to([-9.231, -6.639, -7.245]);
	// 	expect(isParallel).to.equal(false);
	// });

	/*it('should determine if two vectors are not parallel', () => {
		vector = new Vector([2.118, 4.823]);
		let isParallel = vector.isParallel_to([0, 0])
		expect(isParallel).to.equal(true);
	});*/
});
