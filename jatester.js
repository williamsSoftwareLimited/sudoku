export default function jatester(board){
	let innerBrd = [...board]; // don't damage the board

	function test(func){
		const newBoard = func(innerBrd);
		console.log(newBoard || 'nothing returned');
		innerBrd = newBoard;
	}
	return({
		test
	})
}