/**
 * Simulates a call to an expert AI system for Togolese agriculture.
 * In a real implementation, this would call a Genkit flow that uses Gemini.
 */
export async function askExpert(question: string): Promise<string> {
  console.log("Simulating AI expert call with question:", question);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Return a mock, static response
  if (question.toLowerCase().includes("maïs")) {
    return "Pour la culture du maïs au Togo, il est recommandé de planter la variété IKENE, qui est résistante à la sécheresse. La période de semis idéale est entre mars et avril. Assurez-vous d'utiliser un engrais NPK 15-15-15.";
  } else if (question.toLowerCase().includes("igname")) {
    return "La culture de l'igname nécessite un sol bien drainé. La variété la plus populaire est la 'Laboko'. Le buttage est une étape cruciale pour assurer un bon développement des tubercules.";
  } else {
    return "Je suis spécialisé dans l'agriculture togolaise. Pour une meilleure réponse, pourriez-vous poser une question plus spécifique sur une culture comme le maïs, le sorgho, ou l'igname ?";
  }
}
