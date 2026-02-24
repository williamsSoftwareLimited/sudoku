import service from './service.js';
import jatester from './jatester.js';
import { goodBoard, badboard } from './boards.js';

console.log("lets go...");


let debugFn;// = console.log;
const testFn = jatester(goodBoard);

const sudoku = service(testFn);

