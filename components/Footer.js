import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import gStyle from '../styles/General.module.css'

const Footer = () => {
    return (
        <div className={`w-100 ${styles['footer']} d-flex justify-content-center align-items-center`}>
            <div className='m-5 h-75 w-100 d-flex flex-column '>
                <div className='mb-3'>
                <Link href='/landing'><Image src="/assets-img/white-logo.png" width={150} height={40} alt="wkwkw"></Image></Link>
                </div>
                <div className='w-50  mb-5 '>
                    <p className={`text-white  ${gStyle['open_sans_sb']}`}>lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum etdui rhoncus auctor</p> 
                </div>
                <div className='mb-2'>
                    
                </div>
                <div className={`${styles['white-line']} mb-3`}>
                    
                </div>
                <div className='d-flex flex-rows gap-3 '>
                    <div className='col-4'>
                        <p className={`text-white ${styles['open_sans_sb']}`}>2022 Peworld. All right reserved</p>
                    </div>
                    <div className='col-5'>
                        
                    </div>
                    <div className='col-2 d-flex gap-4  justify-content-end'>
                        <p className={`text-white ${styles['open_sans_sb']}`}>telepon</p>
                        <p className={`text-white ${styles['open_sans_sb']}`}>email</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer