
import { getServerSession } from 'next-auth'


  

export default async function Home() {
  const session = await getServerSession();


  return (
    <>
    getServerSession Result 
    {
      session?.user?.name ?(
        <><div>{session?.user?.name}</div>
        <div>{session?.user?.email}</div>
        <div>{session?.user?.image}</div>
        </>
      ):(
        <div>Not logged in</div>
      )
    }

    </>
  )
}
