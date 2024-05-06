'use client'

import { useState } from "react"
import React from "react"
import Image from "next/image"
import './HomeSectionThree.css'
import images1 from '@/Components/Images/product-banner-img-6.png'
import images2 from '@/Components/Images/product-banner-img-7.png'
import { FaArrowRight } from "react-icons/fa6";
import { brandProducts10 } from "../FurnitureModule"
import { brandProducts20 } from "../FurnitureModule"
import { FaStar } from "react-icons/fa";


 const HomeSectionThree=()=>{

    return(
        <div>
            <div className="brandProductsDiv">
                <h2>Featured Brand Products</h2>
                <p>Collaboratively pursue proactive vortals whereas granular best practices Collaboratively promote <br/>
                     functional markets through process-centric users.</p>
            </div>

            <div className="brandProductsDiv2">
                <div className="brPr1">
                    {brandProducts10.map((bp, index)=>(
                        <div key={index} className="brPr11">
                            <Image src={bp.image}/>

                            <div>
                                {bp.ratings===1 &&(<p className="brPrIcons"><FaStar /></p>)}
                                {bp.ratings===2 &&(<p className="brPrIcons"><FaStar /><FaStar /></p>)}
                                {bp.ratings===3 &&(<p className="brPrIcons"><FaStar /><FaStar /><FaStar /></p>)}
                                {bp.ratings===4 &&(<p className="brPrIcons"><FaStar /><FaStar /><FaStar /><FaStar /></p>)}
                                {bp.ratings===5 &&(<p className="brPrIcons"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>)}

                                <p className="brPrName">{bp.name}</p>
                                <ul>
                                    <li className="brPrPrice1">{bp.oldPrice}</li>
                                    <li className="brPrPrice2">{bp.newPrice}</li>
                                </ul>
                                <p className="brPrbutton">Shop Now <FaArrowRight/></p>
                            </div>
                        </div>
                    ))}
                    
                </div>

                <div className="brPr2">
                    <Image src={images1}/>
                    
                    <div className="brPr21">
                        <p>UP TO <span>20% OFF</span></p>
                        <h2>Furniture</h2>
                        <button>Shop Now <FaArrowRight/></button>
                    </div>
                </div>

                <div className="brPr1">
                    {brandProducts20.map((bp, index)=>(
                        <div key={index} className="brPr11">
                            <Image src={bp.image}/>

                            <div>
                                {bp.ratings===1 &&(<p className="brPrIcons"><FaStar /></p>)}
                                {bp.ratings===2 &&(<p className="brPrIcons"><FaStar /><FaStar /></p>)}
                                {bp.ratings===3 &&(<p className="brPrIcons"><FaStar /><FaStar /><FaStar /></p>)}
                                {bp.ratings===4 &&(<p className="brPrIcons"><FaStar /><FaStar /><FaStar /><FaStar /></p>)}
                                {bp.ratings===5 &&(<p className="brPrIcons"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>)}

                                <p className="brPrName">{bp.name}</p>
                                <ul>
                                    <li className="brPrPrice1">{bp.oldPrice}</li>
                                    <li className="brPrPrice2">{bp.newPrice}</li>
                                </ul>
                                <p className="brPrbutton">Shop Now <FaArrowRight/></p>
                            </div>
                        </div>
                    ))}
                    
                </div>

            </div>

            <div className="brandProductsDiv3">

                <Image src={images2} className="brPrImage3"/>

                <div className="brPr30">
                    <h2>Subscribe Our Newsletter to <br/> 
                        Get Latest Update & News</h2>
                
                    <div className="brPr301">
                        <input type="email" placeholder="Enter Email Address"/>
                        <button>Subscribe Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
 }

export default HomeSectionThree
