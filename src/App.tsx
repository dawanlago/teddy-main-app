import React from "react";
// Import the Button from the remote design-system
const MyButton = React.lazy(() => import("designSystem/Button"));

function App() {
  return (
    <div>
      <h1>Main Application</h1>
      <React.Suspense fallback={<div>Loading...</div>}>
        <MyButton />
      </React.Suspense>
    </div>
  );
}

export default App;
