import React from "react";

interface Props {
  params: { id: number };
}

const Photos = ({ params: { id } }: Props) => {
  return (
    <div>
      <h1>Photos</h1>
      <p>'photos'</p>
    </div>
  );
};

export default Photos;
