import { useState, useEffect, useRef } from "react";
import { plapi } from "powerlink-api";
import "./App.css";

function App() {
  const plApi = useRef(new plapi());
  const [data, setData] = useState({});

  useEffect(() => {
    // query();
    // update();
    // create();
    // deleteRecord();
    getViews();
  }, []);

  const query = async () => {
    const response = await plApi.current.query({ objectType: 1, conditions: 'accountid = 25DB3EC1-731E-4B5C-B8C8-95240E575EF7' });
    setData(response.data.Data);
  };

  const update = async () => {
    const response = await plApi.current.update(1, '47d3d8b6-46a6-41a9-8ce9-04b265235f78', {telephone1: '123456789'});
    setData(response.record);
  }

  const create = async () => {
    const response = await plApi.current.create({telephone1: '1122334'}, 1);
    setData(response.record);
  }

  const deleteRecord = async () => {
    const response = await plApi.current.delete(1, '25DB3EC1-731E-4B5C-B8C8-95240E575EF7');
  }

  const getViews = async () => {
    const response = await plApi.current.getViews(1);
    setData(response.views);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        overflowY: "auto",
      }}
    >
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
