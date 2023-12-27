import React from 'react'
import Container from '../Container'
import Image from '../Image'
import WallClock from '../../assets/wallClock.png'
import Heading from '../Heading'
import Button from '../Button'

const Phone = () => {
  return (
    <section className="pt-[130px] bg-[#FFFF]">
        <Container>
            <div className="h-[370px] w-[100%] relative">
                <Image className="w-[100%] h-[100%]" src={WallClock}/>
                <div className="w-[513px] pt-[249px] pb-[72px] absolute bottom-[0px] left-[693px]">
                    <Heading className="font-DM font-bold text-[#262626] text-[40px] pb-[32px]" text="Phone of the year" as="h3"/>
                    <Heading className="pb-[53px] text-rgba(38, 38, 38, 0.70); font-regular font-DM text-[16px]" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum.." as="h3"/>
                    <Button className="py-[16px] px-[58px]" text="Shop Now"/>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Phone