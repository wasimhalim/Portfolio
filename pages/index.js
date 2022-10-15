import Head from 'next/head'
import { useState } from 'react';
import Contact from '../components/Contact';
import CopyWrite from '../components/CopyWrite';
import HomePage from '../components/Home'
import Projects from '../components/Projects';
import Skills from '../components/Skills';
export default function Home() {
  
 
  return (
    <div className='scroll-smooth'>
    <Head>
      <title>Portfolio</title>
      <meta name="description" content="Web Developer" />
      <meta name="keywords" content="Web Developer, Software Developer, Backend Developer, Frontend Developer,Freelancer,Content management system (CMS) creator" />
      <meta name="author" content="Mohammad Wasim Halim" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
        <HomePage />
        <Skills />
        <Projects />
        <Contact />
        <CopyWrite />
    </div>
  )
}
