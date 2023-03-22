import { Flex } from '@chakra-ui/react';
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

const Blog = ({ posts }) => {
  const [post] = posts;
  return (
    <Layout>
      <Flex flexDirection="column">
        <PortableText value={[post]} />
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
