import React, { useState } from "react";

const UserForm = ({ SendData }) => {
   const [data, setData] = useState();
   const [name, setName] = useState();
   const [addr, setAddr] = useState();
   const [addhar, setAddhar] = useState();
   // const [addr, setAddr] = useState()

   const UserData = (e) => {
      setData({
         name: name,
         addr: addr,
         addhar: addhar,
         // photo: e.target.photo.value,
      });
      console.log(data);

      let item = { name: name, addr: addr, addhar: addhar };

      localStorage.setItem("data", JSON.stringify(item));

      SendData(data);
   };

   return (
      <>
         <form className="userform">
            <h3 className="text-center fw-bold">User Data</h3>

            <div className="mb-3">
               <label htmlFor="exampleInputEmail1" className="form-label">
                  Full Name
               </label>
               <input
                  type="text"
                  className="form-control"
                  name="Name"
                  onChange={(e) => setName(e.target.value)}
               />
            </div>
            <div className="mb-3">
               <label htmlFor="exampleInputPassword1" className="form-label">
                  Address
               </label>
               <input
                  type="text"
                  className="form-control"
                  name="Addr"
                  onChange={(e) => setAddr(e.target.value)}
               />
            </div>
            <div className="mb-3">
               <label htmlFor="exampleInputPassword1" className="form-label">
                  Addhar number
               </label>
               <input
                  type="text"
                  className="form-control"
                  name="Addhar"
                  onChange={(e) => setAddhar(e.target.value)}
               />
            </div>
            <div className="mb-3">
               <label htmlFor="exampleInputPassword1" className="form-label">
                  Upload photo
               </label>
               <input type="file" className="form-control" name="photo" />
            </div>
            <div className="text-center">
               <button
                  // type="submit"
                  className="btn btn-primary"
                  onClick={UserData}
               >
                  Submit
               </button>
            </div>
         </form>
      </>
   );
};

export default UserForm;
