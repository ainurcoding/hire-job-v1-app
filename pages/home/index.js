import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import gStyle from '../../styles/General.module.css'
import Link from 'next/link'

export default function index() {
  return (
    <>
      <Head>
        <title>Home - HireJob</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className={`${styles['home-container']} w-100`}>
        <div className={` ${styles['wrapper-top']} d-flex`}>
          <div className='m-5 title d-flex justify-content-center align-items-center'>
            <p className={`h3 text-white ${styles['open_sans_sb']}`} >Top Jobs</p>
          </div>
        </div>
        <div className='wrapper-search mb-5'>
          <div className={`m-5 ${styles['form-input']} d-flex align-items-center`}>
            <form className='ms-5 w-100 d-flex'>
              <div className='col-9'>
                <input type="text" className={`${styles['search-input']} `} name="search" placeholder='search for any skill' />
              </div>
              <div className='col-2 d-flex align-items-center'>
                <div className={`ms-2 ${styles['icon-search']}`}>
                  <i className="bi bi-search ps-5"></i>
                </div>
                <div className='ms-3 select-category'>
                  <select className={`form-select ${styles['custom-form-select']}`} aria-label="Default select example">
                    <option selected>Sort</option>
                    <option value="skill">Skill</option>
                    <option value="lokasi">Lokasi</option>
                    <option value="freelance">Freelance</option>
                    <option value="fulltime">fulltime</option>
                  </select>
                </div>
              </div>
              <div className='col-1 d-flex align-items-center justify-content-center'>
                <div className='button-submit'>
                  <button type="button" className={`btn ${styles['btn-purple']} ${gStyle['open_sans_sb']}`}>Search</button>
                </div>
              </div>

            </form>
          </div>
        </div>
        <div className='mb-5'>

        </div>
        <div className='wrapper-person'>
          <div className={`ms-5 ${styles['person-card']} d-flex`}>
            <div className={` col-2 d-flex justify-content-center align-items-center`} >
              <img src="/assets-img/banner-auth.jpg" alt="louis tomlinson" className={`${styles['image-content']}`} />
            </div>
            <div className='col-7 person-info-wrapper d-flex flex-column  justify-content-center'>
              <div className='mt-3 person-name'>
                <p className={`h4 ${styles['open_sans_sb']}`}>Louis Tomlinson</p>
              </div>
              <div className='person-job'>
                <p className={`text-muted ${styles['open_sans_lt']} h6`}>Web developer</p>
              </div>
              <div className='d-flex person-position gap-2'>
                <div className='icon-maps'>
                  <i className="text-muted bi bi-geo-alt"></i>
                </div>
                <div className='desc-position'>
                  <p className={`text-muted ${styles['open_sans_lt']}`}>Lorem Ipsum</p>
                </div>
              </div>
              <div className='ms-1 person-skills w-50 row gap-2'>
                <div className={`btn col-4 ${styles['skill-content']}`}>
                  <p className={`${styles['open_sans_sb']} text-white h6`}>PHP</p>
                </div>
                <div className={`btn col-4 ${styles['skill-content']}`}>
                  <p className={`${styles['open_sans_sb']} text-white h6`}>PHP</p>
                </div>
                <div className={`btn col-4 ${styles['skill-content']}`}>
                  <p className={`${styles['open_sans_sb']} text-white h6`}>PHP</p>
                </div>
                <div className={`btn col-4 ${styles['skill-content']}`}>
                  <p className={`${styles['open_sans_sb']} text-white h6`}>PHP</p>
                </div>
              </div>

            </div>
            <div className='col-3 person-info-detail d-flex justify-content-center align-items-center'>
              <div className='detail-person-btn'>
                <Link href="/profile/person_detail"><button type="button" className={`button ${styles['btn-purple-search']}`}><p className={`text-white ${styles['open_sans_sb']} h6`}>Lihat Profile</p></button></Link>
              </div>
            </div>
          </div>
          <div className={`ms-5 ${styles['person-card']} d-flex`}>
            <div className={` col-2 d-flex justify-content-center align-items-center`} >
              <img src="/assets-img/banner-auth.jpg" alt="louis tomlinson" className={`${styles['image-content']}`} />
            </div>
            <div className='col-7 person-info-wrapper d-flex flex-column  justify-content-center'>
              <div className='mt-3 person-name'>
                <p className={`h4 ${styles['open_sans_sb']}`}>Louis Tomlinson</p>
              </div>
              <div className='person-job'>
                <p className={`text-muted ${styles['open_sans_lt']} h6`}>Web developer</p>
              </div>
              <div className='d-flex person-position gap-2'>
                <div className='icon-maps'>
                  <i className="text-muted bi bi-geo-alt"></i>
                </div>
                <div className='desc-position'>
                  <p className={`text-muted ${styles['open_sans_lt']}`}>Lorem Ipsum</p>
                </div>
              </div>
              <div className='ms-1 person-skills w-50 row gap-2'>
                <div className={`btn col-4 ${styles['skill-content']}`}>
                  <p className={`${styles['open_sans_sb']} text-white h6`}>PHP</p>
                </div>
                <div className={`btn col-4 ${styles['skill-content']}`}>
                  <p className={`${styles['open_sans_sb']} text-white h6`}>PHP</p>
                </div>
                <div className={`btn col-4 ${styles['skill-content']}`}>
                  <p className={`${styles['open_sans_sb']} text-white h6`}>PHP</p>
                </div>
                <div className={`btn col-4 ${styles['skill-content']}`}>
                  <p className={`${styles['open_sans_sb']} text-white h6`}>PHP</p>
                </div>
              </div>

            </div>
            <div className='col-3 person-info-detail d-flex justify-content-center align-items-center'>
              <div className='detail-person-btn'>
                <Link href="/profile/person_detail"><button type="button" className={`button ${styles['btn-purple-search']}`}><p className={`text-white ${styles['open_sans_sb']} h6`}>Lihat Profile</p></button></Link>
              </div>
            </div>
          </div>
          <div className={`ms-5 ${styles['person-card']} d-flex`}>
            <div className={` col-2 d-flex justify-content-center align-items-center`} >
              <img src="/assets-img/banner-auth.jpg" alt="louis tomlinson" className={`${styles['image-content']}`} />
            </div>
            <div className='col-7 person-info-wrapper d-flex flex-column  justify-content-center'>
              <div className='mt-3 person-name'>
                <p className={`h4 ${styles['open_sans_sb']}`}>Louis Tomlinson</p>
              </div>
              <div className='person-job'>
                <p className={`text-muted ${styles['open_sans_lt']} h6`}>Web developer</p>
              </div>
              <div className='d-flex person-position gap-2'>
                <div className='icon-maps'>
                  <i className="text-muted bi bi-geo-alt"></i>
                </div>
                <div className='desc-position'>
                  <p className={`text-muted ${styles['open_sans_lt']}`}>Lorem Ipsum</p>
                </div>
              </div>
              <div className='ms-1 person-skills w-50 row gap-2'>
                <div className={`btn col-4 ${styles['skill-content']}`}>
                  <p className={`${styles['open_sans_sb']} text-white h6`}>PHP</p>
                </div>
                <div className={`btn col-4 ${styles['skill-content']}`}>
                  <p className={`${styles['open_sans_sb']} text-white h6`}>PHP</p>
                </div>
                <div className={`btn col-4 ${styles['skill-content']}`}>
                  <p className={`${styles['open_sans_sb']} text-white h6`}>PHP</p>
                </div>
                <div className={`btn col-4 ${styles['skill-content']}`}>
                  <p className={`${styles['open_sans_sb']} text-white h6`}>PHP</p>
                </div>
              </div>

            </div>
            <div className='col-3 person-info-detail d-flex justify-content-center align-items-center'>
              <div className='detail-person-btn'>
                <Link href="/profile/person_detail"><button type="button" className={`button ${styles['btn-purple-search']}`}><p className={`text-white ${styles['open_sans_sb']} h6`}>Lihat Profile</p></button></Link>
              </div>
            </div>
          </div>
          <div className={`ms-5 ${styles['person-card']} d-flex`}>
            <div className={` col-2 d-flex justify-content-center align-items-center`} >
              <img src="/assets-img/banner-auth.jpg" alt="louis tomlinson" className={`${styles['image-content']}`} />
            </div>
            <div className='col-7 person-info-wrapper d-flex flex-column  justify-content-center'>
              <div className='mt-3 person-name'>
                <p className={`h4 ${styles['open_sans_sb']}`}>Louis Tomlinson</p>
              </div>
              <div className='person-job'>
                <p className={`text-muted ${styles['open_sans_lt']} h6`}>Web developer</p>
              </div>
              <div className='d-flex person-position gap-2'>
                <div className='icon-maps'>
                  <i className="text-muted bi bi-geo-alt"></i>
                </div>
                <div className='desc-position'>
                  <p className={`text-muted ${styles['open_sans_lt']}`}>Lorem Ipsum</p>
                </div>
              </div>
              <div className='ms-1 person-skills w-50 row gap-2'>
                <div className={`btn col-4 ${styles['skill-content']}`}>
                  <p className={`${styles['open_sans_sb']} text-white h6`}>PHP</p>
                </div>
                <div className={`btn col-4 ${styles['skill-content']}`}>
                  <p className={`${styles['open_sans_sb']} text-white h6`}>PHP</p>
                </div>
                <div className={`btn col-4 ${styles['skill-content']}`}>
                  <p className={`${styles['open_sans_sb']} text-white h6`}>PHP</p>
                </div>
                <div className={`btn col-4 ${styles['skill-content']}`}>
                  <p className={`${styles['open_sans_sb']} text-white h6`}>PHP</p>
                </div>
              </div>

            </div>
            <div className='col-3 person-info-detail d-flex justify-content-center align-items-center'>
              <div className='detail-person-btn'>
                <Link href="/profile/person_detail"><button type="button" className={`button ${styles['btn-purple-search']}`}><p className={`text-white ${styles['open_sans_sb']} h6`}>Lihat Profile</p></button></Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className='wrapper-pagination'>
          
        </div>
        <div className='spaceEmpt p-5'>
          
        </div>
      </div>
    </>
  )
}

index.layout = 'L2';
