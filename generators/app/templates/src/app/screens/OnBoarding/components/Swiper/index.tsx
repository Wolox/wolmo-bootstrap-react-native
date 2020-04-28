import React, { useState, useRef } from 'react';
import { SafeAreaView } from 'react-native';
import Swiper from 'react-native-swiper';

import { SwiperProps } from './interface';
import screens from './screens';
import Footer from './components/Footer';
import styles from './styles';

function CustomStepSwipper({ onSkip }: SwiperProps) {
  const [scrollIndex, setScrollIndex] = useState<number>(0);
  const scrollView = useRef<Swiper>(null);

  const handleNextScreen = (): void => {
    scrollView.current!.scrollBy(1);
    setScrollIndex(scrollIndex + 1);
  };

  const handlePreviousScreen = (): void => {
    scrollView.current!.scrollBy(-1);
    setScrollIndex(scrollIndex - 1);
  };

  const handleChangeIndex = (index: number) => setScrollIndex(index);

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

export default CustomStepSwipper;
