import React, {useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  PanResponder,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
  Modal,
} from 'react-native';

import styles from '../components/styles/BottomSheetModal.styles';

const {height} = Dimensions.get('screen');

const BottomSheetModal = ({
  visible,
  onDismiss,
  children,
  sheetHeight = height * 0.73,
}) => {
  const panY = useRef(new Animated.Value(height)).current;

  const resetPositionAnim = Animated.timing(panY, {
    toValue: height - sheetHeight,
    duration: 300,
    useNativeDriver: true,
  });

  const closeAnim = Animated.timing(panY, {
    toValue: height,
    duration: 500,
    useNativeDriver: true,
  });

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (_, gestureState) =>
        Math.abs(gestureState.dy) > 5,
      onPanResponderMove: Animated.event([null, {dy: panY}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 100) {
          closeAnim.start(onDismiss);
        } else {
          resetPositionAnim.start();
        }
      },
    }),
  ).current;

  useEffect(() => {
    if (visible) {
      resetPositionAnim.start();
    }
  }, [visible]);

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onDismiss}>
      <TouchableWithoutFeedback onPress={onDismiss}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <Animated.View
              style={[
                styles.container,
                {height: sheetHeight, transform: [{translateY: panY}]},
              ]}
              {...panResponder.panHandlers}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{maxHeight: sheetHeight}}
                bounces={false}
                onLayout={event => {
                  const contentHeight = event.nativeEvent.layout.height;
                }}>
                {children}
              </ScrollView>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default BottomSheetModal;
