// src/sanity.js
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'uyghamp6',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true
})

export default client
