'use server';

/**
 * @fileOverview AI-powered About Me section generator.
 *
 * - generateAboutMe - A function that generates a personalized About Me section.
 * - GenerateAboutMeInput - The input type for the generateAboutMe function.
 * - GenerateAboutMeOutput - The return type for the generateAboutMe function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAboutMeInputSchema = z.object({
  keywords: z
    .array(z.string())
    .describe('Keywords describing the user (e.g., innovative, team player, leader).'),
  projectDescriptions: z
    .array(z.string())
    .describe('Descriptions of the user projects, used to identify skills and traits.'),
});
export type GenerateAboutMeInput = z.infer<typeof GenerateAboutMeInputSchema>;

const GenerateAboutMeOutputSchema = z.object({
  aboutMe: z.string().describe('A personalized About Me section.'),
});
export type GenerateAboutMeOutput = z.infer<typeof GenerateAboutMeOutputSchema>;


const identifySkills = ai.defineTool({
  name: 'identifySkills',
  description: 'Identifies skills and traits from project descriptions.',
  inputSchema: z.object({
    projectDescriptions: z
      .array(z.string())
      .describe('Descriptions of the user projects.'),
  }),
  outputSchema: z.array(z.string()).describe('List of skills and traits.'),
}, async (input) => {
  // Mock implementation - replace with actual skill/trait identification logic
  return ['Adaptability', 'Problem Solving', 'Teamwork'];
});

export async function generateAboutMe(input: GenerateAboutMeInput): Promise<GenerateAboutMeOutput> {
  return generateAboutMeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAboutMePrompt',
  tools: [identifySkills],
  input: {schema: GenerateAboutMeInputSchema},
  output: {schema: GenerateAboutMeOutputSchema},
  prompt: `You are a personal branding expert.  Create a compelling "About Me" section for a portfolio, based on the following keywords provided by the user:  {{keywords}}

Use the identifySkills tool to analyze the project descriptions and identify key skills and traits. Incorporate these skills and traits into the About Me section.

Project Descriptions: {{projectDescriptions}}`,
});

const generateAboutMeFlow = ai.defineFlow(
  {
    name: 'generateAboutMeFlow',
    inputSchema: GenerateAboutMeInputSchema,
    outputSchema: GenerateAboutMeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
