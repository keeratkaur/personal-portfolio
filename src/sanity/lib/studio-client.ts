import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const studioClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: 'published',
  stega: {
    enabled: true,
    studioUrl: '/studio',
  },
}) 