import { useState } from 'react'
import styles from './App.module.css'
import TreeCard from './TreeCard';

const App = () => {

  return (
    <div className={styles.div}>
      <h1>Cool Trees!</h1>
      <p>(Buy 5 trees for a surprise!)</p>
      <TreeCard treeName="Nordmann fir" imgSrc="https://cdn.forestresearch.gov.uk/2024/01/Nordmann-fir_Abies-nordmanniana-1.jpg" location="Native to the western Caucasus mountains and to mountainous areas of the Black Sea region of northern Turkey"/>
      <TreeCard treeName="Big-leaf maple" imgSrc="https://cdn.forestresearch.gov.uk/2023/12/Acer-macrohyllum-Jedediah-Redwood-Forest-CA-8.jpg" location="Native to the coastal regions of northwest America from Vancouver Island south to central California"/>
      <TreeCard treeName="Western hemlock" imgSrc="https://cdn.forestresearch.gov.uk/2023/08/Tsuga-heterophylla-difference.jpg" location="Native to the Pacific north-west of America from Alaska to California"/>

    </div>
  )
};

export default App;
