import Nav from './Nav'
import Head from 'next/head'
import Top from './Top'

const Layout = ({children}) => {
  return (
    <>
      <Top />
      <Nav />
      <div>
        {/* index.js 및 photos.js가 들어감 */}
        {children}   
      </div>

    </>
  )
}

export default Layout