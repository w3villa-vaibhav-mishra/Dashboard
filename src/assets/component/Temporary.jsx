import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Temporary() {
    const [data,setdata]=useState([]);
    useEffect(() => {
        ( async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                console.log(response.data); 
                 setdata(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        })();

    }, []);

    return <div className='overflow-y-scroll h-[200px]'>
     <h2>product</h2>
     {
        data.map((val,ind)=><div key={ind}> 
          <h3>title {val.id}:  {val.title}</h3>

        </div>)
     }
    </div>;
}

export default Temporary;
