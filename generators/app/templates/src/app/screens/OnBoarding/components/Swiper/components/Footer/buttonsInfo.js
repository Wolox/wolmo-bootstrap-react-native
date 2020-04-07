import i18next from 'i18next';

export const screensButtonInfo = ({ nextScreen, skip, previousScreen, screenName }) =>
  ({
    FirstScreen: {
      firstButton: {
        onPress: skip,
        title: i18next.t('ONBOARDING:SKIP')
      },
      secondButton: {
        onPress: nextScreen,
        title: i18next.t('ONBOARDING:NEXT')
      }
    },
    SecondScreen: {
      firstButton: {
        onPress: previousScreen,
        title: i18next.t('ONBOARDING:PREVIOUS')
      },
      secondButton: {
        onPress: nextScreen,
        title: i18next.t('ONBOARDING:NEXT')
      }
    },
    ThirdScreen: {
      firstButton: {
        onPress: previousScreen,
        title: i18next.t('ONBOARDING:PREVIOUS')
      },
      secondButton: {
        onPress: skip,
        title: i18next.t('ONBOARDING:SKIP')
      }
    }
  }[screenName]);
