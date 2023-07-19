import { createClient } from "@sanity/client"

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  headers: {
    'Cache-Control': 'no-store', // Add the cache-control header to disable caching
  },
})
