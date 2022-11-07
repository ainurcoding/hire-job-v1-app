import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import gStyles from '../styles/General.module.css'


const Navbar2 = () => {
    return (
        <div className={`position-fixed bg-white w-100 ${styles['navbar-height']} row`}>
            <div className={`${styles['icon-logo-responsive']} col-6    d-flex align-items-center`}>
                <div className='ms-5 logo'>
                    <Link href='/landing'><Image src="/assets-img/purple-logo.png" width={150} height={40}></Image></Link>
                </div>
            </div>
            <div className={`${styles['navigation-responsive']} col-6  d-flex align-items-center justify-content-end gap-3`}>
                <div className={`${styles['navigation-responsive-icon']} logo`}>
                    <Link href='/landing'><Image src="/assets-img/only logo.png" width={50} height={40}></Image></Link>
                </div>
                <div>
                    <button class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className={`bi bi-bell`}></i>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <div className="modal-content d-flex justify-content-center align-items-center h-100">
                            <div className='img'>
                                <Image src="/assets-img/notifikasi kosong.png" width={100} height={100}></Image>
                            </div>
                            <div className='msg'>
                                <p className={`${gStyles['open_sans_sb']}`}>Belum ada notifikasi</p>
                            </div>
                        </div>
                    </ul>
                </div>
                <div>
                    <Link href="/messanger">
                        <i className="bi bi-envelope"></i>
                    </Link>
                </div>
                <div>
                    <button class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        <Image src="/assets-img/christian-buehner-DItYlc26zVI-unsplash 1.png" className={`${styles['img-rounded']}`} width={50} height={50}></Image>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <div className="modal-content d-flex justify-content-center align-items-center h-100 gap-3">
                            <div className='link-1'>
                                <Link href="/profile/aaa:id" className={`${gStyles['open_sans_sb']} ${styles['text-purple-link']} text-decoration-none`}>
                                    Detail Profile
                                </Link>
                            </div>
                            <div style={{ border: "1px solid #5E50A1" }} className="w-100"></div>
                            <div className='link-1'>
                                {/* nnti dibawah ini kasih kondisi */}
                                <Link href="/profile/edit_profile/worker? worker : recruiter" className={`${gStyles['open_sans_sb']} ${styles['text-purple-link']} text-decoration-none`}>
                                    Edit Profile
                                </Link>
                            </div>
                        </div>
                    </ul>
                </div>

            </div>
            <div className='emptycol col-1'>

            </div>
        </div>
    )
}

export default Navbar2