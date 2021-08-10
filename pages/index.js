import Head from 'next/head'
import HeadInfo from '../components/HeadInfo'


export default function Home({posts}) {
  console.log(posts)
  return (
    <div>
      <HeadInfo/>
      <h1 style={{ textAlign: 'center' }}>작업 진행중 입니다!!!</h1>
        <div style={{ justifyContent: 'left' }}>
          <ul style={{ textAlign: 'center' }}>
            {posts.map(post => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
    </div>
   
  )
}

export const getServerSideProps = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_end=10')
  const posts = await res.json();

  return {
    props: {
      posts
    }
  }
}


// export const getStaticProps = async() => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_end=10')
//     const posts = await res.json();
  
//     return {
//       props: {
//         posts
//       },
//       revalidate: 20
//     }
//   }