import { defineCollection } from "astro:content";
import { glob, file} from 'astro/loaders';
import { z } from "astro/zod";

const techStackEnum = z.enum([
    "JavaScript",
    "TypeScript",
    "React",
    "Nextjs",
    "Prisma",
    "Nodejs",
    "Express",
    "Astro",
    "TailwindCSS",
    "Java",
    "Spring Boot",
    "Python",
    "C++",
    "PostgreSQL",
    "MySQL",
    "SQLite",
    "Docker",
    "AWS",
    "Azure"
])

const projects = defineCollection({
    loader: file("src/data/projects.json"),
    schema: z.object({
        id: z.string(),
        description: z.string().max(200),
        startDate: z.string(),
        endDate: z.string().optional(),
        media: z.string().optional(),
        demoLink: z.string().optional(),
        repoLink: z.string().optional(),
        techStack: z.array(techStackEnum),
    }),
});

export const collections = {
    projects
};