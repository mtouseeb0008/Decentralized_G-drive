

// import { useState } from "react";
// import "./Display.css";
// const Display = ({ contract, account }) => {
//   const [data, setData] = useState("");
//   const getdata = async () => {
//     let dataArray;
//     const Otheraddress = document.querySelector(".address").value;
//     try {
//       if (Otheraddress) {
//         dataArray = await contract.display(Otheraddress);
//         console.log(dataArray);
//       } else {
//         dataArray = await contract.display(account);
//       }
//     } catch (e) {
//       alert("You don't have access");
//     }
//     const isEmpty = Object.keys(dataArray).length === 0;

//     if (!isEmpty) {
//       const str = dataArray.toString();
//       const str_array = str.split(",");
//       console.log(str);
//       console.log(str_array);
//       const images = str_array.map((item, i) => {
//         return (
//         <a href={item} key={i} target="_blank" rel="noopener noreferrer">
//             <img
//               key={i}
//               src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
//               alt="new"
//               className="image-list"
//             ></img>
//           </a>
//         );
//       });
      
//       setData(images);
//     } else {
//       alert("No image to display");
//     }
//   };
//   return (
//     <>
//       <div className="image-list">{data}</div>
//       <input
//         type="text"
//         placeholder="Enter Address"
//         className="address"
//       ></input>
//       <button className="center button" onClick={getdata}>
//         Get Data
//       </button>
//     </>
//   );
// };
// export default Display;


//  //ye mera code  h
//     // const images = str_array.map((item, i) => {
//     //     return (

          
//     //       <a href={item} key={i} target="_blank" rel="noopener noreferrer">
//     //         <img
//     //           key={i}

//     //           // const ImgHash = {`https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`}
//     //           src={`https://gateway.pinata.cloud/ipfs/${item}`}
//     //          // src={`https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`}
//     //           // src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
//     //           alt="new"
//     //           className="image-list"
//     //         ></img>
//     //       </a>
//     //     );
//     //   });

import { useState } from "react";
import "./Display.css";

const Display = ({ contract, account }) => {
  const [data, setData] = useState("");

  const getdata = async () => {
    let dataArray;
    const Otheraddress = document.querySelector(".address").value;

    try {
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
        console.log(dataArray);
      } else {
        dataArray = await contract.display(account);
      }
    } catch (e) {
      alert("You don't have access");
    }

    // Check if dataArray is defined and not null
    if (dataArray !== undefined && dataArray !== null) {
      const isEmpty = Object.keys(dataArray).length === 0;

      if (!isEmpty) {
        const str = dataArray.toString();
        const str_array = str.split(",");
        console.log(str);
        console.log(str_array);
        const images = str_array.map((item, i) => (
          <a href={item} key={i} target="_blank" rel="noopener noreferrer">
            <img
              key={i}
              src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
              alt="see_img"
              className="image-list"
            ></img>
          </a>
        ));

        setData(images);
      } else {
        alert("No image to display");
      }
    } else {
      alert("Error fetching data");
    }
  };

  return (
    <>
      <div className="image-list">{data}</div>
      <input
        type="text"
        placeholder="Enter Address"
        className="address"
      ></input>
      <button className="center button" onClick={getdata}  style = {{ cursor : 'pointer' }}> 
        Get Data
      </button>
    </>
  );
};

export default Display;
