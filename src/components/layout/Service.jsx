import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Two from '../icons/Two'
import Free from '../icons/Free'
import Return from '../icons/Return'
import Heading from '../Heading'

const Service = () => {
  return (
   <section className="py-[30px] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.3)] relative">
      <Container className="">
        <Flex className="justify-between">
          <Flex className="gap-x-[15px]">
            <Two/>
            <Heading text="Two years warranty" as="h3"/>
          </Flex>
          <Flex className="gap-x-[15px]">
            <Free/>
            <Heading text="Free shipping" as="h3"/>
          </Flex>
          <Flex className="gap-x-[15px]">
            <Return/>
            <Heading text="Return policy in 30 days" as="h3"/>
          </Flex>
        </Flex>
      </Container>
   </section>
  )
}

export default Service

