import { Button } from './ui/button'
import Link from 'next/link'
import AddLink from './client/AddLink'
import { auth, signOut } from '@/auth'

export default async function Navbar() {
  const session = await auth()
  return (
    <nav className='p-4 bg-slate-200 flex items-center justify-between'>
      <h1 className='font-bold'>LinkTree</h1>
      <div className='flex gap-4'>
        <AddLink/>
        <Button variant={"outline"}>Analytics</Button>
        <Button variant={"outline"}>Profile</Button>
        <Link href={"/setting"}><Button variant={"outline"}>Setting</Button></Link>
      </div>
      <div>
        {session?.user ? (
          <form action={async () =>{
            "use server"
            await signOut()
          }}>
            <Button>Logout</Button>
          </form>
        ) : <Link href={'/login'}><Button>Login</Button></Link>}
      </div>
    </nav>
  )
}
