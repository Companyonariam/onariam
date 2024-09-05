import { createClient, groq } from "next-sanity";

export async function getData() {
    const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
    const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
    
    const client = createClient({
        projectId: sanityProjectId,
        dataset: sanityDataset,
        apiVersion: "2024-09-04",
    });

    return client.fetch(
        groq`*[_type == "blogs"]{
            _id,
            _createdAt,
            name,
            categories,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
    )

}
