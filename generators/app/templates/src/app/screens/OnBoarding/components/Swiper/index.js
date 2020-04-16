import React, { useState, useRef } from 'react';
import { SafeAreaView } from 'react-native';
import Swiper from 'react-native-swiper';
import PropTypes from 'prop-types';

import screens from './screens';
import Footer from './components/Footer';
import styles from './styles';

function CustomStepSwipper({ onSkip }) {
  const [scrollIndex, setScrollIndex] = useState(0);
  const scrollView = useRef(null);

  const handleNextScreen = () => {
    scrollView.current.scrollBy(1);
    setScrollIndex(scrollIndex + 1);
  };

  const handlePreviousScreen = () => {
    scrollView.current.scrollBy(-1);
    setScrollIndex(scrollIndex - 1);
  };

  const handleChangeIndex = index => setScrollIndex(index);

  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        activeDotStyle={styles.activeDot}
        dotStyle={styles.dot}
        paginationStyle={styles.pagination}
        loop={false}
        onIndexChanged={handleChangeIndex}
        ref={scrollView}>
        {screens}
      </Swiper>
      <Footer
        onNextScreen={handleNextScreen}
        onSkip={onSkip}
        onPreviousScreen={handlePreviousScreen}
        screenIndex={scrollIndex}
      />
    </SafeAreaView>
  );
}

CustomStepSwipper.propTypes = {
  onSkip: PropTypes.func.isRequired
};

export default CustomStepSwipper;
