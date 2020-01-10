import React from 'react';
import { useParams } from 'react-router-dom';

export default function Coaster() {
  const { coasterName } = useParams();

  return <div>Hello {coasterName}</div>;
}
