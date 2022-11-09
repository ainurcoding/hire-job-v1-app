import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../../styles/Auth.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Email verifikasi - HireJob</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className={`row vw-100 vh-100 ${styles['bg-auth']}`}>
        <div className='col-7 d-flex justify-content-center align-items-center'>
          <div className={`w-75 h-75`}>
            <div className={`${styles['banner-auth']}`}>
              <div className='p-5'>
                <Link href='/landing'><Image src="/assets-img/white-logo.png" width={75} height={25} alt="wkwkw"></Image></Link>
              </div>
              <div className='h-75 w-100 d-flex align-items-center'>
                <p className={`p-5 display-5 ${styles['open_sans_sb']}`}>Temukan developer berbakat & terbaik di berbagai bidang keahlian</p>
              </div>
            </div>
          </div>
        </div>

        <div className='d-flex justify-content-center align-items-center col-5'>
          <div className='w-75 '>
            <div className='title mb-5'>
              <p className={`h1 ${styles['open_sans_sb']}`}>Reset password</p>
              <p className={`h5 ${styles['open_sans_lt']}`}>Enter your user account's verified email address and we will send you a password reset link.</p>
            </div>
            <div className='form'>
              <form>
                <div className="mb-3">
                  <label for="email" className={`form-label ${styles['open_sans_lt']}`}>Email</label>
                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder='Masukan alamat email'/>  
                </div>
                <div className='mb-3 button-submit w-100'>
                  <button className={`w-100 ${styles['btn-yellow']}`}  type="submit">
                    <span className={`text-white ${styles['open_sans_sb']}`}>Send password reset email</span>
                  </button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}