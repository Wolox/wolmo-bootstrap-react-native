import React, { PureComponent } from 'react';
import Swiper from 'react-native-swiper';
import PropTypes from 'prop-types';

import FirstScreen from '../FirstScreen';
import SecondScreen from '../SecondScreen';
import ThirdScreen from '../ThirdScreen';

import styles from './styles';

class CustomStepSwipper extends PureComponent {
  onHandleNextScreen = () => {
    this.scrollView.scrollBy(1);
  };

  onHandlePreviousScreen = () => {
    this.scrollView.scrollBy(-1);
  };

  render() {
    const { skip } = this.props;
    return (
      <Swiper
        activeDotStyle={styles.activeDot}
        dotStyle={styles.dot}
        paginationStyle={styles.pagination}
        loop={false}
        ref={ref => (this.scrollView = ref)}>
        <FirstScreen nextScreen={this.onHandleNextScreen} skip={skip} />
        <SecondScreen nextScreen={this.onHandleNextScreen} previousScreen={this.onHandlePreviousScreen} />
        <ThirdScreen previousScreen={this.onHandlePreviousScreen} skip={skip} />
      </Swiper>
    );
  }
}

CustomStepSwipper.propTypes = {
  skip: PropTypes.func.isRequired
};

export default CustomStepSwipper;
