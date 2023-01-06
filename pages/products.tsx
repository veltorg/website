import { Flex, Image, Show } from "@chakra-ui/react";
import { Layout } from "../components/layout";


const Products: React.FC = () => {
    return (
        <Layout>
            <Show above='md'>
                <Flex flexDirection="column" width='100%' gap={5}>
                    <Flex>
                        <Image src="./productgraphic.jpg"/>
                    </Flex>
                    <Flex>

                    </Flex>
                </Flex>
            </Show>
            <Show below='md'>

            </Show>
        </Layout>
    );
};

export default Products;