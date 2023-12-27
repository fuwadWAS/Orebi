import React from 'react'
import Image from '../Image'
import BannerBg from '../../assets/banner.png'
import Heading from '../Heading'
import Button from '../Button'


const Banner = () => {
  return (
    <section className="relative w-[100%]">
        <Image src={BannerBg}/>
        <div className="w-[286px] pt-[470px] pb-[72px] absolute left-[293px] bottom-[93px]">
            <Heading className="font-DM font-bold text-[#262626] text-[40px] pb-[32px]" text="Final Offer" as="h3"/>
            <Heading className="pb-[53px] text-rgba(38, 38, 38, 0.70); font-regular font-DM text-[16px]" text="Up to 50% sale for all furniture items!" as="h3"/>
            <Button className="py-[16px] px-[58px]" text="Shop Now"/>
        </div>
    </section>
  )
}

export default Banner