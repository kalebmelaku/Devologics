import React from 'react';
import { Check } from 'lucide-react';
const PricingCard = ({
  tier,
  price,
  features,
  popular,
  buttonText
}) => {
  return <div className={`rounded-lg p-6 ${popular ? 'bg-black text-white' : 'bg-white'} shadow-lg`}>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-4">{tier}</h3>
        {popular && <span className="inline-block bg-gray-700 text-white text-xs px-3 py-1 rounded-full mb-4">
            Most popular
          </span>}
        <div className="flex items-baseline">
          <span className="text-4xl font-bold">${price}</span>
          <span className="text-gray-400 ml-1">/month</span>
        </div>
      </div>
      <button className={`w-full py-2 rounded-full mb-6 ${popular ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-600 hover:bg-purple-700'} text-white transition-colors`}>
        {buttonText}
      </button>
      <ul className="space-y-3">
        {features.map((feature, index) => <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
            <span className={popular ? 'text-gray-200' : 'text-gray-600'}>{feature}</span>
          </li>)}
      </ul>
    </div>;
};
const Pricing = () => {
  const pricingPlans = [{
    tier: 'Free',
    price: '0',
    buttonText: 'Get started for free',
    features: ['Up to 5 project members', 'Unlimited tasks and projects', '2GB storage', 'Integrations', 'Basic support']
  }, {
    tier: 'Pro',
    price: '9',
    buttonText: 'Sign up now',
    popular: true,
    features: ['Up to 50 project members', 'Unlimited tasks and projects', '50GB storage', 'Integrations', 'Priority support', 'Advanced analytics']
  }, {
    tier: 'Business',
    price: '19',
    buttonText: 'Sign up now',
    features: ['Unlimited project members', 'Unlimited tasks and projects', '200GB storage', 'Integrations', 'Dedicated account manager', 'Custom fields', 'Advanced analytics', 'Export capabilities']
  }];
  return <section className="w-full py-16 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => <PricingCard key={index} {...plan} />)}
        </div>
      </div>
    </section>;
};
export default Pricing;