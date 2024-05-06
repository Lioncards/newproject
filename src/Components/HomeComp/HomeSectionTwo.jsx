'use client'

import React from "react"
import { useState } from "react"
import { gamingChairData } from "../FurnitureModule"
import { diningSetData } from "../FurnitureModule"
import { officeTableData } from "../FurnitureModule"
import { officeDeskData } from "../FurnitureModule"
import { FaStar } from "react-icons/fa";
import './HomeSectionTwo.css'
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { FaRegShareSquare } from "react-icons/fa";
import banner1 from '../Images/product-banner-img-4.png'
import banner2 from '../Images/product-banner-img-5.png'

const HomeSectionTwo=()=>{

    const[gamingChair, setgamingChair]= useState(false)
    const[diningSet, setdiningSet]= useState(true)
    const[officeTable, setofficeTable]= useState(false)
    const[officeDesk, setofficeDesk]= useState(false)

    const showgamingChair=()=>{
        setgamingChair(true)
        setdiningSet(false)
        setofficeTable(false)
        setofficeDesk(false)
    };

    const showdiningSet=()=>{
        setgamingChair(false)
        setdiningSet(true)
        setofficeTable(false)
        setofficeDesk(false)
    };

    const showofficeTable=()=>{
        setgamingChair(false)
        setdiningSet(false)
        setofficeTable(true)
        setofficeDesk(false)
    };

    const showofficeDesk=()=>{
        setgamingChair(false)
        setdiningSet(false)
        setofficeTable(false)
        setofficeDesk(true)
    };


    return(
        <div>
            <div className="relativeDiv">
                <div className="sectionTwoOne">
                    <h2>Feature Collections</h2>
                    <p>Globally drive principle-centered strategic theme areas vis-a-vis goal- <br/>
                        oriented best practices state of the Dynamically.</p>
                </div>

                <div className="sectionTwoTwo">
                    <div className="chairButton">

                        {gamingChair===true?(
                        <p onClick={showgamingChair} style={{color:'orange'}}>Gaming Chair<sup>12</sup></p>
                        ):(
                        <p onClick={showgamingChair} style={{borderBottom:0}}>Gaming Chair<sup>12</sup></p>
                        )}
                        
                        {diningSet===true?(
                        <p onClick={showdiningSet} style={{color:'orange'}}>Dining Set<sup>10</sup></p>
                        ):(
                        <p onClick={showdiningSet} style={{borderBottom:0}}>Dining Set<sup>10</sup></p>
                        )}
                        
                        {officeTable===true?(
                        <p onClick={showofficeTable} style={{color:'orange'}}>Office Table<sup>20</sup></p>
                        ):(
                        <p onClick={showofficeTable} style={{borderBottom:0}}>Office Table<sup>20</sup></p>
                        )}
                        
                        {officeDesk===true?(
                        <p onClick={showofficeDesk} style={{color:'orange'}}>Office Desk<sup>09</sup></p>
                        ):(
                        <p onClick={showofficeDesk} style={{borderBottom:0}}>Office Desk<sup>09</sup></p>
                        )}
                        
                    </div>

                    <div className="furnitureBtn">
                        <p>All Furniture</p>
                        <FaArrowRight className="furnitureBtn2" />
                    </div>
                </div>

                <hr className="furnLine"/>

                {gamingChair &&(
                                    <div className="furnitureCard" data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="300"
                                    data-aos-offset="0">
                                    {gamingChairData.map((i,index)=>(
                                    <div key={index} className="furnCardDiv">
                                        <Image src={i.image} className="furnCardDivImage"/>
                
                                        <div className="furnCardDiv1">
                                            <p>{i.chairtype}</p>
                                            <h3>{i.chairName}</h3>
                
                                            <div className="furnCardDivIcon">
                                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                            </div>
                                            
                                            <div className="furnCardDiv2">
                                                <p>{i.price}</p>
                                                <button>Add to Cart</button>
                                            </div>
                                        </div>

                                        <div className="furnIcons">
                                            <p><FaRegHeart /></p>
                                            <p><FaRegEye /></p>
                                            <p><FaRegShareSquare /></p>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                
                )}

                {diningSet &&(
                                    <div className="furnitureCard" data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="300"
                                    data-aos-offset="0">
                                    {diningSetData.map((i,index)=>(
                                    <div key={index} className="furnCardDiv">
                                        <Image src={i.image} className="furnCardDivImage"/>
                
                                        <div className="furnCardDiv1">
                                            <p>{i.chairtype}</p>
                                            <h3>{i.chairName}</h3>
                
                                            <div className="furnCardDivIcon">
                                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                            </div>
                                            
                                            <div className="furnCardDiv2">
                                                <p>{i.price}</p>
                                                <button>Add to Cart</button>
                                            </div>
                                        </div>

                                        <div className="furnIcons">
                                            <p><FaRegHeart /></p>
                                            <p><FaRegEye /></p>
                                            <p><FaRegShareSquare /></p>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                
                )}

                {officeTable &&(
                                    <div className="furnitureCard" data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="300"
                                    data-aos-offset="0">
                                    {officeTableData.map((i,index)=>(
                                    <div key={index} className="furnCardDiv">
                                        <Image src={i.image} className="furnCardDivImage"/>
                
                                        <div className="furnCardDiv1">
                                            <p>{i.chairtype}</p>
                                            <h3>{i.chairName}</h3>
                
                                            <div className="furnCardDivIcon">
                                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                            </div>
                                            
                                            <div className="furnCardDiv2">
                                                <p>{i.price}</p>
                                                <button>Add to Cart</button>
                                            </div>
                                        </div>

                                        <div className="furnIcons">
                                            <p><FaRegHeart /></p>
                                            <p><FaRegEye /></p>
                                            <p><FaRegShareSquare /></p>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                
                )}

                {officeDesk &&(
                                    <div className="furnitureCard" data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="300"
                                    data-aos-offset="0">
                                    {officeDeskData.map((i,index)=>(
                                    <div key={index} className="furnCardDiv">
                                        <Image src={i.image} className="furnCardDivImage"/>
                
                                        <div className="furnCardDiv1">
                                            <p>{i.chairtype}</p>
                                            <h3>{i.chairName}</h3>
                
                                            <div className="furnCardDivIcon">
                                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                            </div>
                                            
                                            <div className="furnCardDiv2">
                                                <p>{i.price}</p>
                                                <button>Add to Cart</button>
                                            </div>
                                        </div>

                                        <div className="furnIcons">
                                            <p><FaRegHeart /></p>
                                            <p><FaRegEye /></p>
                                            <p><FaRegShareSquare /></p>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                
                )}

                <div className="megamega">
                    <div className="megamega10">
                        <div>
                            <Image src={banner1} className="mega10img"/>
                        </div>

                        <div className="mega10">
                            <p className="ppp1">MEGA SALE <span>65% OFF</span></p>
                            <h2>New Sofa Collections</h2>
                            <p className="pppp">Assertively target market-driven intellectual capital<br/>
                                 free text quiz Bibendum holistic.</p>
                            <button className="mega12drop">Shop Now  <FaArrowRight/></button>
                        </div>
                    </div>

                    <div className="megamega20">
                        <div>
                            <Image src={banner2} className="mega10img"/>
                        </div>

                        <div className="mega20">
                            <p className="ppp1">MEGA SALE <span>65% OFF</span></p>
                            <h3>Chair Collection</h3>
                            <button className="mega14drop">Shop Now<FaArrowRight/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSectionTwo