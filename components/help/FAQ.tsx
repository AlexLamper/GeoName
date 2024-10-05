import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const FAQ = () => {
  return (
    <div className='lg:max-w-[70%] md:max-w-[80%] max-w-[85%] rounded-lg mx-auto flex flex-col md:flex-row lg:mb-16 my-0'>
      <div className='w-full p-4'>
        <div className='mb-12 mt-24'>
          <h1 className="lg:text-5xl text-4xl font-bold font-outfit mb-12 max-w-[80%] mx-auto text-center">
            Frequently Asked <span style={{ color: '#1A5319' }}>Questions</span>
          </h1>
          <div className='space-y-6 lg:max-w-[80%] max-w-[95%] mx-auto'>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className='text-xl font-roboto font-medium'>How do I earn points?</AccordionTrigger>
                    <AccordionContent className='opacity-80 text-lg font-roboto'>
                    You earn points by correctly answering quiz questions. The more questions you answer, the higher you’ll climb on the leaderboard!
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className='text-xl font-roboto font-medium'>How do I access different regions?</AccordionTrigger>
                    <AccordionContent className='opacity-80 text-lg font-roboto'>
                    Simply select a country, and you will have the option to narrow down your quiz by region or play the entire country.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className='text-xl font-roboto font-medium'>Can I compete with friends?</AccordionTrigger>
                    <AccordionContent className='opacity-80 text-lg font-roboto'>
                    Yes! You can compare your scores with others on the leaderboard and even see where you rank globally.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
