import React, {useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  GestureEvent,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import theme from '../../common/theme';
import {useBottomSheetAnimation} from '../../common/customHooks/useBottomSheetAnimation';
import {fadeOut} from '../../common/utils/fadeOut';
import Content from './Content';

interface IBottomSheet {
  show: boolean;
  onDismiss: () => void;
  setAnimation: React.Dispatch<React.SetStateAction<boolean>>;
  animation: boolean;
}

const BottomSheet = ({
  show,
  onDismiss,
  setAnimation,
  animation,
}: IBottomSheet) => {
  const bottomSheetHeight = Dimensions.get('window').height * 0.875;
  const [open, setOpen] = useState(show);
  const bottom = useRef(new Animated.Value(-bottomSheetHeight)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useBottomSheetAnimation({
    animation,
    bottom,
    bottomSheetHeight,
    fadeAnim,
    setOpen,
    show,
  });

  const onGesture = (event: GestureEvent<PanGestureHandlerEventPayload>) => {
    if (event?.nativeEvent?.translationY > 0) {
      bottom.setValue(-event?.nativeEvent?.translationY);
    }
  };

  const onGestureEnd = (event: any) => {
    if (event?.nativeEvent?.translationY > bottomSheetHeight / 3) {
      onDismiss();
      fadeOut({fadeAnim, setAnimation});
    } else {
      bottom.setValue(0);
    }
  };

  if (!open) {
    return null;
  }
  return (
    <>
      <Animated.View
        style={[
          styles.container,
          {
            backgroundColor: '#52525240',
            height: Dimensions.get('window').height,
            opacity: fadeAnim,
          },
        ]}
      />
      <Animated.View
        style={[styles.container, {height: bottomSheetHeight, bottom: bottom}]}>
        <TouchableWithoutFeedback
          onPress={() => {
            onDismiss();
            fadeOut({fadeAnim, setAnimation});
          }}>
          <View
            style={{
              height: Dimensions.get('window').height * 0.125,
            }}
          />
        </TouchableWithoutFeedback>
        <View style={[styles.modal]}>
          <PanGestureHandler onGestureEvent={onGesture} onEnded={onGestureEnd}>
            <View style={styles.header}>
              <View style={{height: 4, width: 60, backgroundColor: 'black'}} />
            </View>
          </PanGestureHandler>
          <Content
            animation={animation}
            onDismiss={onDismiss}
            setAnimation={setAnimation}
          />
        </View>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 2,
  },
  modal: {
    height: Dimensions.get('window').height * 0.75,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      height: -3,
      width: 0,
    },
    shadowOpacity: 0.24,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
    backgroundColor: '#F1F1F3',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    minHeight: 30,
  },
  slideBar: {
    marginVertical: 14,
  },
  title: {
    fontSize: theme.fontSize.l,
    // fontFamily: theme.font.principalBold,
    paddingBottom: 12,
    paddingHorizontal: 24,
    alignSelf: 'flex-start',
  },
});

export default BottomSheet;
