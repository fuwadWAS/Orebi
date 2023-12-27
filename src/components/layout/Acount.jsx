import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Header from '../Header'
import Paragraph from '../Paragraph'

const Count = () => {
  return (
    <section className='pt-[124px] pb-[140px]'>
       <Container>
        <Header className="mb-[127px]" text="My Account"/>
         <Flex className="gap-x-[39px]">
           <div className="w-[234px]">
             <ul>
                <li className='pb-[19px] mb-[20px] border-b-2 border-[#F0F0F0] font-DM font-regular text-[16px] text-[#767676] leading-[30px] hover:text-[#262626] hover:font-bold'><a href="#">Dashboard</a></li>
                <li className='pb-[19px] mb-[20px] border-b-2 border-[#F0F0F0] font-DM font-regular text-[16px] text-[#767676] leading-[30px] hover:text-[#262626] hover:font-bold'><a href="#">Others</a></li>
                <li className='pb-[19px] mb-[20px] border-b-2 border-[#F0F0F0] font-DM font-regular text-[16px] text-[#767676] leading-[30px] hover:text-[#262626] hover:font-bold'><a href="#">Donwloads</a></li>
                <li className='pb-[19px] mb-[20px] border-b-2 border-[#F0F0F0] font-DM font-regular text-[16px] text-[#767676] leading-[30px] hover:text-[#262626] hover:font-bold'><a href="#">Addresses</a></li>
                <li className='pb-[19px] mb-[20px] border-b-2 border-[#F0F0F0] font-DM font-regular text-[16px] text-[#767676] leading-[30px] hover:text-[#262626] hover:font-bold'><a href="#">Account details</a></li>
                <li className='pb-[19px] mb-[20px] border-b-2 border-[#F0F0F0] font-DM font-regular text-[16px] text-[#767676] leading-[30px] hover:text-[#262626] hover:font-bold'><a href="#">Logout</a></li>
             </ul>
             
          </div>
          <div className="w-[918px]">
            <Paragraph text="Hello admin  (not admin? Log out)

             From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details."/>
            
          </div>
         </Flex>
       </Container>
    </section>
  )
}

export default Count
