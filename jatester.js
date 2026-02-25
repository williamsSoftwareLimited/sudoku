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
		}
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

			const {i, compare} = jatester.fn.compareArrays(actual, expected);

			if (compare){
				jatester.outputFn(`false, expected ${expected[i]} not equal to ${actual[i]} at index : ${i} ${msg}`);
			} else {
				jatester.outputFn(`true, expected ${expected} equals ${actual} ${msg}`);
			}
		},

		compare2DArrays : (actual, expected, msg) => {
			msg = msg || "";
			if(!expected) jatester.outputFn("expected is falsy");
			if(!actual) jatester.outputFn("actual is falsy");

			const {i, compare} = jatester.fn.compareArrays(actual, expected);

			if (compare){
				jatester.outputFn(`false, expected ${expected[i]} not equal to ${actual[i]} at index : ${i} ${msg}`);
			} else {
				jatester.outputFn(`true, expected ${expected} equals ${actual} ${msg}`);
			}
		},
	}
}

export const assert = jatester.assert;

