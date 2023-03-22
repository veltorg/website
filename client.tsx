import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'djmpbnmm',
  dataset: 'production',
  apiVersion: '2023-03-16',
  useCdn: false,
});
