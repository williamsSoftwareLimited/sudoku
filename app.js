import { sudokuService as service } from './service.js';
import { assert } from './jatester.js';
import { goodBoard, badboard, goodBinBrd, addedGoodBrdRows, addedGoodBrdCols, addedGoodBrdSqrs } from './boards.js';
import { completeGoodBoard } from './boards.js';

console.log("lets go...");


assert.compare2DArrays(service.binaryBoard(goodBoard), goodBinBrd);

const addRowsColsSqrs = service.initRowsColsSqrs(goodBinBrd);

assert.compareArrays(addRowsColsSqrs.rows, addedGoodBrdRows);
assert.compareArrays(addRowsColsSqrs.cols, addedGoodBrdCols);
assert.compareArrays(addRowsColsSqrs.sqrs, addedGoodBrdSqrs);

const { binaryBoard, changeCount } = service.fullBinaryBoard(goodBoard);

assert.compare2DArrays(binaryBoard, completeGoodBoard, ' - complete board test');

console.log(changeCount);

