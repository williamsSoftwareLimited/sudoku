export default function() {

	function binaryBoard(board){

		for(let r = 0; r < board.length; r++) {

			for(let c = 0; c < board[r].length; c++) {
				console.log(board[r][c]);
			}
		}
		return [];
	}

	return ({
		binaryBoard
	});
}