"use client"
import { updateBio } from '@/actions/bio'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { useState } from 'react'

export default function BioForm({bio}: {bio: string}) {
    const [bioText, setBioText] = useState("")
  return (
    <div className='my-4'>
        <form action={() => updateBio(bioText)} className='flex gap-3'>
            <Input placeholder={bio} name='bio' value={bioText} onChange={(e) => setBioText(e.target.value)}/>
            <Button>Save</Button>
        </form>
    </div>
  )
}
