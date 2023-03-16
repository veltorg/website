import { Flex, Container, Heading, Image, Text } from '@chakra-ui/react';
import { createClient } from 'next-sanity';
import { Layout } from '../components/layout';
import { PortableText } from '@portabletext/react';

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

const textStyles = {
  h1: { size: '4xl', weight: 'bold' },
  h2: { size: '2xl', weight: 'bold' },
  h3: { size: 'lg', weight: 'bold' },
  h4: { size: 'md', weight: 'bold' },
  h5: { size: 'sm', weight: 'bold' },
  h6: { size: 'xs', weight: 'bold' },
  normal: { size: 'md', weight: 'normal' },
  small: { size: 'sm', weight: 'normal' },
};

function convertStyle(style: string) {
  switch (style) {
    case 'h1':
      return textStyles.h1;
    case 'h2':
      return textStyles.h2;
    case 'h3':
      return textStyles.h3;
    case 'h4':
      return textStyles.h4;
    case 'h5':
      return textStyles.h5;
    case 'h6':
      return textStyles.h6;
    case 'normal':
      return textStyles.normal;
    case 'small':
      return textStyles.small;
    default:
      return textStyles.normal;
  }
}

const Blog = ({ posts }) => {
  return (
    <Layout>
      <Flex flexDirection="column">
        {posts.length > 0 && (
          <Container>
            {posts.map(post => (
              <Container key={post._id} p="0">
                <Heading>{post.headline}</Heading>
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
                        <Text
                          sx={{
                            size: convertStyle(body.style).size,
                            weight: convertStyle(body.style).weight,
                          }}
                        >
                          {child.text}
                        </Text>
                      </Container>
                    ))}
                  </Container>
                ))}
              </Container>
            ))}
          </Container>
        )}
        {posts.length > 0 && (
          <div>
            <pre>{JSON.stringify(posts, null, 2)}</pre>
          </div>
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
