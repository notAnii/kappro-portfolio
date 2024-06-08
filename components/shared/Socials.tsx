import Link from 'next/link'
import { ImInstagram, ImYoutube} from 'react-icons/im'

type Props = {}

const Socials = (props: Props) => {
  return (
    <div className='hidden xl:flex ml-24'>
      <ul className="flex gap-x-4">
        <li>
          <Link href='https://www.instagram.com/kp.uae/'>
            <ImInstagram />
          </Link>
        </li>
        <li>
          <Link href='https://www.instagram.com/kp.uae/'>
            <ImYoutube />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Socials