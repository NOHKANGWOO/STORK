import { useCallback, useEffect } from "react";

import bd_chart_subtitle from "../../../assets/svg/BabyDiary/BabyDiaryChart/bd_chart_subtitle.svg";
import bd_chart_title from "../../../assets/svg/BabyDiary/BabyDiaryChart/bd_chart_title.svg";
import bdc_ac_text1 from "../../../assets/svg/BabyDiary/BabyDiaryChart/bdc_ac_text1.svg";
import bdc_ac_text3 from "../../../assets/svg/BabyDiary/BabyDiaryChart/bdc_ac_text3.svg";
import bdc_crl_text1 from "../../../assets/svg/BabyDiary/BabyDiaryChart/bdc_crl_text1.svg";
import bdc_fl_text1 from "../../../assets/svg/BabyDiary/BabyDiaryChart/bdc_fl_text1.svg";
import bdc_fl_text2 from "../../../assets/svg/BabyDiary/BabyDiaryChart/bdc_fl_text2.svg";
import bdc_fl_text3 from "../../../assets/svg/BabyDiary/BabyDiaryChart/bdc_fl_text3.svg";
import bdc_mybaby_text from "../../../assets/svg/BabyDiary/BabyDiaryChart/bdc_mybaby_text.svg";
import bdc_otherbaby_text from "../../../assets/svg/BabyDiary/BabyDiaryChart/bdc_otherbaby_text.svg";
import detail_btn_text from "../../../assets/svg/BabyDiary/BabyDiaryChart/detail_btn_text.svg";

import "../../styles/BabyDiary/BabyDiaryChartPage.css";

import Header from "../Bar/Header";
import Footer from "../Bar/Footer";

const BabyDiaryChartPage = () => {
  const onDetailBtnClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='bDChartSubtitle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className="babydiarychart-page">
      <Header />
      <img className="bd-chart-title-icon" alt="" src={bd_chart_title} />
      <div className="bd-chart-div" data-animate-on-scroll />
      <div className="bd-chart-tag-div" data-animate-on-scroll>
        <div className="bd-chart-tag-div1" />
        <div className="bdc-mybaby-div" />
        <div className="bdc-otherbaby-div" />
        <img
          className="bdc-otherbaby-text-icon"
          alt=""
          src={bdc_otherbaby_text}
        />
        <img className="bdc-mybaby-text-icon" alt="" src={bdc_mybaby_text} />
      </div>
      <button className="detail-btn" onClick={onDetailBtnClick}>
        <div className="detail-btn-div" />
        <img className="detail-btn-text-icon" alt="" src={detail_btn_text} />
      </button>
      <img
        className="bd-chart-subtitle-icon"
        alt=""
        src={bd_chart_subtitle}
        data-scroll-to="bDChartSubtitle"
      />
      <div className="bd-chart-detail-div">
        <div className="bd-chart-detail-div1" />
        <div className="bdc-crl-div">
          <div className="bdc-crl-div1" />
          <img className="bdc-crl-text1-icon" alt="" src={bdc_crl_text1} />
          <div className="bdc-crl-num-text">1.2</div>
          <img className="bdc-crl-text2-icon" alt="" src={bdc_fl_text2} />
          <img className="bdc-crl-text3-icon" alt="" src={bdc_ac_text3} />
          <div className="bdc-crl-cm-text">길어요.</div>
        </div>
        <div className="bdc-ac-div">
          <div className="bdc-ac-div1" />
          <img className="bdc-ac-text1-icon" alt="" src={bdc_ac_text1} />
          <div className="bdc-ac-num-text">1.2</div>
          <img className="bdc-ac-text2-icon" alt="" src={bdc_fl_text2} />
          <img className="bdc-ac-text3-icon" alt="" src={bdc_ac_text3} />
          <div className="bdc-ac-cm-text">짧아요.</div>
        </div>
        <div className="bdc-fl-div">
          <div className="bdc-fl-div1" />
          <img className="bdc-fl-text1-icon" alt="" src={bdc_fl_text1} />
          <div className="bdc-fl-num-text">1.2</div>
          <img className="bdc-fl-text2-icon" alt="" src={bdc_fl_text2} />
          <img className="bdc-fl-text3-icon" alt="" src={bdc_fl_text3} />
          <div className="bdc-fl-cm-text">길어요.</div>
        </div>
      </div>
      <div className="bd-chart-comment-div">
        <div className="bd-chart-comment-div1" />
        <span className="bd-chart-comment">평균 수치와 비슷해요!</span>
      </div>
      <Footer />
    </div>
  );
};

export default BabyDiaryChartPage;
