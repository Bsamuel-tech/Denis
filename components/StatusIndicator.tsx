import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type StatusType = 'Online' | 'Offline' | 'Maintenance';

interface StatusIndicatorProps {
  status: StatusType;
  small?: boolean;
}

export default function StatusIndicator({ status, small = false }: StatusIndicatorProps) {
  const getStatusColor = () => {
    switch (status) {
      case 'Online':
        return '#27AE60';
      case 'Offline':
        return '#EB5757';
      case 'Maintenance':
        return '#F5A623';
      default:
        return '#8E8E93';
    }
  };

  return (
    <View style={[
      styles.container, 
      { backgroundColor: getStatusColor() },
      small && styles.smallContainer
    ]}>
      <Text style={[styles.text, small && styles.smallText]}>{status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Inter-SemiBold',
  },
  smallText: {
    fontSize: 12,
  },
});