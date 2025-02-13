import React from 'react'
import { navItems } from '@/data'
import { FloatingNav } from './ui/FloatingNavbar'

const Navbar = () => {
  return (
 <header>
    <FloatingNav navItems={navItems} />
 </header>
  )
}

export default Navbar