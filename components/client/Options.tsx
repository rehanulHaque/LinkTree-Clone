"use client"
import { useState } from 'react'
import { Button } from '../ui/button'
import { MoreVertical } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'

export default function ShowHide({id, show}: {id: string, show: Boolean}) {
    
  return (
    <DropdownMenu>
    <DropdownMenuTrigger className="border border-slate-300 rounded-md px-4 py-2 outline-none">
    <MoreVertical className='h-4 w-4'/>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>Options</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}
