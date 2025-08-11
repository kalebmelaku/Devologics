import React, { useState } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'
const FAQItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border-b border-gray-200 py-6">
      <button 
        className="flex w-full justify-between items-center text-left"
        onClick={toggle}
      >
        <h3 className="font-semibold">{question}</h3>
        {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  )
}
const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState('plans')
  const faqs = [
    {
      id: 'plans',
      question: 'Can I switch plans?',
      answer: 'Yes, you can upgrade, downgrade or cancel your plan at any time. If you upgrade, you'll be charged the prorated amount for the rest of your billing cycle. If you downgrade, you'll receive credit for your next billing cycle.'
    },
    {
      id: 'team',
      question: 'How many team members can I invite?',
      answer: 'The number of team members you can invite depends on your plan. The Free plan allows up to 5 members, Pro plan up to 50 members, and Business plan has unlimited team members.'
    },
    {
      id: 'support',
      question: 'What kind of support do you offer?',
      answer: 'We offer different levels of support based on your plan. Free plans include basic email support. Pro plans include priority email and chat support. Business plans include dedicated account managers and priority phone support.'
    },
    {
      id: 'cancel',
      question: 'Can I cancel my subscription?',
      answer: 'Yes, you can cancel your subscription at any time. When you cancel, you'll have access to your account until the end of your current billing cycle.'
    }
  ]
  return (
    <section className="w-full py-16 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {faqs.map(faq => (
            <FAQItem 
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFAQ === faq.id}
              toggle={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
export default FAQ