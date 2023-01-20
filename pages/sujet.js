import { useRouter } from 'next/router'
import FacebookComments from '../components/FacebookComments/FaceboookComments'

export default function Page({url}) {
  let router = useRouter()
  url && console.log(url)
  return (
    <>
      <FacebookComments url={"http://localhost:3000/sujet"}/>
    </>
  )
}
