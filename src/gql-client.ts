import { GraphQLClient } from 'graphql-request';

export const sanityDetails = {
  projectId: 'djmpbnmm',
  dataset: 'production',
};

export const client = new GraphQLClient(
  `https://${sanityDetails.projectId}.api.sanity.io/v1/graphql/${sanityDetails.dataset}/default`,
);
