import { defineCollection } from "astro:content";
import { glob, file} from 'astro/loaders';
import { z } from "astro/zod";

const projects = defineCollection({
    loader: file("./data/projects.json"),
});