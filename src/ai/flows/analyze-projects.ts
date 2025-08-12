'use server';

/**
 * @fileOverview This file defines a Genkit flow for analyzing a user's projects to identify relevant skills and traits.
 *
 * analyzeProjects - An async function that takes project descriptions as input and returns a list of identified skills and traits.
 * AnalyzeProjectsInput - The input type for the analyzeProjects function.
 * AnalyzeProjectsOutput - The return type for the analyzeProjects function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeProjectsInputSchema = z.object({
  projectDescriptions: z
    .array(z.string())
    .describe('An array of project descriptions to analyze.'),
});
export type AnalyzeProjectsInput = z.infer<typeof AnalyzeProjectsInputSchema>;

const AnalyzeProjectsOutputSchema = z.object({
  skillsAndTraits: z
    .array(z.string())
    .describe('A list of skills and traits identified from the project descriptions.'),
});
export type AnalyzeProjectsOutput = z.infer<typeof AnalyzeProjectsOutputSchema>;

export async function analyzeProjects(input: AnalyzeProjectsInput): Promise<AnalyzeProjectsOutput> {
  return analyzeProjectsFlow(input);
}

const analyzeProjectsPrompt = ai.definePrompt({
  name: 'analyzeProjectsPrompt',
  input: {schema: AnalyzeProjectsInputSchema},
  output: {schema: AnalyzeProjectsOutputSchema},
  prompt: `You are an AI assistant designed to analyze project descriptions and identify relevant skills and traits of the person who worked on the projects. Respond with a list of skills and traits. 

Project Descriptions:
{{#each projectDescriptions}}- {{{this}}}
{{/each}}`,
});

const analyzeProjectsFlow = ai.defineFlow(
  {
    name: 'analyzeProjectsFlow',
    inputSchema: AnalyzeProjectsInputSchema,
    outputSchema: AnalyzeProjectsOutputSchema,
  },
  async input => {
    const {output} = await analyzeProjectsPrompt(input);
    return output!;
  }
);
