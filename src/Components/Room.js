import React from "react";
import img1 from "./images/bed1.jpeg";
const Room = ({ onClosePop, roomID, Beds }) => {
   return (
      <>
         <div className="col-md-3 box">
            {/* {roomID} */}
            {/* <button
               className="btn btn-primary"
               onClick={onClosePop}
               id={roomID}
            >
               show
            </button> */}
            <img src={img1} onClick={onClosePop} id={roomID} alt="" />
         </div>
      </>
   );
};

export default Room;
