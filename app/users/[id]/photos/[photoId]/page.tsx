import React from "react";

interface Props {
  params: { photoId: number; id: number };
}

const UserPhotos = ({ params: { id } }: Props) => {
  return <div>Photos of {id}</div>;
};

export default UserPhotos;
