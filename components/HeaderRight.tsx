import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Bell, User } from 'lucide-react-native';
import { useRouter } from 'expo-router';

interface HeaderRightProps {
  notificationCount?: number;
  onNotificationPress?: () => void;
  onProfilePress?: () => void;
}

export default function HeaderRight({
  notificationCount = 0,
  onNotificationPress,
  onProfilePress,
}: HeaderRightProps) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.iconButton} 
        onPress={onNotificationPress}
      >
        <Bell color="#4A4A4A" size={22} />
        {notificationCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{notificationCount}</Text>
          </View>
        )}
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.iconButton}
        onPress={onProfilePress}
      >
        <User color="#4A4A4A" size={22} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: Platform.OS === 'web' ? 16 : 48,
    right: 16,
    zIndex: 1000,
  },
  iconButton: {
    marginLeft: 16,
    position: 'relative',
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  badge: {
    position: 'absolute',
    top: -6,
    right: -6,
    backgroundColor: '#EB5757',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Inter-Bold',
  },
});