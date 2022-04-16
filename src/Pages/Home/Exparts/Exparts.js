import React, { useEffect, useState } from 'react';
import Expart from '../Expart/Expart';
// const experts =
// [
//       {
//             id: 1,
//             name: "jakal",
//             experience: "He is good in to remove your engine",
//             img: "https://img.freepik.com/free-photo/smiling-mechanic-with-arms-crossed-spanner_1170-1699.jpg?size=626&ext=jpg&ga=GA1.1.1652170954.1649070937"
//       },

//       {
//             id: 2,
//             name: "jakal",
//             experience: "He is good in to remove your engine",
//             img:" https://img.freepik.com/free-photo/mechanic-with-arms-crossed-holding-spanner_1170-1491.jpg?size=626&ext=jpg&ga=GA1.2.1652170954.1649070937"
//       },

//       {
//             id: 3,
//             name: "jakal",
//             experience: "He is good in to remove your engine",
//             "img": "https://img.freepik.com/free-photo/mechanic-servicing-car_1170-1689.jpg?size=626&ext=jpg&ga=GA1.1.1652170954.1649070937"
//       }
// ]
const Exparts = () => {
      const [experts, setExperts] = useState([])
      useEffect(() => {
            fetch('expert.json')
                  .then(res => res.json())
                  .then(data => setExperts(data))
      }, [])
      return (
            <div className='container' id='experts'>
                  <h2 className='text-info text-center'>Our Experts</h2>
                  <div className='row'>
                        {
                              experts.map(expert => <Expart key={expert.id} expert={expert}></Expart>)

                        }
                  </div>
            </div>

      );
};

export default Exparts;