import { z } from "zod";

const projectSchema = z.object({
    repo: z.string(),
    link: z.string(),
    description: z.string(),
});

export type Project = z.infer<typeof projectSchema>;
export async function getProjects(): Promise<Project[]> {
    return [
        {
            repo: "e-commerce store",
            link: "https://github.com/anrivera16/gym_store",
            description: "still a work in-progress. learning django and htmx",
        },
        {
            repo: "andrewrivera.dev",
            link: "https://github.com/anrivera16/andrewrivera.dev",
            description: "personal website. piggybacked off https://github.com/hasparus/zaduma",
        },
    ];
}