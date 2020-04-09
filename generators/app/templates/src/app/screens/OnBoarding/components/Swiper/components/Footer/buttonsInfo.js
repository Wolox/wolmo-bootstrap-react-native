import i18next from 'i18next';

export const screensButtonInfo = ({ onNextScreen, onSkip, onPreviousScreen, screenIndex }) =>
  [
    {
      firstButton: {
        onPress: onSkip,
        title: i18next.t('ONBOARDING:SKIP')
      },
      secondButton: {
        onPress: onNextScreen,
        title: i18next.t('ONBOARDING:NEXT')
      }
    },
    {
      firstButton: {
        onPress: onPreviousScreen,
        title: i18next.t('ONBOARDING:PREVIOUS')
      },
      secondButton: {
        onPress: onNextScreen,
        title: i18next.t('ONBOARDING:NEXT')
      }
    },
    {
      firstButton: {
        onPress: onPreviousScreen,
        title: i18next.t('ONBOARDING:PREVIOUS')
      },
      secondButton: {
        onPress: onSkip,
        title: i18next.t('ONBOARDING:FINISH')
      }
    }
  ][screenIndex];
