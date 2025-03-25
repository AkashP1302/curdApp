import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {User, ArrowRight, Trash2} from 'lucide-react-native';
import {useDispatch} from 'react-redux';
import {Swipeable, GestureHandlerRootView} from 'react-native-gesture-handler';
import {deleteUser} from '../redux/userThunk';
import styles from './styles/UserCard.styles';
import {appColor, whiteColor} from '../theme/appTheme';

const UserCard = ({user, navigation, openEditModal}) => {
  const dispatch = useDispatch();

  const handleDelete = userId => {
    dispatch(deleteUser(userId))
      .unwrap()
      .then(() => {
        console.log('User deleted successfully');
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

  const renderRightActions = () => (
    <TouchableOpacity
      onPress={() => handleDelete(user.id)}
      style={styles.deleteButton}>
      <Text style={styles.deleteText}>Delete</Text>
      <Trash2 size={30} color={whiteColor} />
    </TouchableOpacity>
  );

  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => openEditModal(user)}>
          <View style={styles.cardContent}>
            <User size={24} color={appColor} style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{user.name}</Text>
              <Text style={styles.email}>{user.email}</Text>
            </View>
            <ArrowRight
              size={18}
              color={whiteColor}
              onPress={() => navigation.navigate('User Detail', {user})}
            />
          </View>
        </TouchableOpacity>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default UserCard;
