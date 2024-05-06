'use client'

import React from "react"
import { useState } from "react"
import Image from "next/image"
import { FaTags } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { recentPost } from "../FurnitureModule";
import '@/Components/HomeComp/HomeSectionFour.css'
import { FaHandPointer } from "react-icons/fa";

const HomeSectionFour=()=>{

    return(
        <div>
            <div className="article1">
                <h1>Browse Recent Post</h1>
                <p>Interactively product distinctive paradigms whereas one-to-one intellectual capital.<br/>
                     resource sucking services.</p>
            </div>

            <div className="articlePost1">
            {recentPost.map((data, index)=>(
                <div key={index} className="articlePost2">
                    <div className="arP2">
                        <Image src={data.image} className="articlePostImage" alt=""/>
                    </div>

                    <div className="articlePost30">
                        <div className="articlePost301">      
                            <p><FaTags />{data.tag}</p> 
                            <p><IoMdTime />{data.date}</p>
                        </div>

                        <div className="articlePost302">
                            <h3>{data.title}</h3>
                            <p>{data.summary}</p>
                            <button>Explore More <FaArrowRight /></button>
                        </div>
                    </div>
                </div>
            ))}
            </div>

            <p><FaHandPointer /></p>
            
        </div>
    )
}

export default HomeSectionFour