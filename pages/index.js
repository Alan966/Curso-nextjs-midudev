import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'
import PageLayout from '../Components/PageLayout'
import { useState, useEffect } from 'react'


export default function Home() {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=tesla&from=2022-07-20&sortBy=publishedAt&apiKey=400562fcc76d4ad6944fa59a6de2542d`)
    .then( res => res.json())
    .then(response => {
      const { articles } = response
      setArticles(articles)
    })
  }, [])

  return (
    <PageLayout title='NewsApp - Home'>
      <div className={styles.container}>
    <Head>
      <title> </title>
    </Head>
      { articles.length === 0 && <p>Loading..</p>}
      { articles.length > 0 && articles.map((article, index) => (
        <div key={index}>
          <img 
          src={article.urlToImage} 
          alt={`Image for the article ${article.title}`} />
          <h2>{article.title}</h2>
          <p>{ article.description}</p>
        </div>
      ))}
    </div>
    </PageLayout>
  )
}
