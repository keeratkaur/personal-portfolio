import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // if you want to ensure fresh content, set this to false
})

// For preview mode
export const previewClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

// Helper function for draft mode
export const getClient = (preview: boolean = false) => (preview ? previewClient : client)
