import Head from 'next/head'

const HeadInfo = ({title, keyword, contents}) => {
  return (
    <Head>
        <title>{title}</title>  
        <meta keyword={keyword} />
        <meta contents={contents} />
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css"/>
      </Head>
  )
}

HeadInfo.defaultProps = {
  title: 'My Blog',
  keyword: 'Blog powered by Next js',
  contents: 'practice next js'
}

export default HeadInfo