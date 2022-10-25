import React, { useState } from "react";
import Popup from "./Popup";
import Room from "./Room";
import { data } from "./allot";

const Building = () => {
   const [show, setShow] = useState(false);
   const [Data, setData] = useState([]);

   const onClosePop = (e) => {
      console.log(e.target.id);
      let ID = e.target.id;
      // setData();

      let i = data.filter((item) => item.room_id === Number(ID));
      setData(i[0].details);
      console.log(i[0].details);
      setShow(!show);
   };

   const onCloseP = () => {
      setShow(!show);
   };

   const sendData = (data) => {
      console.log("userdata", data);
   };

   return (
      <>
         {show ? (
            <Popup
               onCloseP={onCloseP}
               show={show}
               Data={Data}
               sendData={sendData}
            />
         ) : null}
         <div className="bg-secondary p-3 main">
            {/* {data.map((item) =>
               item.details.map((val) => <Room onClosePop={onClosePop} />)
            )} */}
            {data.map((item) => (
               <Room
                  key={item.room_id}
                  onClosePop={onClosePop}
                  roomID={item.room_id}
                  Beds={item.details}
               />
            ))}
         </div>
      </>
   );
};

export default Building;
