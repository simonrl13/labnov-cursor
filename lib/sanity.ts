import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

// Only create client if projectId is configured and valid (not a placeholder)
const isValidProjectId = projectId && 
  projectId !== "your_sanity_project_id" && 
  /^[a-z0-9-]+$/.test(projectId);

export const client = isValidProjectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null;

const builder = client ? imageUrlBuilder(client) : null;

export function urlFor(source: any) {
  if (!builder) {
    return {
      width: () => ({ height: () => ({ url: () => "" }) }),
      height: () => ({ width: () => ({ url: () => "" }) }),
      url: () => "",
    };
  }
  return builder.image(source);
}

export async function getVisitas() {
  if (!client) {
    return [];
  }

  const query = `*[_type == "visita"] | order(date desc) {
    _id,
    title,
    partner,
    summary,
    date,
    photos,
    links,
    publishToInstagram
  }`;

  try {
    return await client.fetch(query);
  } catch (error) {
    // Silently fail if Sanity is not configured or query fails
    // Don't log to console to avoid cluttering
    return [];
  }
}

export async function getNews() {
  if (!client) {
    return [];
  }

  const query = `*[_type == "news"] | order(date desc) [0...3] {
    _id,
    title,
    summary,
    date,
    link
  }`;

  try {
    return await client.fetch(query);
  } catch (error) {
    return [];
  }
}

export async function getPublications() {
  if (!client) {
    // Return default publication if Sanity not configured
    return [
      {
        title:
          "Development and Characterization of Sawdust-Based Ceramic Membranes for Water Treatment",
        authors: "Authors et al.",
        journal: "MDPI Membranes",
        year: "2025",
        month: "October",
        link: "https://www.mdpi.com/journal/membranes",
      },
    ];
  }

  const query = `*[_type == "publication"] | order(year desc, month desc) {
    _id,
    title,
    authors,
    journal,
    year,
    month,
    link,
    doi
  }`;

  try {
    const publications = await client.fetch(query);
    // If no publications in Sanity, return default
    return publications.length > 0 ? publications : [
      {
        title:
          "Development and Characterization of Sawdust-Based Ceramic Membranes for Water Treatment",
        authors: "Authors et al.",
        journal: "MDPI Membranes",
        year: "2025",
        month: "October",
        link: "https://www.mdpi.com/journal/membranes",
      },
    ];
  } catch (error) {
    // Return default on error
    return [
      {
        title:
          "Development and Characterization of Sawdust-Based Ceramic Membranes for Water Treatment",
        authors: "Authors et al.",
        journal: "MDPI Membranes",
        year: "2025",
        month: "October",
        link: "https://www.mdpi.com/journal/membranes",
      },
    ];
  }
}

