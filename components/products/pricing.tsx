import { CheckIcon, InfoOutlineIcon } from '@chakra-ui/icons';
import {
  Button,
  Box,
  Flex,
  GridItem,
  SimpleGrid,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import React from 'react';

export interface Plan {
  name: string;
  description: string;
  price: Price;
  popular?: boolean;
  monthlyPrice?: Price;
  features: PlanFeature[];
}

export interface Price {
  currency: 'NOK' | 'EUR';
  amount: number;
  description?: string;
}

export interface PlanFeature {
  name: string;
  tooltip?: string;
  badge?: 'ADD-ON' | 'BETA' | 'FREDDY' | 'OPTIONAL';
}

export interface PricingProps {
  plans: Plan[];
}

/** Puts a currency marker on a price */
const renderPrice = (price: Price) =>
  price.currency === 'NOK' ? `${price.amount} kr.` : `€${price.amount}`;

export const Pricing: React.FC<PricingProps> = ({ plans }) => {
  return (
    <Box bgColor="green.100" p={4}>
      <SimpleGrid
        width="100%"
        columns={plans.length}
        borderWidth="slim"
        borderRadius="md"
      >
        {plans.map(plan => (
          <GridItem borderBottomWidth="slim" p={1} key={plan.name && plan.description}>
            <Text fontSize="lg" fontWeight="bold" align="center">
              {plan.name}
            </Text>
            <Text fontSize="sm" mt={1} align="center" key={plan.description}>
              {plan.description}
            </Text>
          </GridItem>
        ))}

        {plans.map(plan => (
          <GridItem p={1} key={plan.price.description && plan.monthlyPrice?.description}>
            <Flex flexDirection="column" alignItems="center">
              <Text fontSize="2xl" fontWeight="semibold">
                {renderPrice(plan.price)}
              </Text>

              {plan.price.description ? (
                <Text align="center">{plan.price.description}</Text>
              ) : (
                '/agent/month, billed annualy'
              )}

              {plan.monthlyPrice && (
                <>
                  
                  <Text fontWeight="semibold">
                    {renderPrice(plan.monthlyPrice)}
                  </Text>
                  {plan?.monthlyPrice?.description ? (
                    <Text align="center">{plan.monthlyPrice.description}</Text>
                  ) : (
                    '/agent/month, billed monthly'
                  )}
                </>
              )}
            </Flex>
          </GridItem>
        ))}

        {plans.map(plan => (
          <GridItem borderBottomWidth="slim" p={2} justifySelf="center" key={plan.name}>
            <Button size="sm">Start Free Trial</Button>
          </GridItem>
        ))}

        {plans.map(plan => (
          <GridItem p={2} justifySelf="center" key={plan.features.length}>
            {plan.features.map(feature => (
              <Text fontSize="sm" key={feature.name && feature.tooltip}>
                <CheckIcon /> {feature.name} {' '}
                {feature.tooltip && <Tooltip label={feature.tooltip}>
                  <InfoOutlineIcon />
                </Tooltip>}
              </Text>
            ))}
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
};
