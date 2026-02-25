const jatester = {

	outputFn : (msg) => console.log(msg),
	setOutputFn : (fn) => {
		this.outputFn = fn;
	},

	assert : {

		equals : (actual, expected, msg) => {
			msg = msg || "";
			if(!expected) jatester.outputFn("expected is falsy");
			if(!actual) jatester.outputFn("actual is falsy");

			if (expected === actual) {
				jatester.outputFn(`expected ${expected} equals `);
			}
		}
	}
}

export const assert = jatester.assert;