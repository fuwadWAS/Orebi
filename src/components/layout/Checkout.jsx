import React from 'react'
import Container from '../Container'
import Header from '../Header'
import Paragraph from '../Paragraph'
import SubHeader from '../SubHeader'
import Flex from '../Flex'
import Level from '../Level'
import Input from '../Input'
import Heading from '../Heading'
import Button from '../Button'

const Checkout = () => {
  return (
    <section className='pt-[124px] pb-[140px]'>
        <Container>
            <Header text="Checkout"/>
            <Paragraph className="pt-[127px]" text="Have a coupon? Click here to enter your code"/>
            <div className="mt-[119px]">
                <SubHeader text="Billing Details"/>
                <div className="mt-[42px] w-[1055px]">
                    <Flex className="gap-x-[39px]">
                        <div className="mb-[23px] w-[508px]">
                            <Level levelName="First Name *"/>
                            <Input type="text" placeholder="First Name "/>
                        </div>
                        <div className="mb-[23px] w-[508px]">
                            <Level levelName="Last Name *"/>
                            <Input type="text" placeholder="Last Name"/>
                        </div>
                    </Flex>
                    <div className="mb-[23px]">
                        <Level levelName="Companye Name (optional)"/>
                        <Input type="text" placeholder="Company Name"/>
                    </div>
                    <div className="mb-[23px]">
                        <Level levelName="Country *"/>
                        <Input type="text" placeholder="Please select"/>
                    </div>
                    <div className="mb-[23px]">
                        <Level levelName="Street Address *"/>
                        <Input className="mb-[16px]" type="text" placeholder="House number and street name"/>
                        <Input type="text" placeholder="Apartment, suite, unit etc. (optional)"/>
                    </div>
                    <div className="mb-[23px]">
                        <Level levelName="Town/City *"/>
                        <Input type="text" placeholder="Town/City"/>
                    </div>
                    <div className="mb-[23px]">
                        <Level levelName="County (optional)"/>
                        <Input type="text" placeholder="County"/>
                    </div>
                    <div className="mb-[23px]">
                        <Level levelName="Post Code *"/>
                        <Input type="text" placeholder="Post Codet"/>
                    </div>
                    <div className="mb-[23px]">
                        <Level levelName="Phone *"/>
                        <Input type="text" placeholder="Phone"/>
                    </div>
                    <div className="mb-[23px]">
                        <Level levelName="Email Address *"/>
                        <Input type="text" placeholder="Email"/>
                    </div>
                </div>
            </div>
            <div className="w-[1055px] mt-[129px] border-b-2 border-[#F0F0F0] pb-[86px]">
                <SubHeader text="Additional Information"/>
                <Heading className="font-bold font-DM text-[16px] text-[#262626] pt-[42px] pb-[10px]" text="Other Notes (optional)" as="h3"/>
                <Paragraph className="text-[14px]" text="Notes about your order, e.g. special notes for delivery."/>
            </div>
            <div className="mt-[129px]">
                <SubHeader text="Your Order"/>
                <table className='w-[644px] mt-[48px]'>
                  <tr className=''>
                    <td className='border-2 py-[15px] px-[20px] font-bold font-DM text-[16px] text-[#262626]'>Product</td>
                    <td className='w-[322px] border-2 py-[15px] px-[20px] font-regular font-DM text-[16px] text-[#767676]'>Total</td>
                  </tr>
                  <tr className=''>
                    <td className='border-2 py-[15px] px-[20px] font-bold font-DM text-[16px] text-[#262626]'>Product name x 1</td>
                    <td className='w-[322px] border-2 py-[15px] px-[20px] font-regular font-DM text-[16px] text-[#767676]'>389.99 $$</td>
                  </tr>
                  <tr>
                    <td className='border-2 py-[15px] px-[20px] font-bold font-DM text-[16px] text-[#262626]'>Subtotal</td>
                    <td className='w-[322px] border-2 py-[15px] px-[20px] font-regular font-DM text-[16px] text-[#262626]'>389.99 $$</td>
                  </tr>
                  <tr>
                    <td className='border-2 py-[15px] px-[20px] font-bold font-DM text-[16px] text-[#262626]'>Total</td>
                    <td className='w-[322px] border-2 py-[15px] px-[20px] font-regular font-DM text-[16px] text-[#262626]'>389.99 $</td>
                  </tr>
               </table>
                <div className="w-[1053px] px-[34px] mt-[60px] pt-[24px] pb-[30px] border-2 border-[#F0F0F0]">
                   <div className="flex gap-x-[15px] group">
                     <input className='group-hover:text-red-500' type="radio" name="selected"/>
                     <Paragraph className="text-[14px] font-bold group-hover:text-[#262626]" text="Bank"/>
                   </div>
                   <Paragraph className="text-[14px] py-[17px] px-[26px] bg-[#F5F5F3]" text="Pay via Bank; you can pay with your credit card if you don’t have a Bank account."/>
                   <div className="flex gap-x-[15px] mb-[15px]">
                     <input type="radio" name="selected"/>
                     <Paragraph className="text-[14px] font-bold" text="Bank 2"/>
                   </div>
                   <Paragraph className="text-[14px] pr-[20px]" text="Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy."/>
                   <Button className="w-[200px] py-[16px] mt-[24px]" text="Proceed to Bank"/>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Checkout