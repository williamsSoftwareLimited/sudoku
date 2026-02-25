const jatester = {

	outputFn : (msg) => console.log(msg),
	
	setOutputFn : (fn) => {
		this.outputFn = fn;
	},

	fn : {

		compareArrays : (actual, expected) => {
			for(let i = 0; i < actual.length; i++){
				if(actual[i]!==expected[i]) {
					return { index:i, result: false };
				}				
			}
			return { index:0, result: true };
		},

		compare2DArrays: (actual, expected) => {
			for(let i = 0; i < actual.length; i++){

				const compare = jatester.fn.compareArrays( actual[i], expected[i] );

				if(!compare.result){
					return { row: i, col: compare.index, result: false };
				}			
			}
			return { row: 0, col: 0, result: true };
		},
	},

	assert : {

		equals : (actual, expected, msg) => {
			msg = msg || "";
			if(!expected) jatester.outputFn("expected is falsy");
			if(!actual) jatester.outputFn("actual is falsy");

			if (expected === actual) {
				jatester.outputFn(`true, expected ${expected} equals ${actual} ${msg}`);
			} else {
				jatester.outputFn(`false, expected ${expected} not equal to ${actual} ${msg}`);
			}
		},

		compareArrays : (actual, expected, msg) => {
			msg = msg || "";
			if(!expected) jatester.outputFn("expected is falsy");
			if(!actual) jatester.outputFn("actual is falsy");

			const compare = jatester.fn.compareArrays(actual, expected);

			if (!compare.result){
				jatester.outputFn(`false, expected ${expected[compare.index]} not equal to ${actual[compare.index]} at index : ${compare.index} ${msg}`);
			} else {
				jatester.outputFn(`true, expected ${expected} equals ${actual} ${msg}`);
			}
		},

		compare2DArrays : (actual, expected, msg) => {
			msg = msg || "";
			if(!expected) jatester.outputFn("expected is falsy");
			if(!actual) jatester.outputFn("actual is falsy");

			const compare = jatester.fn.compare2DArrays(actual, expected);

			if (!compare.result){
				jatester.outputFn(`false, expected ${expected[compare.row]} not equal to ${actual[compare.row]} at row : ${compare.row}, col : ${compare.col} ${msg}`);
			} else {
				jatester.outputFn(`true, expected equals actual ${msg}`);
			}
		},
	}
}

export const assert = jatester.assert;

