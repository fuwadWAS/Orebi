import React from 'react'

const Price = ({className,text}) => {
  return (
    <div className={`${className} font-DM font-regular text-[#767676] text-[16px] leading-[36px]`}>{text}</div>
  )
}

export default Price