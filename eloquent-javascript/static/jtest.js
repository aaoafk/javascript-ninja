export const $ = ({
		assert (output, expectedOutput) {
				// is fnc evaluated before its passed in ?
				if (output === expectedOutput) {
						console.log("Test passed!")
						return true;
				}
				throw new Error(`Output: ${output} but expected output: ${expectedOutput}`);
		}
});
