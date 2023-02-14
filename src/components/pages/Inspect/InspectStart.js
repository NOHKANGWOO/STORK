import "../../styles/Inspect/InspectStart.css"
import InspectLeft from "./Inspect_left";
import InspectRight from "./Inspect_right";
import Data from "../../data/Inspect_Data"

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../Bar/Header";
import Footer from "../Bar/Footer";

const InspectStart = () => {
  const nav = useNavigate();
  
  function che(){
    // console.log(Data.indexOf[0]('6주 이전'))  
    console.log(cli_Title)
  }

  const [cli_Title, setCli_Title] = useState();
  function click_title(e){
    setCli_Title(e.target.outerText);
  }

  return (
    <>
      <Header/>
      <div className="empty_box" />
      {Data.map((datas)=>{
        return(
        <>
        {/* ex) 6주 이전 */}
          <div className="inspect-start">
            <b className="b_start" onClick={che}>{datas[0]}</b>
            <div className="inspect-start-child" />
            <div className="inspect-start-item" />
          </div>
          {datas[1].map((data)=>{
            if(data.div=="검사"){
              return(
                <InspectLeft
                  title={data.title}
                  subtitle={data.subtitle}
                  sub={data.sub}
                  cmts={data.cmts}
                />
              );
            }
            else if(data.div=="증상"){
              return(
                <InspectRight
                  title={data.title}
                  subtitle={data.subtitle}
                  sub={data.sub}
                  cmts={data.cmts}
                  />
              );
            }
          })}
        </>
        );
      })
      }
      <div className="empty_box"></div>
      <Footer/>
    </>
  );
};

export default InspectStart;
