
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

const SYSTEM_INSTRUCTION = `
Sei l'assistente virtuale esperto di Nardin Autotrasporti. 
La tua missione è aiutare i potenziali clienti con consulenza logistica sui trasporti speciali e sollevamenti con gru.
Dati aziendali:
- Nome: Nardin Autotrasporti
- Specializzazioni: Trasporti eccezionali, sollevamento industriale, movimentazione barche, noleggio autogrù con operatore.
- Località: Italia (operano a livello nazionale ed internazionale).
- Tono: Professionale, tecnico ma cordiale, orientato alla sicurezza e all'efficienza.

Regole:
1. Se chiedono preventivi, spiega quali dati servono (dimensioni, peso, punto di carico/scarico).
2. Fornisci consigli tecnici su come preparare un carico speciale.
3. Se non sai qualcosa, invita a contattare l'ufficio tecnico al numero +39 000 000 000 (numero placeholder).
4. Rispondi sempre in italiano.
`;

export async function chatWithConsultant(messages: Message[]) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const contents = messages.map(m => ({
    role: m.role,
    parts: [{ text: m.text }]
  }));

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "Mi dispiace, si è verificato un errore nella comunicazione.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Servizio temporaneamente non disponibile. Contattaci via telefono.";
  }
}
