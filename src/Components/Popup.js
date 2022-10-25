import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import UserForm from "./UserForm";

const Popup = ({ onCloseP, show, Data, showForm, sendData }) => {
   const [Form, setForm] = useState(false);
   console.log(Data);

   return (
      <>
         <Modal show={show}>
            {/* <Modal.Header closeButton>
               <Modal.Title>ROOMS</Modal.Title>
            </Modal.Header> */}
            {Form ? (
               <UserForm SendData={sendData} />
            ) : (
               <>
                  <Modal.Body>
                     <div className="container d-flex flex-wrap popup">
                        {Data.map((item) => (
                           <div
                              className="beds"
                              onClick={() =>
                                 item.allocate === "true"
                                    ? setForm(!Form)
                                    : null
                              }
                              style={{
                                 backgroundColor:
                                    item.allocate === "false" ? "green" : "red",
                              }}
                           >
                              {item.allocate === "false" ? (
                                 <img src={item.imgsrc} alt="img" />
                              ) : null}
                           </div>
                        ))}
                     </div>
                  </Modal.Body>
                  <Modal.Footer>
                     <Button onClick={onCloseP}>Close</Button>
                  </Modal.Footer>
               </>
            )}
         </Modal>
      </>
   );
};

export default Popup;
