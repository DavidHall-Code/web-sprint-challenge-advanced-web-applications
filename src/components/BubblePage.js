import React, { useEffect, useState } from "react";
import axios from "axios";

//import {fetchColors} from './ api/fetchColors'

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from '../utils/axiosWithAuth'

const BubblePage = () => {
  const [forceUpdate, setForceUpdate] = useState(false)
  const [colorList, setColorList] = useState([]);

  // const getColors = () =>{
  //   fetchColors()
  //   .then(res => {
  //     console.log("colors fetch", res.data)
  //     setColorList(res.data)
  //   })
  //   .catch(err => {
  //     console.log("error with colors", err)
  //   })
  // }

   const getColors = () =>{
    axiosWithAuth().get("/colors")
    .then(res => {
      // console.log("colors", res.data)
      setColorList(res.data)
    })
    .catch(err => {
      console.log("error with colors", err)
    })
  }

  useEffect(() => {
    getColors()
    setForceUpdate(false)
  },[forceUpdate])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
