import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import gStyles from '../styles/General.module.css'


const Navbar2 = () => {
    return (
        <div className={`w-100 ${styles['navbar-height']} d-flex`}>
            <div className='col-6  d-flex align-items-center'>
                <div className='ms-5 logo'>
                    <Link href='/landing'><Image src="/assets-img/purple-logo.png" width={150} height={40}></Image></Link>
                </div>
            </div>
            <div className='col-5 d-flex align-items-center justify-content-end gap-3 '>
                <div>
                    <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap"><i className={`bi bi-bell`}></i></button>
                    
                    <div className={`modal fade`} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                        <div className={`modal-dialog ${styles['modal-size']}`}>
                            <div className="modal-content d-flex justify-content-center align-items-center h-100">
                                <div className='img'>
                                    <Image src="/assets-img/notifikasi kosong.png" width={100} height={100}></Image>
                                </div>
                                <div className='msg'>
                                    <p className={`${gStyles['open_sans_sb']}`}>Belum ada notifikasi</p>
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <Link href="/messanger">
                        <i className="bi bi-envelope"></i>
                    </Link>
                </div>
                <div>
                    <Link href="/profile/edit_profile/worker">
                        <Image src="/assets-img/christian-buehner-DItYlc26zVI-unsplash 1.png" className={`${styles['img-rounded']}`} width={50} height={50}></Image>
                    </Link>
                </div>

            </div>
            <div className='emptycol col-1'>

            </div>
        </div>
    )
}

export default Navbar2