class ValidationUtil {
	/**
   * Returns error message if the input is empty.
   *
   * @param args value of the Input field .
   */
	isFieldEmpty (args) {
		return !args;
	}

	/**
   * Returns true if the max limit to add a choise is reached.
   *
   * @param list the actual choise list.
   * @param maxLimit the maximum number of choices that can be added.
   */
	hasReachedMaxLimit (list, maxLimit) {
		return list && list.length === maxLimit;
	}

	/**
   * Returns true if the choice being added already exists.
   *
   * @param choices list of choices.
   * @param choice actual choice that needs to be added.
   */
	ifExists (choices, choice) {
		return choices.some(item => item.name === choice);
	}
}

// TODO atleast one choice required validation
export default new ValidationUtil();
