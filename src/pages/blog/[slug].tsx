import {
  Container,
  Flex,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { client } from '../../../client';
import { Layout } from '../../components/layout';

const pathQuery = `*[_type == "post" && slug.current]`;

const postQuery = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    author,
    headline,
    _createdAt,
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

const personQuery = `*[_type == "person"] {
    _id,
    familyName,
    givenName,
    }`;

const Blog = ({ post, people }) => {
  return (
    <Layout>
      <Flex flexDirection="column">
        <Container>
          <Flex flexDirection="column" gap={3}>
            <Heading>{post?.headline}</Heading>
            <Text textStyle="h6">
              Written by {people?.givenName}
              {people?.familyName} on {post?._createdAt.split('T')[0]}
            </Text>
            {post?.articleBody.map(body => (
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
                    {body.listItem === 'bullet' && child.text.at(-1) !== ':' ? (
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
        </Container>
      </Flex>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = await client.fetch(pathQuery);

  return {
    paths: paths.map(slug => ({ params: { slug } })),
    fallback: true,
  };
}
export async function getStaticProps(context) {
  const { slug = '' } = context.params;
  const post = await client.fetch(postQuery, { slug });
  const people = await client.fetch(personQuery);

  return {
    props: {
      post,
      people,
    },
  };
}

export default Blog;
