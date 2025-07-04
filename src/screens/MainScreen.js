import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import AdBanner from '../components/AdBanner';

export default function MainScreen() {
  const [data, setData] = useState([]);

  const handleMainAction = () => {
    // 여기에 앱의 주요 기능 구현
    Alert.alert('기능 실행', 'AI 피트니스 코치의 주요 기능이 실행되었습니다!');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>AI 피트니스 코치</Text>
        
        <TouchableOpacity style={styles.mainButton} onPress={handleMainAction}>
          <Text style={styles.buttonText}>시작하기</Text>
        </TouchableOpacity>
        
        <View style={styles.contentArea}>
          <Text style={styles.sectionTitle}>콘텐츠 영역</Text>
          <Text style={styles.placeholder}>
            여기에 AI 피트니스 코치의 주요 콘텐츠가 표시됩니다.
          </Text>
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
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  mainButton: {
    backgroundColor: '#2196F3',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  contentArea: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  placeholder: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});