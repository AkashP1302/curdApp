import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {
  AlertCircle,
  MapPin,
  Building,
  Mail,
  Phone,
  Globe,
} from 'lucide-react-native';

import styles from './styles/UserDetailScreen.styles';
import {appColor, dangerColor} from '../theme/appTheme';

const UserDetailScreen = ({navigation, route}) => {
  const {user} = route?.params;

  if (!user || Object.keys(user).length === 0) {
    return (
      <View style={styles.centered}>
        <AlertCircle color={dangerColor} size={40} />
        <Text style={styles.errorText}>User not found</Text>
      </View>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <View style={styles.card}>
        <Text style={styles.title}>{user.name}</Text>
        <Text style={styles.subtitle}>{user.username}</Text>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Mail color={appColor} size={20} />
          <Text style={styles.info}> {user.email}</Text>
        </View>
        <View style={styles.row}>
          <Phone color={appColor} size={20} />
          <Text style={styles.info}> {user.phone}</Text>
        </View>
        <View style={styles.row}>
          <Globe color={appColor} size={20} />
          <Text style={styles.info}> {user.website}</Text>
        </View>
        {user?.address && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <MapPin color={appColor} size={22} />
              <Text style={styles.sectionTitle}> Address</Text>
            </View>
            <Text style={styles.info}>
              {user?.address?.street}, {user?.address?.suite}
            </Text>
            <Text style={styles.info}>
              {user?.address?.city}, {user?.address?.zipcode}
            </Text>
          </View>
        )}

        {user?.company && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Building color={appColor} size={22} />
              <Text style={styles.sectionTitle}> Company</Text>
            </View>
            <Text style={styles.info}>{user?.company?.name}</Text>
            <Text style={styles.info}>{user?.company?.catchPhrase}</Text>
            <Text style={styles.info}>{user?.company?.bs}</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default UserDetailScreen;
