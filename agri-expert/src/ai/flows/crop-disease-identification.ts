/**
 * Simulates a call to an AI model for crop disease identification.
 * In a real implementation, this would be a multimodal Genkit flow.
 * @param image A File object representing the image of the plant.
 * @param description A text description from the user.
 */
export async function identifyCropDisease(
  image: File,
  description: string
): Promise<string> {
  console.log("Simulating crop disease identification for:", image.name);
  console.log("User description:", description);

  // Simulate network and processing delay
  await new Promise(resolve => setTimeout(resolve, 2500));

  // Return a mock, static response based on description
  if (description.toLowerCase().includes("taches jaunes")) {
    return "Diagnostic probable : Mildiou sur feuille de maïs.\n\n**Recommandation technique :** Appliquez un fongicide à base de mancozèbe.\n\n**Solution traditionnelle :** Préparez une décoction de feuilles de neem et pulvérisez sur les plantes affectées tous les 3 jours.";
  } else if (description.toLowerCase().includes("rouille")) {
     return "Diagnostic probable : Rouille sur feuille de haricot.\n\n**Recommandation technique :** Utilisez un fongicide contenant du propiconazole.\n\n**Solution traditionnelle :** Une infusion d'ail et de piment peut aider à limiter la propagation.";
  } else {
    return "L'analyse de l'image suggère une carence en nutriments. Assurez-vous que votre sol est bien fertilisé. Pour un diagnostic plus précis, veuillez fournir une description plus détaillée des symptômes, par exemple la couleur et la forme des taches.";
  }
}
