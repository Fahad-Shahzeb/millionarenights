import React, { useState } from 'react';

const DashIcon = () => {
  return (
    <svg
      width='20'
      height='2'
      viewBox='0 0 20 2'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='20' height='2' fill='#D9D9D9' />
    </svg>
  );
};

const AddIcon = () => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M0 9H20V11H0V9Z' fill='#D9D9D9' />
      <path d='M11 8.74224e-08L11 20H9L9 0L11 8.74224e-08Z' fill='#D9D9D9' />
    </svg>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: <p >HOW DO I BUY A <span className='font-bold'>ŠMILLIONAIRE<span className='texttualgradient'>NIGHTS</span> </span> TOKEN?</p>,
      // 'HOW DO I BUY A ŠMILLIONAIRE NIGHTSTOKEN?',
      answer:
        'SMillion Aire can only be purchased on our official website [Image of ŠMILLIONAIRENIGHTS website] with BNR ETH USDT KERC-20) USDC (ERC-20) BUSD (BEP-20)L USDI (BEP-20).or.credit card at our partner through Transak',
    },
    {
      question: <p>WHAT IS THE DIFFERENCE BETWEEN <span className='font-bold'>ŠMILLIONAIRE<span className='texttualgradient'>NIGHTS</span> </span> AND OTHER DATING PLATFORMS?</p>,
      answer:
        'SMillion Aire is a new dating platform that focuses on connecting people with similar financial goals. It is different from other dating platforms in that it offers a variety of features that are specifically designed for millionaires and billionaires, such as a luxury marketplace and a private jet service.',
    },
    {
      question: 'WHEN DO I GET PAID?',
      answer:
        'You will be paid out on the first of each month, directly to your bank account.',
    },
    {
      question: <p>WHAT MAKES <span className='font-bold'>ŠMILLIONAIRE<span className='texttualgradient'>NIGHTS</span> </span> SUSTAINABLE IN THE LONG-TERM?</p>,
      answer:
        "SMillion Aire is sustainable in the long-term because it is based on a subscription model. This means that users pay a monthly fee to access the platform's features. This revenue stream will allow SMillion Aire to continue to invest in its platform and grow its user base.",
    },
    {
      question: 'IS THERE AN APP FOR DATING?',
      answer:
        'Yes, there is a SMillion Aire app for both iOS and Android devices.',
    },
    {
      question: 'WHEN WILL THE LUXURY MARKETPLACE BE AVAILABLE?',
      answer: 'The luxury marketplace will be available in early 2024.',
    },
  ];

  return (
    <div className='mt-20 mb-28 '>
      <p className='text-white text-[42px] mb-12 font-normal uppercase text-center'>FAQ</p>
      <div className='w-[90%] md:w-[75%]  mx-auto  flex flex-col gap-5'>
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export { FAQ };

const FAQItem = ({ question, answer }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='relative '>
      <div className='flex w-full gap-3 flex-col text-white'>
        <p className='w-[90%] md:w-full text-base md:text-lg font-normal' onClick={() => setOpen(!open)}>
          {question}
        </p>
        {!open && <div className='w-full h-[1px] bg-[#5318D1]' />}
        {open && (
          <div>
            <p className='text-sm  md:text-base font-light text-[#989898]'>{answer}</p>
          </div>
        )}
      </div>
      <span
        onClick={() => setOpen(!open)}
        className='absolute right-2 top-1 cursor-pointer'
      >
        {open ? <DashIcon /> : <AddIcon />}
      </span>
    </div>
  );
};
