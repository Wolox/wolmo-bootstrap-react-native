import React, { PureComponent } from 'react';
import { SafeAreaView } from 'react-native';
import Swiper from 'react-native-swiper';
import PropTypes from 'prop-types';

import screens, { screensComponents } from './screens';
import Footer from './components/Footer';
import styles from './styles';

class CustomStepSwipper extends PureComponent {
  state = {
    scrollIndex: 0
  };

  onHandleNextScreen = () => {
    this.scrollView.scrollBy(1);
    this.setState(prevState => ({ scrollIndex: prevState.scrollIndex + 1 }));
  };

  onHandlePreviousScreen = () => {
    this.scrollView.scrollBy(-1);
    this.setState(prevState => ({ scrollIndex: prevState.scrollIndex - 1 }));
  };

  handleChangeIndex = index => this.setState({ scrollIndex: index });

  onHandleScreenName = () => {
    const { scrollIndex } = this.state;
    return Object.keys(screens).find((screenName, index) => index === scrollIndex);
  };

  render() {
    const { skip } = this.props;
    Object.keys(screens).forEach((screenName, index) => console.tron.log(screenName));
    return (
      <SafeAreaView style={styles.container}>
        <Swiper
          activeDotStyle={styles.activeDot}
          dotStyle={styles.dot}
          paginationStyle={styles.pagination}
          loop={false}
          onIndexChanged={this.handleChangeIndex}
          ref={ref => (this.scrollView = ref)}
        >
          {Object.keys(screensComponents).map(screen => screensComponents[screen])}
        </Swiper>
        <Footer
          nextScreen={this.onHandleNextScreen}
          skip={skip}
          previousScreen={this.onHandlePreviousScreen}
          screenName={this.onHandleScreenName()}
        />
      </SafeAreaView>
    );
  }
}

CustomStepSwipper.propTypes = {
  skip: PropTypes.func.isRequired
};

export default CustomStepSwipper;
