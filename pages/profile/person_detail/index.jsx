import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Portofolio.module.css";
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
        <title>Profile portofolio - HireJob</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className={`position-relative ${styles["kontent-wrapper"]}`}>
        <div className={`${styles["bg-purple"]}`}></div>
        <div className={`position-absolute ${styles["card-aside"]}`}>
          <div
            className={` ${styles["img-wrapper"]} d-flex flex-column justify-content-center align-items-center  col-12`}
          >
            <div className={` ${styles["img-card"]}`}>
              <img
                src="/assets-img/banner-auth.jpg"
                className={`${styles["img-content"]}`}
                alt="Louis Tomlinson"
              />
            </div>
          </div>
          <div className={`${styles["info-wrapper"]} d-flex flex-column`}>
            <div className="ms-3 mb-1 name-info ">
              <p className={`${gStyle["open_sans_sb"]} h4`}>Louis Tomlinson</p>
            </div>
            <div className="ms-3 name-info">
              <p className={`${gStyle["open_sans_lt"]}`}>Web Developer</p>
            </div>
            <div className="ms-3 location-info d-flex gap-2">
              <div className="map-icon">
                <i className="text-muted  bi bi-geo-alt"></i>
              </div>
              <div className="desc-location">
                <p className={`text-muted  ${gStyle["open_sans_lt"]}`}>
                  Purwokerto, Jawa Tengah
                </p>
              </div>
            </div>
            <div className={`ms-3 job-spec`}>
              <p className={`text-muted  ${gStyle["open_sans_lt"]}`}>
                Freelancer
              </p>
            </div>
            <div className="ms-3 desc-person w-75">
              <p className={`text-muted  ${gStyle["open_sans_lt"]}`}>
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eligendi, eaque cumque. Alias maiores perferendis reprehenderit
                nisi nemo accusamus odio vitae.{" "}
              </p>
            </div>
            <div className="ms-3 mb-5 hire-btn d-flex w-75">
              <button
                type="button"
                className={`btn ${styles["btn-purple"]} w-100`}
              >
                <p className={`${gStyle["open_sans_sb"]}`}>Hire</p>
              </button>
            </div>
            <div className={`ms-3 mb-5 skills-wrapper d-flex flex-column`}>
              <div className="title">
                <p className={`${gStyle["open_sans_sb"]} h4`}>Skill</p>
              </div>
              <div className={`${styles["wrap-skill"]} row gap-2`}>
                <div className="skill-name col-5">
                  <button
                    type=""
                    className={`btn ${styles["btn-skill-custom"]} `}
                  >
                    <p className={`${styles["open_sans_sb h6"]}`}>Python</p>
                  </button>
                </div>
                <div className="skill-name col-5">
                  <button
                    type=""
                    className={`btn ${styles["btn-skill-custom"]} `}
                  >
                    <p className={`${styles["open_sans_sb h6"]}`}>Python</p>
                  </button>
                </div>
                <div className="skill-name col-5">
                  <button
                    type=""
                    className={`btn ${styles["btn-skill-custom"]} `}
                  >
                    <p className={`${styles["open_sans_sb h6"]}`}>Python</p>
                  </button>
                </div>
                <div className="skill-name col-5">
                  <button
                    type=""
                    className={`btn ${styles["btn-skill-custom"]} `}
                  >
                    <p className={`${styles["open_sans_sb h6"]}`}>Python</p>
                  </button>
                </div>
                <div className="skill-name col-5">
                  <button
                    type=""
                    className={`btn ${styles["btn-skill-custom"]} `}
                  >
                    <p className={`${styles["open_sans_sb h6"]}`}>Python</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="ms-3 mb-5 socmed-wrapper d-flex flex-column">
              <div className="mail-address-content d-flex gap-2">
                <div className="mail-logo">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="mail-address">
                  <p className={`${styles["open_sans_lt"]} text-muted`}>
                    Louistommo@gmail.com
                  </p>
                </div>
              </div>
              <div className="ig-content d-flex gap-2">
                <div className="ig-logo">
                  <i className="bi bi-instagram"></i>
                </div>
                <div className="ig-name">
                  <p className={`${styles["open_sans_lt"]} text-muted`}>
                    @Louist91
                  </p>
                </div>
              </div>
              <div className="github-content d-flex gap-2">
                <div className="github-logo">
                  <i className="bi bi-github"></i>
                </div>
                <div className="github-name">
                  <p className={`${styles["open_sans_lt"]} text-muted`}>
                    @Louisttommo
                  </p>
                </div>
              </div>
              <div className="tiktok-content d-flex gap-2">
                <div className="tiktok-logo">
                  <i className="bi bi-tiktok"></i>
                </div>
                <div className="mail-address">
                  <p className={`${styles["open_sans_lt"]} text-muted`}>
                    @Louistommo91
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`position-absolute ${styles["card-aside-right"]}`}>
          <div className="ms-3 link-wrapper d-flex gap-5">
            <div className="mt-3 portofolio-Link">
              <button className="btn" type="button" onClick={onPortofolio} style={showPortofolio ? {borderBottom: "3px solid #5E50A1",background :"none"} : {}}>
                <p className={`${styles["open_sans_sb"]} h4 text-black`}>
                  Portofolio
                </p>
              </button>
            </div>
            <div className="mt-3 portofolio-Link">
              <button className="btn" type="button" onClick={onWorkExp} style={showWorkExp ? {borderBottom: "3px solid #5E50A1",background :"none"} : {}}>
                <p className={`${styles["open_sans_sb"]} h4 text-black`}>
                  Pengalaman kerja
                </p>
              </button>
            </div>
          </div>
          <div className="ms-3 mt-3 work-exp-wrapper">
            {showWorkExp ? <WorkExp/> : null}
          </div>
          <div className="ms-3 mt-3 kontent-wrapper">
            {showPortofolio ? <Portofolio/> : null}
          </div>
        </div>
      </div>
    </>
  );
}

index.layout = "L2";
