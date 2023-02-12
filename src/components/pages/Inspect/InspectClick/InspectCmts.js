import { display } from "@mui/system";
import "../../../styles/Inspect/InspectClick/InspectCmts.css"



const InspectCmts = ( props) => {
  const{
    sub,
    cmts,
    index,
  }= props;

  function check(){
    console.log(index)
  }

  let sub_style = {};
  if(sub[index] == ""){
    sub_style = {display : "none"};
  }
  return (
    <div className="inspect-cmts">
      <div className="inspect-cmts-child" />
      <b className="b_inspect_cmts" style={sub_style} onClick={check}>{sub[index]}</b>
      <b className="b1_inspect_cmts">
        <p className="p_inspect_cmts">
          {cmts[index]}
        </p>
        {/* <p className="p_inspect_cmts">
          대처법 : 되도록 물을 많이 마시고 채소, 과일을 자주 먹으며 섬유질을
          섭취하며 유산균이 함유된 음식을 섭취하며 가벼운 운동을 틈틈이 해주도록
          해요.
        </p> */}
      </b>
    </div>
  );
};

export default InspectCmts;
