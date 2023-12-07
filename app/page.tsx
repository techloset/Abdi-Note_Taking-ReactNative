import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import User from './(components)/User'
import Signout from './(components)/Signout'
import Link from 'next/link'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <section>
      <h1>Home</h1>
      <h1>Server Side Rendered</h1>
      <pre>{JSON.stringify(session)}</pre>
      <h1>Client Side Rendered</h1>
      <User />
      {session? <Signout/>
      :<Link href={'/api/auth/signin'}>Login</Link>

      }
    </section>
  )
}
