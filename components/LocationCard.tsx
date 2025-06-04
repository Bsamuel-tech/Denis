import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MapPin } from 'lucide-react-native';

interface LocationCardProps {
  name: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  sensorCount: number;
  lastReading: {
    time: string;
    value: number;
    isOptimal: boolean;
  };
}

export default function LocationCard({
  name,
  coordinates,
  sensorCount,
  lastReading,
}: LocationCardProps) {
  const getStatusColor = (value: number, isOptimal: boolean) => {
    if (isOptimal) return '#27AE60';
    if (value < 20) return '#EB5757'; // Too dry
    if (value > 80) return '#F5A623'; // Too wet
    return '#27AE60'; // Optimal
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.sensorBadge}>
          <Text style={styles.sensorCount}>{sensorCount} Sensors</Text>
        </View>
      </View>
      
      <View style={styles.coordinates}>
        <MapPin size={16} color="#8E8E93" />
        <Text style={styles.coordinatesText}>
          {coordinates.latitude.toFixed(4)}, {coordinates.longitude.toFixed(4)}
        </Text>
      </View>
      
      <View style={styles.readingContainer}>
        <View style={styles.readingRow}>
          <Text style={styles.readingLabel}>Last reading:</Text>
          <Text style={styles.readingTime}>{lastReading.time}</Text>
        </View>
        
        <View style={styles.moistureContainer}>
          <Text style={styles.rangeLabel}>0%</Text>
          <View style={styles.gaugeTrack}>
            <View 
              style={[
                styles.gaugeFill, 
                { 
                  width: `${lastReading.value}%`,
                  backgroundColor: getStatusColor(lastReading.value, lastReading.isOptimal)
                }
              ]} 
            />
          </View>
          <Text style={styles.rangeLabel}>100%</Text>
        </View>
        
        <Text 
          style={[
            styles.moistureValue, 
            { color: getStatusColor(lastReading.value, lastReading.isOptimal) }
          ]}
        >
          {lastReading.value}% {lastReading.isOptimal ? '(Optimal)' : ''}
        </Text>
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
  name: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Inter-SemiBold',
  },
  sensorBadge: {
    backgroundColor: '#F2F2F7',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  sensorCount: {
    fontSize: 12,
    color: '#4A4A4A',
    fontFamily: 'Inter-Medium',
  },
  coordinates: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  coordinatesText: {
    fontSize: 14,
    color: '#8E8E93',
    marginLeft: 4,
    fontFamily: 'Inter-Regular',
  },
  readingContainer: {
    marginTop: 8,
  },
  readingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  readingLabel: {
    fontSize: 14,
    color: '#4A4A4A',
    fontFamily: 'Inter-Regular',
  },
  readingTime: {
    fontSize: 14,
    color: '#4A4A4A',
    fontWeight: '500',
    fontFamily: 'Inter-Medium',
  },
  moistureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  rangeLabel: {
    width: 30,
    fontSize: 12,
    color: '#8E8E93',
    fontFamily: 'Inter-Regular',
  },
  gaugeTrack: {
    flex: 1,
    height: 10,
    backgroundColor: '#F2F2F7',
    borderRadius: 5,
    marginHorizontal: 4,
    overflow: 'hidden',
  },
  gaugeFill: {
    height: 10,
    borderRadius: 5,
  },
  moistureValue: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 4,
    fontFamily: 'Inter-SemiBold',
  },
});