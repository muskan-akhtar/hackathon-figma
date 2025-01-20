import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url';


import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

// Create an image URL builder
const builder = imageUrlBuilder(client);

// Function to generate image URLs
//@ts-expect-error: This is a valid function
export const urlFor = (source) => builder.image(source);