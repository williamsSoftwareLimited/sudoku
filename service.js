
// testFn this is a complex function that tests various components
export const service = {

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
	}
}