import { service } from './service.js';
import { assert } from './jatester.js';
import { goodBoard, badboard } from './boards.js';

console.log("lets go...");


//let outFn = console.log;
//assert(outFn);

assert.equals("a","a");
assert.equals("a","z");

let a = ["5","3",".",".","7",".",".",".","."];
let b = ["5","3",".",".","7","8",".",".","."];
let c = ["5","3",".",".","7",".",".",".","."];
assert.compareArrays(a, b);
assert.compareArrays(a, c);


