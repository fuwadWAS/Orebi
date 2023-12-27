
import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Phones  from '../../assets/phones.png'
import Heading  from '../Heading'
import Electronic  from '../../assets/electronic.png'
import Furniture  from '../../assets/furniture.png'

import Button from '../Button'

const Discount = () => {
  return (
    <section className=" bg-[#FFFFFF] pt-[140px]">
        <Container>
            <Flex className="gap-x-[40px] ">
                <div className="w-[780px] h-[780px] relative shadow-xl">
                    <Image className="w-[100%] h-[100%]" src={Phones}/>
                    <div className="w-[286px] pt-[470px] pb-[72px] absolute top-[0px] left-[64px]">
                        <Heading className="font-DM font-bold text-[#262626] text-[40px] pb-[32px]" text="Phones Sale" as="h3"/>
                        <Heading className="pb-[53px] text-rgba(38, 38, 38, 0.70); font-regular font-DM text-[16px]" text="Up to 30% sale for all phones!" as="h3"/>
                        <Button className="py-[16px] px-[58px]" text="Shop Now"/>
                    </div>
                </div>
                <div className="">
                    <div className="w-[784px] h-[368px] relative mb-[40px] shadow-xl">
                        <Image className="w-[100%] h-[100%]" src={Electronic}/>
                        <div className="w-[313px] pt-[64px] pb-[66px] absolute top-[0px] left-[64px]">
                            <Heading className="font-DM font-bold text-[#262626] text-[40px] pb-[32px]" text="Electronics Sale" as="h3"/>
                            <Heading className="pb-[53px] text-rgba(38, 38, 38, 0.70); font-regular font-DM text-[16px]" text="Up to 70% sale for all phones!" as="h3"/>
                            <Button className="py-[16px] px-[58px]" text="Shop Now"/>
                        </div>
                    </div>
                    <div className="w-[784px] h-[368px] relative shadow-xl">
                        <Image className="w-[100%] h-[100%]" src={Furniture}/>
                        <div className="w-[313px] pt-[64px] pb-[66px] absolute top-[0px] left-[64px]">
                            <Heading className="font-DM font-bold text-[#262626] text-[40px] pb-[32px]" text="Furniture Offer" as="h3"/>
                            <Heading className="pb-[53px] text-rgba(38, 38, 38, 0.70); font-regular font-DM text-[16px]" text="Up to 50% sale for all phones!" as="h3"/>
                            <Button className="py-[16px] px-[58px]" text="Shop Now"/>
                        </div>
                    </div>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Discount