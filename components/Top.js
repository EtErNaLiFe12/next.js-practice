import Image from 'next/image';
import Link from 'next/link';
import Topstyles from '../styles/Top.module.css'

export default function Top() {
  return (
    <div className={Topstyles.top}>
      <Link href="/">
        <a>
          <Image
            style={{ margin: 50 }}
            width='200px'
            height='100px'
            src="/images/Youtube-Channel-Art-2.png"
            alt="test"
          />
        </a>
      </Link>
      <h2>Instruction page</h2>
    </div>
  )
}