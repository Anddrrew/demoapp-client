export type SummarizationInput = {
  text: string;
  temperature: number;
  maxTokens: number;
  topP: number;
  frequencyPenalty: number;
  presencePenalty: number;
};

export type SettingsSummarization = Omit<SummarizationInput, 'text'>;

export type SummarizationOutput = {
  input: SummarizationInput;
  summary: string;
};
