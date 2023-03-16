import { Container, Heading, Image, Text } from '@chakra-ui/react';
import { createClient } from 'next-sanity';
import { Layout } from '../components/layout';

const postQuery = `*[_type == "post"] {
    _id,
    author,
    headline,
    image,
    "articleBody": articleBody[]{
      _key,
      _type,
      "children": children[] {
        _key,
        _type,
        text,
        marks[],
      },
      "asset": asset[]{
        _type,
        _ref,
      },
    },
    }`;

const Blog = ({ posts }) => {
  return (
    <Layout>
      <Container>
        {posts.length > 0 && (
          <Container>
            {posts.map(post => (
              <Container key={post._id}>
                <Heading>{post.headline}</Heading>
                {post.articleBody.map(body => (
                  <Container key={body._key}>
                    {body.asset?.map(asset => (
                      <Image
                        key={asset._type}
                        src={`${asset._ref}`}
                        alt="Velt Image"
                      />
                    ))}
                    {body.children?.map(child => (
                      <Text key={child._key}>{child.text}</Text>
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
      </Container>
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
