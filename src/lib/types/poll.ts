/** POLL - Enum for poll Type */
export type PollType = 'vote' | 'approval' | 'score' | 'ranking' | 'bracket';

/** POLL - Enum for default Poll Answer Type */
export type PollDefaultAnswerType = 'employee' | 'same' | 'manual';

/** POLL - Format for Polls */
export type PollFormat = {
	name: string;
	type: PollType;
	defaultAnswerType: PollDefaultAnswerType;
	openingDateTime: string;
	closingDateTime: string;
	questions?: {
		[key: string]: PollQuestionFormat;
	};
};

/** POLL - Format for Firebase Polls Document */
export type PollsFirebaseFormat = {
	[key: string]: PollFormat;
};

/** POLL - Format for new Poll Question */
export type PollQuestionFormat = {
	question: string;
	isMultipleChoice: boolean;
	answerOptions?: string[];
};
