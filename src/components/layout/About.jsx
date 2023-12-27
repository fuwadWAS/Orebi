import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import Image from '../Image'
import Clock1 from '../../assets/clock1.png'
import Basket from '../../assets/basket.png'
import Badge from '../Badge'
import Paragraph from '../Paragraph'
import Header from '../Header'


const About = () => {
  return (
    <section className='pt-[124px] pb-[131px]'>
        <Container>
            <Header text="About"/>
           
            <Flex className="mt-[136px] ">
                <div className="w-[827px] h-[827px] relative">
                    <Image className="w-[100%] h-[100%]" src={Clock1}/>
                     <Badge className="py-[27px] px-[97px] w-[281px] absolute bottom-[62px] left-[250px] " text="Our Brands"/>
                </div>
                <div className="w-[827px] h-[827px] relative">
                    <Image className="w-[100%] h-[100%]" src={Basket}/>
                     <Badge className="py-[27px] px-[97px] w-[281px] absolute bottom-[62px] left-[250px] " text="Our Brands"/>
                </div>
            </Flex>
            <Heading className="font-regular font-DM text-[#262626] text-[39px] leading-[52px] pt-[112px] pb-[118px]" text="Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style." as="h2"/>
            <Flex  className="justify-between">
                <div className="w-[506px]">
                    <Heading className="font-DM font-bold text-[#262626] text-[25px] leading-[36px] pb-[11px]" text="Our Vision" as="h3"/>
                    <Paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."/>
                </div>
                <div className="w-[506px]">
                    <Heading className="font-DM font-bold text-[#262626] text-[25px] leading-[36px] pb-[11px]" text="Our Story" as="h3"/>
                    <Paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."/>
                </div>
                <div className="w-[506px]">
                    <Heading className="font-DM font-bold text-[#262626] text-[25px] leading-[36px] pb-[11px]" text="Our Brands" as="h3"/>
                    <Paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default About