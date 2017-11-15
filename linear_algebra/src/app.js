import 'babel-polyfill';
import Vector from './lib/__lib_vector';

let vector = new Vector([1, 3]);
console.log(vector);
console.log(vector.coodinates);

vector = new Vector([8.218, -9.341]);
console.log(vector.add([-1.129, 2.111]));
