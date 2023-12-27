import React from 'react'

const Badge = ({text,className}) => {
  return (
   <div className={`${className} font-DM font-bold text-[#FFF] text-[14px] bg-[#262626] text-center `}>{text}</div>
  )
}

export default Badge