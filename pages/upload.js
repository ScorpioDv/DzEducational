import { useRouter } from 'next/router'
import FacebookComments from '../components/FacebookComments/FaceboookComments'

export default function Page() {
  let url = "localhost:3000/upload"
  return (
    <>
      <FacebookComments url={undefined}/>
    </>
  )
}
