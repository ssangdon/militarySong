import React, { useEffect, useState } from "react";
import axios from "axios";

// function (req, res, next) {
//   Songs
//     .findOne({years:2019, months:3, days:19})
//     .then((Songs) => {
//       res.status(200).json({
//           songs: Songs,
//       });
//     })
//     .catch((err) => {
//       res.status(500).json({
//         message: err,
//       });
//     });
// });

const Users = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios.get("/api/data").then((response) => setData(response.data));
  }, []);



  return (
    <div>
      {data}
    </div>
  );
};

export default Users;

// import React, { useState, useEffect } from "react";

// const checkusers = () => {
//   console.log(users);
// };

// const Users = () => {
//   const [users, setUsers] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         setError(null);
//         setUsers(null);
//         setLoading(true);
//         const response = await axios.get("/api/data");
//         setUsers(response.data);
//       } catch (e) {
//         setError(e);
//       }
//       setLoading(false);
//     };
//     fetchUsers();
//   }, []);

//   if (loading) return <div>로딩중..</div>;
//   if (error) return <div>에러가 발생했습니다</div>;
//   if (!users) return null;
//   return <div>{console.log(users)};</div>;
// };

// export default Users;
