/** POLL - Format for new Polls */
export type newQuestionFormat = {
	question: string;
	isMultipleChoice: boolean;
	answerOptions: string[];
};
