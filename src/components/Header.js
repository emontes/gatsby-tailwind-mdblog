import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Wrapper className="bg-green-900 text-gray-100 pt-16 pb-10 text-center">
      <h1 className="font-semibold font-rammetto lg:text-5xl sm:text-4xl text-2xl pb-4">
        Welcome to the Test Blog
      </h1>
      <p className=" lg:text-2xl sm:text-lg text-sm font-light">
        Your one stop blog for health and fitness information
      </p>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header``
