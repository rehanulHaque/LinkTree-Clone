"use client"
import { useState } from 'react'
import { Button } from '../ui/button'
import { showHide } from '@/actions/shoeHide'

export default function ShowHide({id, show}: {id: string, show: Boolean}) {
    const [hide, setShow] = useState(false)
    const handelClick = async () =>{
      await showHide(String(id), Boolean(show))
      setShow(!show)
    }
  return (
    <Button onClick={handelClick} variant={hide? "outline" : "destructive"}>
      {hide ? "Show" : "Hide"}
    </Button>
  )
}
