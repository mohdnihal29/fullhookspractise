import React from "react";
import useResource from "./useResources";

const ResourceList = ({ resourceName }) => {
  const result = useResource(resourceName);
  return (
    <div>
      <ul>
        {result.map((el) => (
          <li key={el.id}> {el.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceList;
