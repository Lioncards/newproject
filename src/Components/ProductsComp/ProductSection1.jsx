'use client'

import React from "react"
import { useState } from "react"
import Image from "next/image"
import '@/Components/ProductsComp/ProductSection1.css'
import hills from '@/Components/Images/bg-shape-6.png'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const ProductSection1=()=>{

    return(
        <div>
            <div className="pSecDiv1">
                <p></p>
                <Image src={hills} className="pSecDivImg1"/>
                <ul>
                    <li className="pSecDivli1">Shop Layout</li>
                    <li className="pSecDivli2">Home<MdKeyboardDoubleArrowRight />Page<MdKeyboardDoubleArrowRight />Grid</li>
                </ul>
            </div>

            <div>
                <div>
                    <h3>Search Now</h3>
                    <input/>
                    <h3>Categories</h3>

                    <h3>Filter by Price</h3>

                    <button>Filter</button>

                    
                </div>
            </div>
        </div>
    )
}

export default ProductSection1