import "../../../styles/Inspect/InspectClick/InspectClick.css"
import _icon_arrow_ios_back_click from "../../../../assets/svg/Inspect/InspectClick/_icon_arrow_ios_back_click.svg";
import _icon_arrow_ios_forward_click from "../../../../assets/svg/Inspect/InspectClick/_icon_arrow_ios_forward_click.svg";
import InspectCmts from "./InspectCmts";
import Header from "../../Bar/Header";
import Footer from "../../Bar/Footer";
import Data from "../../../data/Inspect_Data";

import { useLocation } from 'react-router-dom';
import { useState } from "react";

const InspectClick = () => {

  const [num,setNum] =useState(0);

  const location = useLocation();
  const temp_title = location.state;

  let info;
  for(let i = 0 ; i < Data.length ; i ++){

    for(let j = 0 ; j < Data[i][1].length ; j++){
      // console.log("title",Data[i][1][j].title);
      if(Data[i][1][j].title == temp_title){
        info = Data[i][1][j];
      }
    }
  }


  function check (){
    // console.log(temp_title)
    // console.log(Data[0][1][2].title);
    // console.log(temp_title)
    console.log(info)
  }

  return (
  <>
    <Header/>
    <div className="inspect-click">
      <div className="empty_box_inspect_click"></div>
      <div className="parent_inspect_click">
        <div className="div_inspect_click" onClick={check}>{info.title}</div>
        <b className="b2_inspect_click">{info.subtitle[0]}</b>
        <img
          className="icon-arrow-ios-back_inspect_click"
          alt=""
          src={_icon_arrow_ios_back_click}
        />
        <img
          className="icon-arrow-ios-forward_inspect_click"
          alt=""
          src={_icon_arrow_ios_forward_click}
          onClick= {()=>{setNum(num+1)}}
        />
      </div>
        {info.sub[0].map((sub)=>{
          info.cmts[0].map((cmt)=>{

            return(<InspectCmts/>)
          })


        })}
        {/* <InspectCmts />
        <InspectCmts />
        <InspectCmts />
        <InspectCmts />
        <InspectCmts /> */}
    </div>
    <Footer />
    </>
  );
};

export default InspectClick;
