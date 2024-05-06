'use client'

import {useState} from 'react'
import React from 'react'
import HomeSectionOne from '@/Components/HomeComp/HomeSectionOne'
import HomeSectionTwo from '@/Components/HomeComp/HomeSectionTwo'
import HomeSectionThree from '@/Components/HomeComp/HomeSectionThree'
import HomeSectionFour from '@/Components/HomeComp/HomeSectionFour'


const page=()=>{


  return(
    <section>
      <HomeSectionOne/>
      <HomeSectionTwo/>
      <HomeSectionThree/>
      <HomeSectionFour/>

    </section>
  )
}

export default page