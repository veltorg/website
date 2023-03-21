import {
  Container,
  Flex,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { createClient } from 'next-sanity';
import { Layout } from '../components/layout';

const postQuery = `*[_type == "post"] {
    _id,
    author,
    headline,
    "image": Image[]{
      _type,
      asset,
      attribution,
      caption,
    },
    "articleBody": articleBody[]{
      _key,
      _type,
      "children": children[] {
        _key,
        _type,
        text,
        marks,
      },
      markDefs[],
      style,
      asset,
      listItem,
      level,
    },
    }`;

const Blog = ({ posts }) => {
  return (
    <Layout>
      <Flex flexDirection="column">
        {posts.length > 0 && (
          <Container>
            {posts.map(post => (
              <Flex key={post._id} flexDirection="column" gap={3}>
                <Heading>{post.headline}</Heading>
                <Text textStyle="h6">
                  Written by Anna Christina Lyra
                </Text>
                {post.articleBody.map(body => (
                  <Container key={body._key} p="0">
                    {body.asset ? (
                      <Image
                        key={body.asset?._ref}
                        src={
                          'https://cdn.sanity.io/images/djmpbnmm/production/' +
                          `${body.asset?._ref}`
                            .replace('image-', '')
                            .replace('-jpg', '.jpg')
                        }
                        alt={'Velt Image'}
                      />
                    ) : null}

                    {body.children?.map(child => (
                      <Container key={child._key} p="0">
                        {body.listItem === 'bullet' &&
                        child.text.at(-1) !== ':' ? (
                          <UnorderedList>
                            <ListItem>
                              <Text textStyle={body.style}>{child.text}</Text>
                            </ListItem>
                          </UnorderedList>
                        ) : (
                          <Text textStyle={body.style}>{child.text}</Text>
                        )}
                      </Container>
                    ))}
                  </Container>
                ))}
              </Flex>
            ))}
          </Container>
        )}
      </Flex>
    </Layout>
  );
};

const client = createClient({
  projectId: 'djmpbnmm',
  dataset: 'production',
  apiVersion: '2023-03-16',
  useCdn: false,
});

export const getStaticProps = async () => {
  const posts: unknown = await client.fetch(postQuery);

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
