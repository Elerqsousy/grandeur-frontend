import React from 'react';
import { useLoaderData } from 'react-router-dom';

export default function DetailPage() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>DetailPage</div>
  );
}
