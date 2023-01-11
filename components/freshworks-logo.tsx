import { useColorMode, Flex } from "@chakra-ui/react";
import { Freshworks } from "./footer/elements/freshworks";
import { FreshworksDark } from "./footer/elements/freshworks-dark";

export const FreshworksLogo: React.FC = () => {
    const { colorMode, setColorMode } = useColorMode();
    const freshLogo = colorMode === 'light' ? <Freshworks /> : <FreshworksDark />;
    
    return(
        <Flex sx={{ alignItems: 'center', justifyContent: 'center', my: 5 }}>
            {freshLogo}
        </Flex>
    );

};