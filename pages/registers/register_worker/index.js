import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../../styles/Auth.module.css'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from "axios"


export default function Home() {
   
    const router = useRouter();
    const [form, setForm] = useState({
        full_name: '',
        email: '',
        phone: '',
        password: '',
        password2: '',
    })

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(form);
        if(form.password !== form.password2) {
            alert("password not match");
        } else {
            console.log(process.env.APP_BACKEND_URL)
            const body = {
                full_name: form.full_name,
                email: form.email,
                phone: form.phone,
                password: form.password
            }
            axios
            .post(`${process.env.APP_BACKEND_URL}/v1/user/register_worker/`,body)
            .then((res) => {
                console.log(res.data);
                // alert('Register Success');
                // router.push('/')
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }

    return (
        <div>
            <Head>
                <title>Register pekerja - HireJob</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/icon.png" />
            </Head>
            <div className={`row vw-100 vh-100 ${styles['bg-auth']}`}>
                <div className='col-6 d-flex justify-content-center align-items-center'>
                    <div className={`w-75 h-75`}>
                        <div className={`${styles['banner-auth']}`}>
                            <div className='p-5'>
                                <Link href='/landing'><Image src="/assets-img/white-logo.png" width={75} height={25} alt="wkwk"></Image></Link>
                            </div>
                            <div className='h-75 w-100 d-flex align-items-center'>
                                <p className={`p-5 display-5 ${styles['open_sans_sb']}`}>Temukan developer berbakat & terbaik di berbagai bidang keahlian</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='d-flex justify-content-center align-items-center col-6'>
                    <div className='w-75 '>
                        <div className='title mb-5'>
                            <p className={`h1 ${styles['open_sans_sb']}`}>Halo, Pewpeople</p>
                            <p className={`h5 ${styles['open_sans_lt']}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dio rhpmcis auctor.</p>
                        </div>
                        <div className='form'>
                            <form onSubmit={(e) => onSubmitHandler(e)}>
                                <div className="mb-3">
                                    <label htmlFor="full_name" className={`form-label ${styles['open_sans_lt']}`}>Nama Lengkap</label>
                                    <input type="text" className="form-control" id="full_name" aria-describedby="emailHelp" placeholder='Masukan nama panjang' onChange={(e) => setForm({ ...form, full_name: e.target.value })} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className={`form-label ${styles['open_sans_lt']}`}>Email</label>
                                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder='Masukan alamat email' onChange={(e) => setForm({ ...form, email: e.target.value })} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className={`form-label ${styles['open_sans_lt']}`}>No handphone</label>
                                    <input type="text" className="form-control" id="phone" aria-describedby="emailHelp" placeholder='Masukan no handphone' onChange={(e) => setForm({ ...form, phone: e.target.value })}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className={`form-label ${styles['open_sans_lt']}`}>Kata Sandi</label>
                                    <input type="password" className="form-control" id="password" aria-describedby="emailHelp" placeholder='Masukan kata sandi' onChange={(e) => setForm({ ...form, password: e.target.value })}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password2" className={`form-label ${styles['open_sans_lt']}`}>Konfirmasi kata sandi</label>
                                    <input type="password" className="form-control" id="password2" aria-describedby="emailHelp" placeholder='Masukan konfirmasi kata sandi' onChange={(e) => setForm({ ...form, password2: e.target.value })}/>
                                </div>
                                <div className='mb-3 button-submit w-100'>
                                    <button className={`w-100 ${styles['btn-yellow']}`} type="submit">
                                        <span className={`text-white ${styles['open_sans_sb']}`}>Daftar</span>
                                    </button>
                                </div>
                                <div className='text-center'>
                                    <p>Anda sudah punya akun ? <span><Link href="/" className={`text-decoration-none ${styles['txt-yellow-link']}`}>Masuk disini</Link></span></p>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
