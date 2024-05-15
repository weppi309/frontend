// import React from "react";
// import "./featuredProperties.css";
// import APIs, { endpoints } from "../../configs/APIs";

// class FeaturedProperties extends React.Component {
//   constructor() {
//     super()
//     this.state = {"khachsans":[]}
//   }
//   componentDidMount() {
//     APIs.get(endpoints['khachsans']).then(res => {
//       console.info(res.data.results)
//         this.setState({
//           "khachsans": res.data.results
//         })
//     })
//   }
//   render() {
//     return(
//       <>
//         {this.state.khachsans.map(c =>
//           <div className="fp">
//           <div className="fpItem" key={c._id}>
//             <img
//               src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
//               alt=""
//               className="fpImg"
//             />
//             <span className="fpName">{c.tenkhachsan}</span>
//             <span className="fpCity">Madrid</span>
//             <span className="fpPrice">Starting from $120</span>
//             <div className="fpRating">
//               <button>8.9</button>
//               <span>Excellent</span>
//             </div>
//           </div>     
          
//         </div>
//         )}
//       </>
//     );
//   }
// }

// export default FeaturedProperties;
import React from "react";
import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";
import { endpoints } from "../../configs/APIs";

const FeaturedProperties = () => {
  const { data: khachsans, loading, error } = useFetch(endpoints['khachsans']+"?featured=true&limit=4");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="fp">
      {khachsans.map((c) => (
        <div className="fpItem" key={c._id}>
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
            alt=""
            className="fpImg"
          />
          <span className="fpName">{c.tenkhachsan}</span>
          <span className="fpCity">{c.diachi}</span>
          <span className="fpPrice">Starting from $120</span>
          <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProperties;
