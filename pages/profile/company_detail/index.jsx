import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Companydetail.module.css";
import gStyle from "../../../styles/General.module.css";
import { WorkExp, Portofolio } from "../../../components/ProfileSect.jsx";

export default function index() {
  const [showPortofolio, setShowPortofolio] = useState(true);

  const [showWorkExp, setShowWorkExp] = useState(false);

  const onPortofolio = () => {
    setShowPortofolio(true);
    setShowWorkExp(false);
  };

  const onWorkExp = () => {
    setShowPortofolio(false);
    setShowWorkExp(true);
  };
  return (
    <>
      <Head>
        <title>Profile perusahaan - HireJob</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className={`position-relative ${styles["kontent-wrapper"]}`}>
        <div className={`${styles["bg-purple"]}`}></div>
        <div className={`position-absolute ${styles["change-theme"]}`}>
          <div className={`d-flex gap-2`}>
            <div className={`edit-icon`}>
              <i className="bi bi-pencil"></i>
            </div>
            <div className="desc-text">
              <p className={`${gStyle["open_sans_sb"]} h5`}>Ubah Latar</p>
            </div>
          </div>
        </div>
        <div
          className={`position-absolute ${styles["card-middle"]} d-flex flex-column justify-content-center align-items-center gap-3`}
        >
          <div className={`${styles["img-wrapper"]}`}>
            <div className={`${styles["img-kontent"]}`}>
              <Image
                src="/assets-img/banner-auth.jpg"
                width={200}
                height={200}
                alt="wkwkwk"
                style={{ borderRadius: "50%" }}
              ></Image>
            </div>
          </div>
          <div className={`company-name`}>
            <p className={`${gStyle["open_sans_sb"]} h4`}>
              PT. Martabak Jaya Abadi
            </p>
          </div>
          <div className={`company-spec`}>
            <p className={`${gStyle["open_sans_lt"]} h6 text-muted`}>
              Financial
            </p>
          </div>
          <div className={`company-location d-flex gap-3`}>
            <div className="location-icon">
              <i className="bi bi-geo-alt-fill"></i>
            </div>
            <div className="location-desc">
              <p className={`${gStyle["open_sans_lt"]} h6 text-muted`}>
                Puertorico, Jawa Tengah
              </p>
            </div>
          </div>
          <div className="company-desc text-center">
            <p className={`${gStyle["open_sans_lt"]} h6 text-muted`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              assumenda eos placeat temporibus similique culpa minima cupiditate
              eum officiis porro?
            </p>
          </div>
          <div className="edit-profile-btn w-100 d-flex justify-content-center align-items-center">
            <Link
              href="profile/edit_profile/company/id"
              className="w-75 d-flex align-items-center justify-content-center text-decoration-none"
            >
              <button
                className={`btn ${styles["btn-purple"]} ${gStyle["open_sans_sb"]}`}
              >
                Edit profile
              </button>
            </Link>
          </div>
          <div className="socmed-wrapper d-flex flex-column">
            <div className="email d-flex gap-2">
              <div className="icon">
                <i className="text-muted bi bi-envelope"></i>
              </div>
              <div>
                <p className={`${gStyle["open_sans_lt"]} text-muted`}>
                  martabakjaya@mail.com
                </p>
              </div>
            </div>
            <div className="ig d-flex gap-2">
              <div className="icon">
                <i className="text-muted bi bi-instagram"></i>
              </div>
              <div>
                <p className={`${gStyle["open_sans_lt"]} text-muted`}>martabak_jaya</p>
              </div>
            </div>
            <div className="phone d-flex gap-2">
              <div className="icon">
                <i className="text-muted bi bi-telephone"></i>
              </div>
              <div>
                <p className={`${gStyle["open_sans_lt"]} text-muted`}>
                  0812-1231-2342-1123
                </p>
              </div>
            </div>
            <div className="linkedin d-flex gap-2">
              <div className="icon">
                <i className=" text-muted bi bi-linkedin"></i>
              </div>
              <div>
                <p className={`${gStyle["open_sans_lt"]} text-muted`}>
                  Martabak Jaya Abadi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

index.layout = "L2";
