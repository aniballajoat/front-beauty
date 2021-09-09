/*
import React from 'react';

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};
*/

import ImageSlider from "../ImageSlider";
import { SliderData } from "../SliderData";

export const Home = () => {
  return (
    <ImageSlider slides={SliderData}/>
  )
};