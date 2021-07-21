import { useState, useEffect } from "react";
import { plapi } from "powerlink-api";
import "./App.css";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    queryApi();
  }, []);

  const queryApi = async () => {
    const plApi = new plapi();
    const response = await plApi.get({ objectType: 1 });
    setData(response.data.Data);
  };

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
