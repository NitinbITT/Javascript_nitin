import React, { useState, useEffect } from 'react';

export default function App() {
  const [data, setData] = useState([]);     
  const [getData, setGetData] = useState(false); 
  const [addData, setAddData] = useState(false); 
  const [updateData, setUpdateData] = useState(false);
  const [patchData, setPatchData] = useState(false);  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.restful-api.dev/objects");
        const data = await response.json();
        console.log(data);
        setData(data); 
      } catch (e) {
        console.log(e);
      }
    };

    // if (getData) 
      fetchData();
  }, [getData]);

  useEffect(() => {
    const addNewData = async () => {
      const newData = {
        name: "Apple 23",
        data: {
          year: 2019,
          price: 1849.99,
          "CPU model": "Intel Core i9",
          "Hard disk size": "1 TB"
        }
      };

      try {
        const response = await fetch("https://api.restful-api.dev/objects", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newData)
        });
        if(response.status==200){
          const result = await response.json();
          console.log(result); 
          setAddData(false);
        }
        else{
          console.log("Error inserting data")
        }
      } catch (e) {
        console.log(e);
      }
    };

    if (addData) addNewData();
  }, [addData]);


  return (
    <>
      <button onClick={() => setGetData(true)}>Get data</button>
      <button onClick={() => setAddData(true)}>Add data</button>
      <button onClick={() => setUpdateData(true)}>Update data</button>
      <button onClick={() => setPatchData(true)}>Patch data</button>

      <div>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
