// import { Inter } from 'next/font/google'
import React from 'react';
import Format from '../../layout/format';


// const inter = Inter({ subsets: ['latin'] })

//My components
import Section1 from '../../components/section1';

export default function Home() {
  return (
    <Format>
    <Section1/>
    </Format>
  )
}
