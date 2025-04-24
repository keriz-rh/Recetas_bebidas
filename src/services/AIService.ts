import { streamText } from 'ai'
import { openrouter } from '../lib/ai'

export default {
    async generateRecipe(prompt: string) {
        const result = streamText({
            model: openrouter('meta-llama/llama-3.3-70b-instruct:free'),
            // model: openrouter('google/gemini-2.5-pro-exp-03-25:free'),
            // model: openrouter('deepseek/deepseek-chat-v3-0324:free'),
            // model: openrouter('google/gemma-3-4b-it:free'),
            prompt,
            system: 'Eres un bartender que 50 años de experiencia en ' +
            'la coctelería que ha servido bebidas a personajes iconicos del anime' +
             'y los commics. Tu trabajo es crear recetas de deliciosas bebidas y acompañamiento'
        })

        return result.textStream
    }
}