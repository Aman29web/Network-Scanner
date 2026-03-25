import { useState } from "react";
import axios from "axios";

function App() {

  const [network, setNetwork] = useState("");
  const [ports, setPorts] = useState([]);
  const [loading, setLoading] = useState(false);

  const startScan = async () => {

    try {

      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/scan",
        { network }
      );

      const text = res.data.result;

      const lines = text.split("\n");

      const portData = lines
        .filter(line => line.includes("/tcp"))
        .map(line => {

          const parts = line.trim().split(/\s+/);

          return {

            port: parts[0],

            state: parts[1],

            service: parts[2]

          };

        });

      setPorts(portData);

      setLoading(false);

    } catch (err) {

      console.log(err);

      alert("Scan failed");

      setLoading(false);

    }

  };

  return (

    <div style={{ padding: 40 }}>

      <h2>Network Scanner</h2>

      <input

        placeholder="127.0.0.1"

        value={network}

        onChange={(e) => setNetwork(e.target.value)}

        style={{
          padding: 10,
          marginRight: 10
        }}

      />

      <button onClick={startScan}>

        Scan

      </button>

      {loading && <p>Scanning... ⏳</p>}

      <table border="1" cellPadding="10" style={{ marginTop: 20 }}>

        <thead>

          <tr>

            <th>Port</th>

            <th>Status</th>

            <th>Service</th>

          </tr>

        </thead>

        <tbody>

          {ports.map((p, i) => (

            <tr key={i}>

              <td>{p.port}</td>

              <td>{p.state}</td>

              <td>{p.service}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default App;