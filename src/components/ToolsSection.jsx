import React from 'react';
import ToolCard from './ToolCard';

const tools = [
  {
    title: 'AI-Powered Algorithms',
    description: 'Automated trading strategies trained on millions of data points.',
    icon: '🤖',
  },
  {
    title: 'Real-Time Market Data',
    description: 'Stay ahead with instant access to live price feeds and news.',
    icon: '📈',
  },
  {
    title: 'Portfolio Optimization',
    description: 'Balance risk and return with smart portfolio insights.',
    icon: '📊',
  },
  {
    title: 'Risk Analysis',
    description: 'Get visual risk exposure reports in seconds.',
    icon: '🛡️',
  },
  {
    title: 'Backtesting Engine',
    description: 'Evaluate strategies using historical data simulation.',
    icon: '🔍',
  },
  {
    title: 'Custom Alerts',
    description: 'Set personalized triggers for key price movements.',
    icon: '🚨',
  },
];

const ToolsSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Powerful Trading Tools
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Whether you're an experienced trader or just starting, our toolset equips you to make smart, data-driven decisions.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, index) => (
            <ToolCard
              key={index}
              icon={tool.icon}
              title={tool.title}
              description={tool.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
