import React, { PureComponent } from 'react';
import { SafeAreaView } from 'react-native';
import Swiper from 'react-native-swiper';
import PropTypes from 'prop-types';

import screens from './screens';
import Footer from './components/Footer';
import styles from './styles';

class CustomStepSwipper extends PureComponent {
  state = {
    scrollIndex: 0
  };

  handleNextScreen = () => {
    this.scrollView.scrollBy(1);
    this.setState(prevState => ({ scrollIndex: prevState.scrollIndex + 1 }));
  };

  handlePreviousScreen = () => {
    this.scrollView.scrollBy(-1);
    this.setState(prevState => ({ scrollIndex: prevState.scrollIndex - 1 }));
  };

  handleChangeIndex = index => this.setState({ scrollIndex: index });

  handleRef = ref => (this.scrollView = ref);

  render() {
    const { onSkip } = this.props;
    const { scrollIndex } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Swiper
          activeDotStyle={styles.activeDot}
          dotStyle={styles.dot}
          paginationStyle={styles.pagination}
          loop={false}
          onIndexChanged={this.handleChangeIndex}
          ref={this.handleRef}
        >
          {screens}
        </Swiper>
        <Footer
          onNextScreen={this.handleNextScreen}
          onSkip={onSkip}
          onPreviousScreen={this.handlePreviousScreen}
          screenIndex={scrollIndex}
        />
      </SafeAreaView>
    );
  }
}

CustomStepSwipper.propTypes = {
  onSkip: PropTypes.func.isRequired
};

export default CustomStepSwipper;
