import React from 'react'
import { House, Folder,Briefcase, University, Mail, CirclePlus } from "lucide-react"
import { ModeToggle } from '@/components/navigation/ui/ModeToggle'
import { Button } from './ui/button'
import Link from 'next/link'
import { data } from  "@/lib/data";

type Props = {}

export default function Navbar({}: Props) {
  return (
    <div className = "w-full h-full max-w-lg bg-primary-foreground flex justify-between items-center px-4 py-2 rounded-xl border m-4">
      <div className = "flex justify-center items-center gap-4">
      {/* Home */}
      <Link href="#home">
      <Button variant="ghost" size="icon">
      <House/>
      </Button></Link>

      {/* Projects */}
            <Link href="#projects">
            <Button variant="ghost" size="icon">
<Folder />
      </Button>  

 </Link>     {/* Experience */}
            <Link href="#experience">
            <Button variant="ghost" size="icon">
<Briefcase  />
      </Button>      </Link>

      {/* Education Section */}
            <Link href="#education">
            <Button variant="ghost" size="icon">
<University  />
      </Button>

 </Link>     {/* Contact us Section */}
            <Link href="#home">
            <Button variant="ghost" size="icon">
<Mail  />
      </Button>
  </Link>    
      </div>
    <div className="flex justify-center items-center gap-2">
      {/*  Toggle Theme */}
      <ModeToggle/>

      {/* Hire Me */}
      <Link href={data.resume}>
      <Button className="flex justify-center items-center gap-2" variant="outline"><CirclePlus className = "" />
       Hire Me
      </Button>
      </Link>
      </div>
    </div>
  )
}