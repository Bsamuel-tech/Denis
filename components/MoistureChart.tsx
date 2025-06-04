import React from 'react';
import { Dimensions, View, Text, StyleSheet, Platform } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

interface MoistureChartProps {
  data: number[];
  labels: string[];
}

export default function MoistureChart({ data, labels }: MoistureChartProps) {
  const screenWidth = Platform.OS === 'web' ? 
    Math.min(Dimensions.get('window').width - 40, 800) : 
    Dimensions.get('window').width - 40;

  const webStyles = Platform.select({
    web: {
      transform: 'none',
      transformOrigin: 'center',
      alignSelf: 'center',
      width: '100%',
      maxWidth: 800,
    },
    default: {},
  });

  return (
    <View style={[styles.container, webStyles]}>
      <Text style={styles.title}>24-Hour Soil Moisture Readings</Text>
      <LineChart
        data={{
          labels: labels,
          datasets: [
            {
              data: data,
              color: (opacity = 1) => `rgba(39, 174, 96, ${opacity})`,
              strokeWidth: 2,
            },
          ],
        }}
        width={screenWidth}
        height={220}
        yAxisSuffix="%"
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '4',
            strokeWidth: '2',
            stroke: '#27AE60',
          },
        }}
        bezier
        style={styles.chart}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    fontFamily: 'Inter-SemiBold',
    textAlign: 'center',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});