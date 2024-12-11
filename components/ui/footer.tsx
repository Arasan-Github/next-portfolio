import React from 'react'

const Footer = () => {
  return (
    <footer className='p-5 h14 bg-background bg-black text-white'>{`Made with ctrl c and ctrl v${new Date().getFullYear()}`}</footer>
  )
}

export default Footer
