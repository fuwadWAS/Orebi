import React from 'react'
import Container from '../Container'
import Paragraph from '../Paragraph'
import Flex from '../Flex'
import Level from '../Level'
import Input from '../Input'
import Button from '../Button'
import Header from '../Header'
import SubHeader from '../SubHeader'



const Login = () => {
  return (
    <section className='pt-[124px] pb-[140px]'>
        <Container>
            <div className=" pb-[127px]">
                <Header text="Login"/>
            </div>
            <div className="border-b-2 border-[#D8D8D8] pb-[62px]">
              <Paragraph className="w-[644px] pr-[20px]" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."/>
            </div>
            <div className="mt-[57px] border-b-2 border-[#D8D8D8] pb-[70px]">
               <SubHeader text="Returning Customer"/>
               <Flex className="pt-[42px] pb-[29px] gap-x-[39px]">
                   <div className="w-[508px]">
                      <Level levelName="Email address"/>
                      <Input type="email" placeholder="company@domain.com"/>
                   </div>
                   <div className="w-[508px]">
                      <Level levelName="Password"/>
                      <Input type="Password" placeholder="..........."/>
                   </div>
               </Flex>
               <Button className="w-[200px] py-[16px] px-[65px] mt-[30px]" text="Login"/>
            </div>
            <div className="w-[645px] mt-[58px]">
                 <SubHeader text="New Customer"/>
                 <Paragraph className="pr-[20px] pt-[38px] pb-[51px]" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."/>
                 <Button className="w-[200px] py-[16px] px-[65px] mt-[30px]" text="Countinue"/>
               </div>
        </Container>
    </section>
  )
}

export default Login