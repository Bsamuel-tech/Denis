import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Wifi, Battery } from 'lucide-react-native';
import StatusIndicator from './StatusIndicator';

interface SystemStatusCardProps {
  name: string;
  status: 'Online' | 'Offline' | 'Maintenance';
  lastUpdate: string;
  battery: number;
  signal: number;
}

export default function SystemStatusCard({
  name,
  status,
  lastUpdate,
  battery,
  signal,
}: SystemStatusCardProps) {
  const getProgressColor = (value: number) => {
    if (value > 70) return '#27AE60';
    if (value > 30) return '#F5A623';
    return '#EB5757';
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Wifi size={18} color="#27AE60" style={styles.icon} />
          <Text style={styles.title}>{name}</Text>
        </View>
        <StatusIndicator status={status} />
      </View>
      
      <Text style={styles.updateText}>Last update: {lastUpdate}</Text>
      
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <View style={styles.statHeader}>
            <Battery size={16} color="#4A4A4A" />
            <Text style={styles.statLabel}>Battery</Text>
          </View>
          <View style={styles.progressContainer}>
            <View 
              style={[
                styles.progressBar, 
                { width: `${battery}%`, backgroundColor: getProgressColor(battery) }
              ]} 
            />
          </View>
          <Text style={styles.statValue}>{battery}%</Text>
        </View>
        
        <View style={styles.statItem}>
          <View style={styles.statHeader}>
            <Wifi size={16} color="#4A4A4A" />
            <Text style={styles.statLabel}>Signal</Text>
          </View>
          <View style={styles.progressContainer}>
            <View 
              style={[
                styles.progressBar, 
                { width: `${signal}%`, backgroundColor: getProgressColor(signal) }
              ]} 
            />
          </View>
          <Text style={styles.statValue}>{signal}%</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    borderTopWidth: 4,
    borderTopColor: '#27AE60',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Inter-SemiBold',
  },
  updateText: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 16,
    fontFamily: 'Inter-Regular',
  },
  statsContainer: {
    gap: 16,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 80,
  },
  statLabel: {
    marginLeft: 8,
    fontSize: 14,
    color: '#4A4A4A',
    fontFamily: 'Inter-Regular',
  },
  statValue: {
    width: 50,
    textAlign: 'right',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Inter-Medium',
  },
  progressContainer: {
    flex: 1,
    height: 8,
    backgroundColor: '#F2F2F7',
    borderRadius: 4,
    marginHorizontal: 8,
    overflow: 'hidden',
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
  },
});