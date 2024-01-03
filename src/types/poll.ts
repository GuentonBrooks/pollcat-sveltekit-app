/** POLL - Enum for poll Type */
export type PollType = 'vote' | 'approval' | 'score' | 'ranking' | 'bracket';

/** POLL - Enum for default Poll Answer Type */
export type PollDefaultAnswerType = 'employee' | 'same' | 'manual';

/** POLL - Format for new Polls */
export type NewPollFormat = {
	name: string;
	type: PollType;
	defaultAnswerType: PollDefaultAnswerType;
	openingDateTime: string;
	closingDateTime: string;
};
