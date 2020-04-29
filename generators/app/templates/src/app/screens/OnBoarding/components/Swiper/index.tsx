import React, { useState, useRef, useCallback } from 'react';
import { SafeAreaView } from 'react-native';
import Swiper from 'react-native-swiper';

import Footer from './components/Footer';
import screens from './screens';
import styles from './styles';

interface Props {
  onSkip: () => void;
}

function CustomStepSwipper({ onSkip }: Props) {
  const [scrollIndex, setScrollIndex] = useState<number>(0);
  const scrollView = useRef<Swiper | null>(null);

  const handleNextScreen = useCallback(() => {
    scrollView.current!.scrollBy(1);
    setScrollIndex(scrollIndex + 1);
  }, [scrollIndex]);
  const handlePreviousScreen = useCallback(() => {
    scrollView.current!.scrollBy(-1);
    setScrollIndex(scrollIndex - 1);
  }, [scrollIndex]);
  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        activeDotStyle={styles.activeDot}
        dotStyle={styles.dot}
        paginationStyle={styles.pagination}
        loop={false}
        onIndexChanged={setScrollIndex}
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
