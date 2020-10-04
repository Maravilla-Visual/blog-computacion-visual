import Head from 'next/head'
import dynamic from 'next/dynamic'
import styles from '../styles/Home.module.css'

const TestP5 = dynamic(
  () => import('./MySketch'),
  { ssr: false }
)

export default function Home() {

  return (
    <div className={styles.container}>
      <h1> Test 2 </h1>
      <TestP5 />
    </div>
  )
}
