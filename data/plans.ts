
import { Plan } from "../components/products/pricing";

export const freshdeskPlans: Plan[] = [
  {
    name: 'Free',
    description: "Get going for free",
    price: { amount: 0, currency: 'EUR', description: 'Up to 10 agents' },
    monthlyPrice: { amount: 15, currency: 'EUR' },
    features: [
      {
        name: 'Integrated ticketing across email and social',
        tooltip: 'Convert all email and social inquiries into tickets and track, prioritize, and reply using Freshdesk.',
      },
      {
        name: 'Ticket Dispatch',
        tooltip: 'Categorize, prioritize, and route tickets to the right teams by creating your own business rules',
      },
      {
        name: 'Knowledge Base',
        tooltip: 'Enable customers to help themselves by finding answers on their own.',
      },
      {
        name: 'Ticket Trend Report',
        tooltip: 'Analyze trends and stay on top of tickets by allocating resources at the right time.',
      },
      {
        name: 'Out-of-the-box analytics and reporting',
      },
      {
        name: 'Choose your data center location'
      },
      {
        name: 'Team collaboration',
      },
      {
        name: '24x7 email support',
      }
    ],
  },
  
  {
    name: 'Growth',
    description: 'Intuitive, industry-leading support for growing businesses',
    price: { amount: 15, currency: 'EUR' },
    features: [
      {
        name: 'Everything in Free and...',
      },
      {
        name: 'Automation',
        tooltip: 'Automate follow-ups, escalations, and other tasks using specific time and event-based triggers to perform any action of your choice.',
      },
      {
        name: 'Collision Detection',
        tooltip: "Know when another agent is viewing/replying to a ticket to avoid duplicating each other's effort.",
      },
      {
        name: '1000+ marketplace apps',
        tooltip: 'Get access to 1000+ apps and extend the capabilities of your helpdesk with the Freshworks Marketplace.',
      },
      {
        name: 'In-depth helpdesk report',
        tooltip: 'Set the right expectations with customers and agents on the response and resolution timeframes for every ticket in your helpdesk, and set the right business hours.',
      },
      {
        name: 'Veldig kul!!!',
        tooltip: 'hemmelig tooltip',
      },
      {
        name: 'Custom Email Server',
      },
      {
        name: 'Custom Ticket Views',
      },
      {
        name: 'Custom ticket fields & status',
      },
      {
        name: 'Custom SSL',
      },
      {
        name: 'Easily track time spent by agents on tickets',
      },
      {
        name: '24x5 phone support',
      },
    ],
  },
  
  {
    name: 'Pro',
    description: 'Advanced automation for high performance',
    price: { amount: 49, currency: 'EUR' },
    monthlyPrice: { amount: 59, currency: 'EUR' },
    features: [
      {
        name: 'Everything in Growth and...',
      },
      {
        name: 'Multiple products',
        tooltip: 'Up to 5 products',
      },
      {
        name: 'Includes up to 5000 Collaborators',
        tooltip: 'Invite external agents and third parties into Freshdesk to help full-time agents resolve complex customer issues.',
      },
      {
        name: 'Round-robin routing',
        tooltip: 'Automatically assign tickets to all available agents in a group in a circular fashion.',
      },
      {
        name: 'Custom Roles',
        tooltip: 'Provide or restrict access to your agents at granular levels.',
      },
      {
        name: 'Custom Reports and Dashboards',
        tooltip: 'Create powerful reports and dashboards unique to your business and draw deeper insights from your Freshdesk data.',
      },
      {
        name: 'Segment customers for personalized support',
      },
      {
          name: 'Customer journey',
          tooltip: 'Show agents the solution articles that a customer opened before they created a support ticket.'
        },
        {
          name: 'Canned forms',
        },
        {
          name: 'Manage versions in knowledge base',
        },
        {
          name: 'Community forums',
        },
        {
          name: 'Extendable API Limits',
        },
        {
          name: 'CSAT surveys & reports',
        },
        {
          name: 'Multiple SLA policies & business hours',
          tooltip: 'Set custom Service Level Agreements (SLA) for multiple regions, products and business units to prioritize and deliver by suitable deadlines for each requirement.'
        },
        {
            name: 'SLA reminder & escalation'
        },
        {
            name: 'Multilingual knowledge base'
            ,tooltip: 'Supports 42 languages'
        },
        {
            name: 'Custom apps'
            ,tooltip: 'Extend your support capabilities by building apps customized for your business.'
        },
        {
            name: 'Average handling Time (AHT)'
        },
        {
            name: 'Custom Metrics'
        },
        {
            name: 'Report Sharing'
        },
    ],
  },
  {
    name: 'Enterprise',
    description: 'Fully featured with bots for  enterprise-level support',
    price: { amount: 79, currency: 'EUR' },
    monthlyPrice: { amount: 95, currency: 'EUR' },
    features: [
      {
        name: 'Everything in Pro and...',
      },
      {
        name: 'Unlimited products',
      },
      {
        name: 'Sandbox',
        tooltip: 'Create a secure test environment to try new features and settings in Freshdesk without impacting agents or customers.',
      },
      {
        name: 'Easily manage agent shifts across time zones',
      },
      {
        name: 'Custom objects',
        tooltip: 'Create or bring in business-critical data right inside your Freshdesk.',
      },
      {
        name: 'Assist bot',
        tooltip: 'Guide agents through pre-configured steps to help resolve customer queries faster. Does not require bot sessions.'
      },
      {
        name: 'Email bot',
        tooltip: 'Automatically respond to email tickets with relevant solution articles. Consumes bot sessions.',
      },
      {
        name: 'Audit log',
        tooltip: 'Monitor changes and always stay up-to-date on whats happening with your helpdesk.',
      },
      {
        name: 'Skill-based routing',
        tooltip: 'Match tickets to the agent most skilled in handling specific types of issues within the group.',
      },
      {
        name: 'Knowledge base approval workflow',
        tooltip: 'Track, review, approve, and publish knowledge base articles.',
      },
      {
        name: 'Flexible knowledge base hierarchy',
        tooltip: 'Categorize articles up to 5 folder levels and scale your knowledge base.',
      },
      {
        name: 'IP range restriction',
        tooltip: 'Increase helpdesk security by allowing certain IP addresses to access your portal.',
    },
    {
      name: 'Auto-triage Freddy',
      tooltip: 'Automatically predict basic ticket fields like Type, Priority & Group and other custom ticket fields.',
    },
    {
        name: 'Article suggester',
        tooltip: 'Let Freddy suggest solution articles to your agents to help them respond to tickets faster.',
      },
      {
        name: 'Canned response suggester',
        tooltip: 'Let Freddy suggest canned responses to help your agents respond to tickets faster.',
      },
      {
        name: 'AI-powered social signals',
        tooltip: 'Use AI to find important tweets and cancel out the noise.',
      },
    ],
  },
];
