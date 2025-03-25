import React, {useCallback, useEffect, useState} from 'react';
import {
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  ActivityIndicator,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addUser, fetchUsers, updateUser} from '../redux/userThunk';
import {useFocusEffect} from '@react-navigation/native';
import UserList from '../components/UserList';
import BottomSheetModal from '../components/BottomSheetModal';
import FloatingButton from '../components/FloatingButton';
import UserForm from '../components/UserForm';
import styles from '../screens/styles/UserListScreen.styles';
import {appColor} from '../theme/appTheme';

const UserListScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {users, loading, error} = useSelector(state => state.users);

  const [visibleUsers, setVisibleUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(7);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useFocusEffect(
    useCallback(() => {
      if (users.length === 0) dispatch(fetchUsers());
    }, [dispatch, users.length]),
  );

  useEffect(() => {
    if (users.length > 0) {
      setVisibleUsers(users.slice(0, currentIndex));
    }
  }, [users, currentIndex]);

  const loadMore = () => {
    if (currentIndex < users.length && !isFetchingMore) {
      setIsFetchingMore(true);
      setTimeout(() => {
        setVisibleUsers(users.slice(0, currentIndex + 5));
        setCurrentIndex(prevIndex => prevIndex + 5);
        setIsFetchingMore(false);
      }, 1000);
    }
  };

  const handleSave = async formValues => {
    const isUpdate = !!formValues.id;

    const action = isUpdate
      ? updateUser({userId: formValues.id, userData: formValues})
      : addUser(formValues);

    try {
      const result = await dispatch(action).unwrap();

      setModalVisible(false);
      if (isUpdate) setSelectedUser(null);
    } catch (error) {
      navigation.navigate('Users');
      console.log(`Error ${isUpdate ? 'updating' : 'adding'} user:`, error);
    }
  };

  const openEditModal = useCallback(user => {
    setSelectedUser(user);
    setModalVisible(true);
  }, []);

  if (error) return <Text style={styles.error}>{error}</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <UserList
        users={visibleUsers}
        isFetchingMore={isFetchingMore}
        loadMore={loadMore}
        navigation={navigation}
        openEditModal={openEditModal}
      />

      <FloatingButton onPress={() => setModalVisible(true)} />
      <BottomSheetModal
        visible={modalVisible}
        onDismiss={() => {
          console.log('@@@@@call');

          setModalVisible(false);
          setSelectedUser(null);
        }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1, paddingBottom: 100}}>
          <UserForm selectedUser={selectedUser} handleSave={handleSave} />
        </KeyboardAvoidingView>
      </BottomSheetModal>
    </SafeAreaView>
  );
};

export default UserListScreen;
