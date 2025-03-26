'use client'

/**
 * This configuration is used to for the Sanity Studio that's mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {apiVersion, dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schemaTypes'
import {structure} from './src/sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works

export default defineConfig({
  name: 'default',
  title: 'Personal Portfolio',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
  schema,
  useCdn: false,
  cors: {
    allowedOrigins: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002'],
  },
  studio: {
    components: {
      navbar: () => null,
    },
  },
})
