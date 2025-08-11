import React, { useState } from 'react';
import { ChevronUp, ChevronDown, ChevronRight } from 'lucide-react';
const ServiceItem = ({
  title,
  description,
  isOpen,
  toggle
}) => {
  return <div className="border-b border-gray-200 py-6">
      <button className="flex w-full justify-between items-center text-left" onClick={toggle}>
        <h3 className="text-2xl font-semibold">{title}</h3>
        {isOpen ? <ChevronUp className="h-6 w-6 text-purple-600" /> : <ChevronDown className="h-6 w-6" />}
      </button>
      {isOpen && <div className="mt-4 text-gray-600">
          <p>{description}</p>
        </div>}
    </div>;
};
const Services = () => {
  const [openService, setOpenService] = useState('api');
  const services = [{
    id: 'mobile',
    title: 'Mobile App Development',
    description: 'We build cutting-edge mobile applications for iOS and Android platforms that help businesses reach their customers wherever they are.'
  }, {
    id: 'api',
    title: 'API Integration',
    description: 'We help you streamline operations by connecting your apps, services, and platforms through powerful API integrations.'
  }, {
    id: 'ui',
    title: 'UI/UX Design',
    description: 'Our design team creates intuitive, beautiful interfaces that enhance user experience and drive engagement with your digital products.'
  }, {
    id: 'custom',
    title: 'Custom Software',
    description: 'We develop bespoke software solutions tailored to your specific business needs and challenges.'
  }];
  return <section className="w-full py-16 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-2">
          {services.map(service => <ServiceItem key={service.id} title={service.title} description={service.description} isOpen={openService === service.id} toggle={() => setOpenService(openService === service.id ? null : service.id)} />)}
        </div>
      </div>
    </section>;
};
export default Services;