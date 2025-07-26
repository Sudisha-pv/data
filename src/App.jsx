import { useState } from 'react';

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <p>Loading PDF...</p>}
      <iframe
        src="/Malabar_jillakalude_vibhajanam.pdf"
        width="100%"
        height="100%" 
        title="PDF"
        onLoad={() => setLoaded(true)}
        style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, border: "none" }}
      ></iframe>
    </>
  );
}

export default App;
