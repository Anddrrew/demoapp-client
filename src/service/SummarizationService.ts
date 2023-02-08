import ApiService from './ApiService';

class SummarizationService {
  getSummary = (text: string) => ApiService.fetch('/summarization', 'POST', { text });
}

export default new SummarizationService();
