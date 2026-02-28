export const sudokuService = {

	// the cells with a number will be converted to 2^1, 2^2, ... , 2^9
	// cells with no number will be 0 - they're conversion will happen later
	// they'll be the row, col, sqr xor'd 
	// leaving the binary equivalent of the missing numbers
	binaryBoard : (board) => {
		let binBrd = [];
		for(let r = 0; r < board.length; r++) {
			binBrd[r]=[];
			for(let c = 0; c < board[r].length; c++) {				
				if (board[r][c] === '.'){
					binBrd[r][c] = 0;
				} else {
					const exponent = parseInt(board[r][c]);
					binBrd[r][c] = Math.pow(2, exponent);
				}
			}
		}
		return binBrd;
	},

	// this is expect a binary style board
	// with ZERO for the cells not worked out yet
	// it returns all the rows, cols and sqrs as a tuple
	// they are the init board just added up
	initRowsColsSqrs : (binBrd) => {
		let rows = [];
		let cols = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
		let sqrs = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
		for(let r = 0; r < 9; r++){
			rows[r] = binBrd[r].reduce((acc, a) => acc + a, 0);
			for(let c = 0; c < 9; c++){
				cols[c] += binBrd[r][c];

				const s = Math.floor(c/3) + Math.floor(r/3)*3;
				sqrs[s] += binBrd[r][c];
			}
		}
		return ({rows, cols, sqrs});
	},

	// returns a completed board in binary style
	// each cells is the rest of the binary digits
	// ie if for cell 1,1; rows[1] = 1001100010 (610); cols[1] = 1001001000 (584); sqrs[0] = 1101101000 (872)
	// you have to 'or' these together and subtract from 1022 = 1111111110 (nb 2^0 isn't being used)
	// or'd together gives 1001100010
	//                  or 1001001000
	//                  or 1101101000
	//                     ----------
	//                     1101101010 (874)
	//    			   xor 1111111110 (1022)
	//                     0010010100 (148) or 1022-874=148
	fullBinaryBoard : (board) => {
		const binaryBoard = sudokuService.binaryBoard(board);
		const rowsColsSqrs = sudokuService.initRowsColsSqrs(binaryBoard);
		let changeCount = 0;

		for(let r = 0; r < 9; r++){

			for(let c = 0; c < 9; c++){
				if (binaryBoard[r][c] === 0){ // this may have to be changed to a function that also looks for singles ie 2,4,8,16,...

					const s = Math.floor(c/3) + Math.floor(r/3)*3;
					const ordNos = rowsColsSqrs.rows[r] | rowsColsSqrs.cols[c] | rowsColsSqrs.sqrs[s];
					binaryBoard[r][c] = 1022 - ordNos;
					changeCount++;
				}
			}
		}
		return { binaryBoard, changeCount };
	}


}



