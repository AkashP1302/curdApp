import React from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import UserCard from './UserCard';
import {dangerColor} from '../theme/appTheme';

const UserList = ({
  users,
  isFetchingMore,
  loadMore,
  navigation,
  openEditModal,
}) => {
  return (
    <FlatList
      data={users}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <UserCard
          user={item}
          navigation={navigation}
          openEditModal={openEditModal}
        />
      )}
      onEndReached={loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isFetchingMore ? (
          <ActivityIndicator size="small" color={dangerColor} />
        ) : null
      }
      showsVerticalScrollIndicator={false}
    />
  );
};

export default UserList;
