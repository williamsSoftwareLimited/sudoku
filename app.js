import { sudokuService as service } from './service.js';
import { assert } from './jatester.js';
import { goodBoard, badboard, goodBinBrd, addedGoodBrdRows, addedGoodBrdCols, addedGoodBrdSqrs } from './boards.js';

console.log("lets go...");


assert.compare2DArrays(service.binaryBoard(goodBoard), goodBinBrd);

const addRowsColsSqrs = service.initRowsColsSqrs(goodBinBrd);

assert.compareArrays(addRowsColsSqrs.rows, addedGoodBrdRows);
assert.compareArrays(addRowsColsSqrs.cols, addedGoodBrdCols);
assert.compareArrays(addRowsColsSqrs.sqrs, addedGoodBrdSqrs);

