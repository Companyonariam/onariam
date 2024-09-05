import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure"
import schemas from "./sanity/schemas"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

const config = defineConfig({
    projectId: projectId,
    dataset: sanityDataset,
    apiVersion: "2024-09-04",
    title: "Onariam",
    basePath: '/studio',
    plugins: [structureTool()],
    schema: {
        types: schemas
    }
})

export default config;