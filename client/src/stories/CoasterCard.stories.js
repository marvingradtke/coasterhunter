import React from 'react';
import CoasterCard from '../components/CoasterCard';
import coaster from '../assets/coaster-taron.jpg';

export default {
  title: 'Card'
};

export function Examples() {
  return (
    <>
      <CoasterCard name="Taron" ranking={7} image={coaster} />
    </>
  );
}
