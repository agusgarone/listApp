import {Animated} from 'react-native';

export const fadeOut = ({
  fadeAnim,
  setAnimation,
}: {
  fadeAnim: Animated.Value;
  setAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  Animated.timing(fadeAnim, {
    toValue: 0,
    duration: 700,
    useNativeDriver: true,
  }).start();
  setAnimation(false);
};
