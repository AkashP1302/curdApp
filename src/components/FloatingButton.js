import React from 'react';
import {TouchableOpacity} from 'react-native';
import {PlusCircle} from 'lucide-react-native';
import {whiteColor} from '../theme/appTheme';

const FloatingButton = ({onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginLeft: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      }}>
      <PlusCircle size={54} title="Open Modal" color={whiteColor} />
    </TouchableOpacity>
  );
};

export default FloatingButton;
