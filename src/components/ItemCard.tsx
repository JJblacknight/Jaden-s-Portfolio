"use client";

import React from 'react'
import { Badge } from '@/components/navigation/ui/badge';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';


type Props = {
    children:React.ReactNode;
    image: string;
    title: string;
    description: string;
    tags: string[];
    extraInfo: string;
}

export default function ItemCard({image,title,description,tags,extraInfo}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="w-full flex flex-col gap-2">
        {/* Main Item Button */}
    <button 
    onClick = {toggleDropdown}
    className="flex justify-start items-center w-full h-full flex-1 gap-4 p-2 text-left" >
        <div className = "flex flex-col justify-center items-center h-full">
            <img src={image} alt={title} className = "w-16 h-16 object-cover rounded-lg" />
        </div>     
        <div className = "flex flex-col justify-center items-start w-full h-full gap-2 flex-1 flex-grow">
            <span className="text-sm">
                <span className = "text-base fontsemibold">{title}</span>
                {" - "}
                {description}
            </span>
            <span className="flex justify-start items-center gap-1 opacity-60">
         
                {tags.map((tag, index) =>(
                    <Badge key={tag+index}  className ="z-10"
                    >
                        {tag}
                    </Badge>
                    
                
                ))}
               
            </span>
        </div>
        <div className="p-2 pr-4">
          {isOpen ? <ChevronDown /> : <ChevronRight />}
        </div>
    </button>
          {/* Drop-Down Content */}
          {isOpen && (
        <div className="bg-gray-50 p-4 rounded-lg shadow-inner text-sm">
          {/* Render extraInfo and handle newlines/markdown */}
          <div
            className="whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: extraInfo.replace(/\n/g, "<br />") }}
          />
        </div>
      )}
    </div>
 )
}