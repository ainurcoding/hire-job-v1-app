import React from "react";
import styles from '../styles/Portofolio.module.css'
import Image from 'next/image'


const Portofolio = () => {
    return (
        <div className="portofolio-kontent row gap-2">
              <div className="card-wrapper col-3 d-flex flex-column">
                <div className="img-wrapper">
                  <Image src="/assets-img/reminder app.png" height={125} width={125} className={`${styles['img-size-portofolio']}`} alt="dummy-img" ></Image>
                </div>
                <div className="desc d-flex justify-content-center">
                  <p className={`${styles['open_sans_sb']}`}>Web Remainder App</p>
                </div>
              </div>
              <div className="card-wrapper col-3 d-flex flex-column">
                <div className="img-wrapper">
                <Image src="/assets-img/reminder app.png" height={125} width={125} className={`${styles['img-size-portofolio']}`} alt="dummy-img" ></Image>
                </div>
                <div className="desc d-flex justify-content-center">
                  <p className={`${styles['open_sans_sb']}`}>Web Remainder App</p>
                </div>
              </div>
              <div className="card-wrapper col-3 d-flex flex-column">
                <div className="img-wrapper">
                <Image src="/assets-img/reminder app.png" height={125} width={125} className={`${styles['img-size-portofolio']}`} alt="dummy-img" ></Image>
                </div>
                <div className="desc d-flex  justify-content-center">
                  <p className={`${styles['open_sans_sb']}`}>Web Remainder App</p>
                </div>
              </div>
              <div className="card-wrapper col-3 d-flex flex-column">
                <div className="img-wrapper">
                <Image src="/assets-img/reminder app.png" height={125} width={125} className={`${styles['img-size-portofolio']}`} alt="dummy-img" ></Image>
                </div>
                <div className="desc d-flex  justify-content-center">
                  <p className={`${styles['open_sans_sb']}`}>Web Remainder App</p>
                </div>
              </div>
              
            </div>
    )
}

const WorkExp = () => {
    return (
        <div className="WorkExp-kontent row gap-2">
            <div className="ms-3 col-2 wrapper-img">
                <Image src="/assets-img/work-exp-icon.png" width={125} height={125} alt="tokopedia logo" className={`${styles['img-we-size']}`}></Image>
            </div>
            <div className="col-9 wrapper-img ">
                <div className="title-job">
                    <p className={`${styles['open_sans_sb']} h5`}>Engineer</p>
                </div>
                <div className="company-job">
                    <p className={`${styles['open_sans_lt']} h6`}>Tokopedia</p>
                </div>
                <div className="work-duration">
                    <p className={`${styles['open_sans_lt']} text-muted h6`}>July 2019 - January 2020 6 months</p>
                </div>
                <div className="work-desc">
                <p className={`${styles['open_sans_lt']} h6`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, sit optio! Nisi et asperiores quae inventore! Similique id quam sint assumenda quo nostrum maiores saepe? </p>
                </div>
            </div>
        </div>
    )
}

export {Portofolio, WorkExp};