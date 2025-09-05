import React from 'react';
import styles from './BrandExperience.module.css';

// Import brand logos
import lendplusLogo from '../Assets/lendpluss.png';
import factsLogo from '../Assets/factsss.png';
import hillViewResidentsLogo from '../Assets/hill_side.png';
import victoriaBankLogo from '../Assets/victoria_bank.png';
import interBuildLogo from '../Assets/interbuld-r.png';
import xylemLogo from '../Assets/xylem-r.png';
import risingFreightLogo from '../Assets/ruff-r.png';
import brollKenyaLogo from '../Assets/broll_kenya-r.png';
import blackwoodHodgeLogo from '../Assets/blackword-r.png';

const BrandExperience = () => {
  const brands = [
    { name: 'Lendplus', logo: lendplusLogo },
    { name: 'Facts', logo: factsLogo },
    { name: 'Hill View Residents', logo: hillViewResidentsLogo },
    { name: 'Victoria Bank Limited', logo: victoriaBankLogo },
    { name: 'Inter Build Limited', logo: interBuildLogo },
    { name: 'Xylem', logo: xylemLogo },
    { name: 'Rising Freight Limited', logo: risingFreightLogo },
    { name: 'Broll Kenya Limited', logo: brollKenyaLogo },
    { name: 'Blackwood Hodge Limited', logo: blackwoodHodgeLogo },
  ];

  // Duplicate the brand array to create an infinite scrolling effect
  const scrollingBrands = [...brands, ...brands];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Our Brand Experience</h2>
      <div className={styles.divider}></div>
      <div className={styles.slider}>
        <div className={styles.sliderTrack}>
          {scrollingBrands.map((brand, index) => (
            <div key={index} className={styles.card}>
              <img src={brand.logo} alt={brand.name} className={styles.logo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandExperience;
