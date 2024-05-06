import Image from 'next/image'
import React, { useState } from 'react'
import image1 from '../Images/hero-img-1.png'
import image2 from '../Images/hero-img-2.png'
import image3 from '../Images/hero-img-3.png'
import './HomeSectionOne.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaRegDotCircle } from "react-icons/fa";
import { TbArmchair2 } from "react-icons/tb";
import { TbSofa } from "react-icons/tb";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { MdOutlineBed } from "react-icons/md";
import { MdOutlineBrunchDining } from "react-icons/md";
import image4 from '../Images/product-banner-img-1.png'
import image5 from '../Images/product-banner-img-2.png'
import image6 from '../Images/product-banner-img-3.png'




const HomeSectionOne = () => {

  const [showSection1, setShowSection1] = useState(true)
  const [showSection2, setShowSection2] = useState(false)
  const [showSection3, setShowSection3] = useState(false)

  const handleShowSection1 = () => {
    setShowSection1(true);
    setShowSection2(false);
    setShowSection3(false)
  };


  const handleShowSection2 = () => {
    setShowSection1(false);
    setShowSection3(false);
    setShowSection2(true);
  };

  const handleShowSection3 =() =>{
    setShowSection1(false)
    setShowSection2(false)
    setShowSection3(true)
  }
  return (
    <div>
      <div className='firstSectionMain'>

        <div className='dotDiv'>
          {showSection1 === true ? (
            <p onClick={handleShowSection1} style={{color : 'orange', fontSize : 20}}><FaRegDotCircle /></p>
          ) : (
            <p onClick={handleShowSection1}><GoDotFill /></p>
          )}
          

          {showSection2 === true ? (
            <p onClick={handleShowSection2} style={{color : 'orange', fontSize : 20}}><FaRegDotCircle /></p>
          ) : (
            <p onClick={handleShowSection2}><GoDotFill /></p>
          )}

            {showSection3 ===true ? (
            <p onClick={handleShowSection3} style={{color : 'orange', fontSize : 20}}><FaRegDotCircle /></p>
            ) : (
            <p onClick={handleShowSection3}><GoDotFill /></p>
            )}
        </div>


        {showSection1 ? (

        <div className='firstSectionDiv'>
          <div className='leftAndRightDiv'>

            <div className='leftSectionOne'>
                <h2 >Unique & Stylish</h2>
                <h2 className='furnDesign'>Furniture</h2>
                <p>
                  Lorem ipsum dolor sit 
                  amet consectetur adipisicing elit.
                  Lorem ipsum dolor sit 
                  amet consectetur adipisicing elit. 
                </p>

                <button>Shop Now <FaLongArrowAltRight /></button>
            </div>

            <div className='rightSectionOne'>
              <Image src={image1}  alt='' className='images'/>
            </div>
          </div>
        </div>
        ) : showSection2 ? (

        <div className='firstSectionDiv'>
          <div className='leftAndRightDiv'>

            <div className='leftSectionOne'>
                <h2 >Unique & Stylish</h2>
                <h2 className='furnDesign'>Furniture</h2>
                <p>
                  Lorem ipsum dolor sit 
                  amet consectetur adipisicing elit.
                  Lorem ipsum dolor sit 
                  amet consectetur adipisicing elit. 
                </p>

                <button>Shop Now <FaLongArrowAltRight /></button>
            </div>

            <div className='rightSectionOne'>
              <Image src={image2}  alt='' className='images'/>
            </div>
          </div>
        </div>
        
        ):(
            <div className='firstSectionDiv'>
          <div className='leftAndRightDiv'>

            <div className='leftSectionOne'>
                <h2 >Unique & Stylish</h2>
                <h2 className='furnDesign'>Furniture</h2>
                <p>
                  Lorem ipsum dolor sit 
                  amet consectetur adipisicing elit.
                  Lorem ipsum dolor sit 
                  amet consectetur adipisicing elit. 
                </p>

                <button>Shop Now <FaLongArrowAltRight /></button>
            </div>

            <div className='rightSectionOne'>
              <Image src={image3}  alt='' className='images'/>
            </div>
          </div>
        </div>
        )}  
      </div>



{/* ================================================================== */}
      <div className='secOneFish'>
        <h2>Choose Your Category</h2>

        <div className='aaa'>
          <div>
            <p className='icons5'><TbArmchair2 /></p>
            <h3>Chair</h3>
            <p className='aaa1a'>25 Items Chair</p>
          </div>

          <div>
            <p className='icons5'><TbSofa /></p>
            <h3>Sofa</h3>
            <p className='aaa1a'>25 Items Sofa</p>
          </div>

          <div>
            <p className='icons5'><MdOutlineTableRestaurant /></p>
            <h3>Table</h3>
            <p className='aaa1a'>25 Items Table</p>
          </div>

          <div>
            <p className='icons5'><MdOutlineBed /></p>
            <h3>Bed</h3>
            <p className='aaa1a'>25 Items Bed</p>
          </div>

          <div>
            <p className='icons5'><MdOutlineBrunchDining /></p>
            <h3>Dining Chair</h3>
            <p className='aaa1a'>25 Items Chair </p>
          </div>
        </div>
      </div>


      <div className='bannerSection'>
          <div className='bannerDivOne'>
            <Image src={image4} alt='' className='bannImage'/>

            <div className='banerDivOneText'>
              <h4>UP TO 20% OFF</h4>
              <h2>Modern & Minimal</h2>
              <p>Don't miss avail the saving opportunity</p>
              <button>Shop Now </button>
            </div>
          </div>

          <div className='bannerDivTwo'>
            <Image src={image5} alt='' className='bannImage'/>

            <div className='banerDivTwoText'>
              <h4>UP TO 20% OFF</h4>
              <h2>Modern & Minimal</h2>
              <p>Don't miss avail the saving opportunity</p>
              <button>Shop Now </button>
            </div>
          </div>
        </div>

        <div className='bdThree'>
          <Image src={image6} className='newImage' alt=""/>
          <div className='bdDivText'>
              <h4>UP TO 20% OFF</h4>
              <h2>Modern & Minimal</h2>
              <p>Don't miss avail the saving opportunity</p>
              <button>Shop Now </button>
          </div>
        </div>
    </div>
  )
}

export default HomeSectionOne