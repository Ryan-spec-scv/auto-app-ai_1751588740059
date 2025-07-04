import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AdBanner from '../components/AdBanner';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>AI 피트니스 코치에 오신 것을 환영합니다!</Text>
        <Text style={styles.description}>
          개인 맞춤형 AI 운동 가이드 앱으로, 사용자의 체형과 목표에 맞춘 운동 루틴을 제공합니다.
        </Text>
        
        <View style={styles.featuresContainer}>
          <Text style={styles.featuresTitle}>주요 기능:</Text>
          <Text style={styles.feature}>• AI 운동 추천</Text>\n          <Text style={styles.feature}>• 자세 분석</Text>\n          <Text style={styles.feature}>• 진도 추적</Text>\n          <Text style={styles.feature}>• 영양 조언</Text>
        </View>
      </ScrollView>
      
      <AdBanner />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24,
    textAlign: 'center',
    color: '#666',
  },
  featuresContainer: {
    marginTop: 20,
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  feature: {
    fontSize: 16,
    marginBottom: 8,
    paddingLeft: 10,
  },
});