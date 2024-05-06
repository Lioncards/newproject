'use client'

import React from "react"
import { FaRegCopyright } from "react-icons/fa6";
import Image from "next/image";
import paymentimg1 from '@/Components/Images/payment-img-1.png'
import paymentimg2 from '@/Components/Images/payment-img-2.png'
import paymentimg3 from '@/Components/Images/payment-img-3.png'
import paymentimg4 from '@/Components/Images/payment-img-4.png'
import logo from '@/Components/Images/logo.png'
import '@/Components/Footer.css'


const Footer=()=>{

    return(
        <div className="fDDD">
            <div className="footerDiv">
                <div className="footerDiv20">
                    <p>Category</p>
                    <ul>
                        <li>About Us</li>
                        <li>Delivery Info</li>
                        <li>Privacy Policy</li>
                        <li>Brands</li>
                        <li>Contact Us</li>
                        <li>Returns</li>
                        <li>Site Map</li>
                    </ul>
                </div>

                <div className="footerDiv20">
                    <p>Quick Links</p>
                    <ul>
                        <li>Store Location</li>
                        <li>Order History</li>
                        <li>Wish List</li>
                        <li>Newletter</li>
                        <li>Specials</li>
                        <li>Gift Certificate</li>
                        <li>Affiliate</li>
                    </ul>
                </div>

                <div className="footerDiv20">
                    <p>Category</p>
                    <ul>
                        <li>About Us</li>
                        <li>Delivery Info</li>
                        <li>Privacy Policy</li>
                        <li>Brands</li>
                        <li>Contact Us</li>
                        <li>Returns</li>
                        <li>Site Map</li>
                    </ul>
                </div>

                <div className="footerDiv20">
                    <p>Quick Links</p>
                    <ul>
                        <li>Store Location</li>
                        <li>Order History</li>
                        <li>Wish List</li>
                        <li>Newletter</li>
                        <li>Specials</li>
                        <li>Gift Certificate</li>
                        <li>Affiliate</li>
                    </ul>
                </div>
            </div>

            <div className="footerDiv40">
                <p className="footerLogo1"><FaRegCopyright /> All rights reserved Made by <span>ThemeTags</span></p>

                <div className="footerLogo">
                    <Image src={logo}/>
                </div>
                
                <div className="footerLogo3">
                    <Image src={paymentimg1}/>
                    <Image src={paymentimg2}/>
                    <Image src={paymentimg3}/>
                    <Image src={paymentimg4}/>
                </div>
            </div>
        </div>
    )
}

export default Footer