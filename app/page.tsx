import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <Card className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
      <Card className='md:flex'>
      <div className="md:shrink-0">
      <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.DtDXCz5yMJ7j4bpNSWThngHaFj%26pid%3DApi&f=1&ipt=ca9d434e7ab6baa451accf88c43527ed2972a7853535248e97a3fa1d2be96657&ipo=images" alt="Modern building architecture" />
    </div>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card Description</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Card Content</p>
    </CardContent>
    <CardFooter>
      <p>Card Footer</p>
    </CardFooter>
    </Card>
  </Card>
    </>
    
  
  )
}
