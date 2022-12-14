import React ,{useState} from "react";
import PackageContext from "./context";

const Provider = function(props){
    const [mission,setMission] = useState({
        mname:"Go To Russia",
        agent:'007',
        accept:"Not Accepted"
    });

    return(
        <PackageContext.Provider
        value={{
            data:mission,
            isMissionAccepted:()=>{
                let temp = mission.accept==='ACCEPTED'?'NOT ACCEPTED':'ACCEPTED';
                setMission({...mission,accept:temp});
            }
        }}>
            {props.children}
        </PackageContext.Provider>
    );
}

export default Provider;