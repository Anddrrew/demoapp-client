import { SummarizationInput } from '../types/summarization';
import ApiService from './ApiService';

class SummarizationService {
  getSummary = (input: SummarizationInput) => ApiService.fetch('/summarization', 'POST', input);
}

export default new SummarizationService();
