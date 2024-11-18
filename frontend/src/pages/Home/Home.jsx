import React from 'react'
import'./Home.css'
import Header from '../../components/Header/Header'

import MenuExplore from '../../components/MenuExplore/MenuExplore'
import { useState } from "react";
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload';

const Home = () => {

  const [category,setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <MenuExplore category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload/>
    </div>
  )
}

export default Home
