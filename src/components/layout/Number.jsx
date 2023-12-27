import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import { FaSearch } from "react-icons/fa";
import Button from '../Button';

const Number = () => {
  return (
    <section className='mt-[81px] mb-[140px]'>
        <Container>
            <div className="w-[652px]">
                <Heading className="font-DM font-bold text-[#262626] text-[200px] " text="404" as="h1"/>
                <Paragraph text="The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?"/>
                <div className="relative mt-[50px] mb-[60px]">
                  <input type='text' placeholder='Type to search' className='w-[643px] h-[71px] px-[21px] border-2  border-[#D8D8D8] '></input>
                  <FaSearch className="absolute top-[26px] right-[31px]"/>
                </div>
                <Button className="py-[16px] px-[50px]" text="Back to Home"/>
            </div>
        </Container>
    </section>
  )
}

export default Number