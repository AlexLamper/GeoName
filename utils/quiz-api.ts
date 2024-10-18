// utils/quiz-api.ts
export const fetchQuizData = async (country: string, region: string, quizType: string) => {
    try {
      // Replace the following line with the logic to fetch quiz data from your API.
      const response = await fetch(`/api/quiz-data?country=${country}&region=${region}&type=${quizType}`);
      const data = await response.json();
  
      // This assumes your API returns an array of questions with a `prompt`, `options`, and `correctAnswer`.
      return data.questions;
    } catch (error) {
      console.error('Error fetching quiz data:', error);
      return [];
    }
  };