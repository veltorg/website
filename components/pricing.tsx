import { CheckIcon, InfoOutlineIcon } from '@chakra-ui/icons';
import { Button, GridItem, SimpleGrid, Text, Tooltip } from '@chakra-ui/react';
import React from 'react';

export interface PricingProps {
  variant: 'freshchat' | 'freshdesk' | 'freshsales' | 'freshservice';
}

export const Pricing: React.FC<PricingProps> = ({ variant }) => {
  const chat = variant === 'freshchat' ? true : false;
  const desk = variant === 'freshdesk' ? true : false;
  const sales = variant === 'freshsales' ? true : false;
  const service = variant === 'freshservice' ? true : false;
  return (
    <SimpleGrid
      width="100%"
      columns={4}
      gridTemplateRows="auto auto auto"
      border="2px"
      borderRadius="md"
    >
      <GridItem borderBottom="2px" p={1}>
        <Text fontSize="lg" fontWeight="bold" align="center">
          {service ? 'Starter' : 'Free'}
        </Text>
        <Text fontSize="sm" mt={1} align="center">
          {chat ? 'For getting started' : ''}
          {desk ? 'Get going for free' : ''}
          {sales
            ? 'Get sales teams organized and engage leads fast with built-in chat, email and phone'
            : ''}
          {service ? 'For getting started' : ''}
        </Text>
      </GridItem>

      <GridItem borderBottom="2px" p={1}>
        <Text fontSize="lg" align="center" fontWeight="bold">
          Growth
        </Text>
        <Text fontSize="sm" mt={1} align="center">
          Intuitive, industry-leading
          <br />
          support for growing businesses
        </Text>
      </GridItem>
      <GridItem borderBottom="2px" p={1}>
        <Text fontSize="lg" align="center" fontWeight="bold">
          Pro
        </Text>
        <Text fontSize="sm" mt={1} align="center">
          Advanced automation for high
          <br />
          performance
        </Text>
      </GridItem>
      <GridItem borderBottom="2px" p={1}>
        <Text fontSize="lg" align="center" fontWeight="bold">
          Enterprise
        </Text>
        <Text fontSize="sm" mt={1} align="center">
          Fully featured with bots for
          <br />
          enterprise-level support
        </Text>
      </GridItem>
      <GridItem p={1}>
        <Text align="center" fontSize="lg" fontWeight="semibold">
          €0
        </Text>
        <Text align="center" fontSize="md">
          Up to 10 agents
        </Text>
      </GridItem>
      <GridItem p={1}>
        <Text align="center" fontSize="lg" fontWeight="semibold">
          €15
        </Text>
        <Text align="center" fontSize="md">
          /agent/month, billed annualy <br />
          €18 <br />
          /agent/month, billed monthly
        </Text>
      </GridItem>
      <GridItem p={1}>
        <Text align="center" fontSize="lg" fontWeight="semibold">
          €49
        </Text>
        <Text align="center" fontSize="md">
          /agent/month, billed annualy <br />
          €59 <br />
          /agent/month, billed monthly
        </Text>
      </GridItem>
      <GridItem p={1}>
        <Text align="center" fontSize="lg" fontWeight="semibold">
          €79
        </Text>
        <Text align="center" fontSize="md">
          /agent/month, billed annualy <br />
          €95 <br />
          /agent/month, billed monthly
        </Text>
      </GridItem>
      <GridItem borderBottom="2px" p={2} justifySelf="center">
        <Button size="sm" border="1px" borderRadius="none">
          Start Free Trial
        </Button>
      </GridItem>
      <GridItem borderBottom="2px" p={2} justifySelf="center">
        <Button size="sm" border="1px" borderRadius="none">
          Start Free Trial
        </Button>
      </GridItem>
      <GridItem borderBottom="2px" p={2} justifySelf="center">
        <Button size="sm" border="1px" borderRadius="none">
          Start Free Trial
        </Button>
      </GridItem>
      <GridItem borderBottom="2px" p={2} justifySelf="center">
        <Button size="sm" border="1px" borderRadius="none">
          Start Free Trial
        </Button>
      </GridItem>
      <GridItem p={2} justifySelf="center">
        <Text fontSize="sm">
          <CheckIcon /> Integrated ticketing across email and social{' '}
          <Tooltip
            label="Convert all email and social inquiries
              into tickets and track, prioritize, 
              and reply using Freshdesk."
          >
            <InfoOutlineIcon />
          </Tooltip>
        </Text>
        <Text fontSize="sm">
          <CheckIcon /> Ticket Dispatch{' '}
          <Tooltip
            label="Categorize, prioritize, and route tickets to
              the right teams by creating your own business rules."
          >
            <InfoOutlineIcon />
          </Tooltip>
        </Text>
        <Text fontSize="sm">
          <CheckIcon /> Knowledge Base{' '}
          <Tooltip
            label="Enable customers to help themselves 
              by finding answers on their own."
          >
            <InfoOutlineIcon />
          </Tooltip>
        </Text>
        <Text fontSize="sm">
          <CheckIcon /> Ticket Trend Report{' '}
          <Tooltip
            label="Analyze trends and stay on top of
              tickets by allocating resources at the right time."
          >
            <InfoOutlineIcon />
          </Tooltip>{' '}
        </Text>
        <Text fontSize="sm">
          <CheckIcon /> Out-of-the-box analytics and reporting{' '}
        </Text>
        <Text fontSize="sm">
          <CheckIcon /> Choose your data center location{' '}
        </Text>
        <Text fontSize="sm">
          <CheckIcon /> Team collaboration{' '}
        </Text>
        <Text fontSize="sm">
          <CheckIcon /> 24x7 email support{' '}
        </Text>
      </GridItem>
      <GridItem p={2} justifySelf="center">
        <Text fontSize="sm" as="i">
          {' '}
          Everything in Free and...{' '}
        </Text>
        <Text fontSize="sm">
          <CheckIcon /> Automation{' '}
          <Tooltip
            label="Automate follow-ups, escalations, and other tasks 
          using specific time and event-based triggers to perform any action of your choice."
          >
            <InfoOutlineIcon />
          </Tooltip>
        </Text>
        <Text fontSize="sm">
          <CheckIcon /> Collision Detection{' '}
          <Tooltip
            label="Know when another agent is viewing/replying
          to a ticket to avoid duplicating each other’s effort."
          >
            <InfoOutlineIcon />
          </Tooltip>
        </Text>
        <Text fontSize="sm">
          <CheckIcon /> 1000+ marketplace apps{' '}
          <Tooltip
            label="Get access to 1000+ apps and extend
          the capabilities of your helpdesk with the Freshworks Marketplace."
          >
            <InfoOutlineIcon />
          </Tooltip>
        </Text>
        <Text fontSize="sm">
          <CheckIcon /> In-depth helpdesk report{' '}
        </Text>
        <Text fontSize="sm">
          <CheckIcon /> SLA management & business hours{' '}
          <Tooltip
            label="Set the right expectations with customers and agents
          on the response and resolution timeframes for every ticket
          in your helpdesk, and set the right business hours."
          >
            <InfoOutlineIcon />
          </Tooltip>
        </Text>
        <Text fontSize="sm">
          <CheckIcon /> Custom Email Server{' '}
        </Text>
        <Text fontSize="sm">
          <CheckIcon /> Custom Ticket Views{' '}
        </Text>
        <Text fontSize="sm">
          <CheckIcon /> Custom ticket fields & status{' '}
        </Text>
        <Text fontSize="sm">
          <CheckIcon /> Custom SSL{' '}
        </Text>
        <Text fontSize="sm">
          <CheckIcon /> Easily track time spent by agents on tickets{' '}
        </Text>
        <Text fontSize="sm">
          <CheckIcon /> 24x5 phone support{' '}
        </Text>
      </GridItem>
      <GridItem p={2} justifySelf="center">
        <Text fontSize="sm" as="i">
          {' '}
          Everything in Free and...{' '}
        </Text>
      </GridItem>
      <GridItem></GridItem>
    </SimpleGrid>
  );
};
