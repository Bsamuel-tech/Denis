import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

interface MoistureGaugeProps {
  value: number;
  minValue?: number;
  maxValue?: number;
  isOptimal?: boolean;
}

export default function MoistureGauge({ 
  value, 
  minValue = 0, 
  maxValue = 100,
  isOptimal = true
}: MoistureGaugeProps) {
  const getStatusColor = () => {
    if (isOptimal) return '#27AE60';
    if (value < 20) return '#EB5757'; // Too dry
    if (value > 80) return '#F5A623'; // Too wet
    return '#27AE60'; // Optimal
  };

  const getStatusText = () => {
    if (isOptimal) return 'Optimal';
    if (value < 20) return 'Too Dry';
    if (value > 80) return 'Too Wet';
    return 'Optimal';
  };

  const webStyles = Platform.select({
    web: {
      transform: 'none',
      transformOrigin: 'center',
    },
    default: {},
  });

  return (
    <View style={[styles.container, webStyles]}>
      <Text style={styles.title}>Current Average Moisture</Text>
      <Text style={styles.valueText}>{value}%</Text>
      
      <View style={styles.gaugeContainer}>
        <Text style={styles.minLabel}>{minValue}%</Text>
        <View style={styles.gaugeTrack}>
          <View 
            style={[
              styles.gaugeFill, 
              { 
                width: `${(value / (maxValue - minValue)) * 100}%`,
                backgroundColor: getStatusColor()
              }
            ]} 
          />
        </View>
        <Text style={styles.maxLabel}>{maxValue}%</Text>
      </View>
      
      <Text style={[styles.statusText, { color: getStatusColor() }]}>
        {value}% ({getStatusText()})
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    alignSelf: 'flex-start',
    fontFamily: 'Inter-SemiBold',
  },
  valueText: {
    fontSize: 56,
    fontWeight: 'bold',
    marginVertical: 10,
    fontFamily: 'Inter-Bold',
  },
  gaugeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 8,
  },
  minLabel: {
    width: 40,
    textAlign: 'center',
    fontSize: 14,
    color: '#8E8E93',
    fontFamily: 'Inter-Regular',
  },
  maxLabel: {
    width: 40,
    textAlign: 'center',
    fontSize: 14,
    color: '#8E8E93',
    fontFamily: 'Inter-Regular',
  },
  gaugeTrack: {
    flex: 1,
    height: 12,
    backgroundColor: '#F2F2F7',
    borderRadius: 6,
    overflow: 'hidden',
  },
  gaugeFill: {
    height: 12,
    borderRadius: 6,
  },
  statusText: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
    fontFamily: 'Inter-SemiBold',
  },
});