import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import gStyles from '../styles/General.module.css'

const Navbar = () => {
  return (
    <div className={`position-fixed w-100 ${styles['navbar-height']} d-flex`}>
        <div className='col-6  d-flex align-items-center'>
            <div className='ms-5 logo'>
            <Link href='/landing'><Image src="/assets-img/purple-logo.png" width={150} height={40} alt="wkwk"></Image></Link>
            </div>
        </div>
        <div className='col-5 d-flex align-items-center justify-content-end gap-3 '>
            <div className={`ms-5 d-flex justify-content-center align-items-center ${gStyles['btn-custom-border-purple']} `}>
                <div>
                <Link href="/"><button type="button" className={`btn ${styles['btn-white']} ${gStyles['open_sans_sb']}`}>Masuk</button></Link>
                </div>
            </div>
            <div className={`d-flex justify-content-center align-items-center ${gStyles['btn-custom-bg-purple']} `}>
                <div>
                <Link href="/registers/register_choice"><button type="button" className={`btn ${styles['btn-purple']} ${gStyles['open_sans_sb']}`}>Daftar</button></Link>
                </div>
            </div>
        </div>
        <div className='emptycol col-1'>
            
        </div>
    </div>
  )
}

export default Navbar