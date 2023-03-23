import {
  Box,
  Container,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import { PortableText } from '@portabletext/react';
import { format } from 'date-fns';
import { FC } from 'react';
import { Layout } from '../../components/layout';
import { SanityImage } from '../../components/sanity-image';
import { graphql } from '../../gql';
import { client } from '../../gql-client';
import { GetPostsBySlugQuery } from '../../gql/graphql';
import { notEmpty } from '../../utils';

const getPostsBySlugQuery = graphql(/* GraphQL */ `
  query GetPostsBySlug($slug: String!) {
    posts: allPost(where: { slug: { current: { eq: $slug } } }) {
      author {
        givenName
        familyName
      }

      headline
      _createdAt
      image {
        _type
        asset {
          url
        }
        attribution
        caption
      }
      articleBodyRaw
    }
  }
`);

const getAllPostSlugsQuery = graphql(/* GraphQL */ `
  query GetAllPostSlugs {
    posts: allPost {
      slug {
        current
      }
    }
  }
`);

type Post = GetPostsBySlugQuery['posts'][number];

type BlogProps = {
  post: Post;
};

const Blog: FC<BlogProps> = ({ post }) => {
  if (!post) {
    return <div>Could not find it...</div>;
  }

  const authors = post.author
    ? post.author
        .map(author => `${author?.givenName} ${author?.familyName}`)
        .join(', ')
    : false;

  const date = format(new Date(post._createdAt), 'MMMM do, yyyy');

  return (
    <Layout>
      <Flex flexDirection="column">
        <Container sx={{ mb: 'xl' }}>
          <Flex flexDirection="column" gap={3} sx={{ pb: 6 }}>
            <Heading>{post.headline}</Heading>
            <Text as="em">
              Written{authors && <> by {authors}</>} on {date}
            </Text>
          </Flex>
          <PortableText
            value={post.articleBodyRaw}
            components={{
              types: {
                image: ({ value }) => (
                  <Box py="s">
                    <SanityImage value={value} />
                  </Box>
                ),
              },
              block: {
                normal: ({ children }) => <Text py="2xs">{children}</Text>,
                // 'blockquote'
                h1: ({ children }) => <Heading as="h1">{children}</Heading>,
                h2: ({ children }) => <Heading as="h2">{children}</Heading>,
                h3: ({ children }) => <Heading as="h3">{children}</Heading>,
                h4: ({ children }) => <Heading as="h4">{children}</Heading>,
                h5: ({ children }) => <Heading as="h5">{children}</Heading>,
                h6: ({ children }) => <Heading as="h6">{children}</Heading>,
              },

              list: {
                bullet: ({ children }) => <List p="s">{children}</List>,
                number: ({ children }) => <List p="s">{children}</List>,
              },

              listItem: {
                bullet: ({ children }) => (
                  <ListItem py="xs">{children}</ListItem>
                ),
                number: ({ children }) => (
                  <ListItem py="xs">{children}</ListItem>
                ),
              },
            }}
          />
        </Container>
      </Flex>
    </Layout>
  );
};

export async function getStaticPaths(): Promise<{
  paths: { params: { slug: string } }[];
  fallback: boolean;
}> {
  const { posts } = await client.request(getAllPostSlugsQuery);
  const slugs = posts.map(post => post.slug?.current).filter(notEmpty);

  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: true,
  };
}

type Context = {
  params: {
    slug: string;
  };
};

export async function getStaticProps(
  context: Context,
): Promise<{ props: BlogProps }> {
  const {
    posts: [post],
  } = await client.request(getPostsBySlugQuery, {
    slug: context.params.slug,
  });

  return {
    props: {
      post,
    },
  };
}

export default Blog;
