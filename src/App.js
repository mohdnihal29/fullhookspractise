import React, { useState } from "react";

import ResourceList from "./ResourceList.js";

const App = () => {
  const [resourceName, setResourceName] = useState("posts");

  return (
    <React.Fragment>
      <div>
        <button onClick={() => setResourceName("todos")}>Todos</button>
        <button onClick={() => setResourceName("posts")}>Posts</button>
        <ResourceList resourceName={resourceName} />
      </div>
    </React.Fragment>
  );
};

export default App;
