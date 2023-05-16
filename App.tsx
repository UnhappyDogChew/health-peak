/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>헬스피크</Text>
          <Text style={styles.peakText}>430kg</Text>
        </View>
        <View style={styles.levelContainer}>
          <View style={styles.levelTitleContainer}>
            <Text style={styles.label}>레벨</Text>
            <Icon name='diamond' size={20} color='#F6344C' />
          </View>
          <View style={styles.levelGage}></View>
          <View style={styles.nextLevelContainer}>
            <Text>다음 레벨까지 ??</Text>
          </View>
        </View>
        <View style={styles.recordTitleContainer}>
          <Text style={styles.label}>기록</Text>
          <TouchableOpacity>
            <Icon name='plus-square-o' size={20} color='#000000' />
          </TouchableOpacity>
        </View>
        <ScrollView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
  },
  titleContainer: {

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  peakText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  levelContainer: {
    paddingTop: 20,
  },
  levelTitleContainer: {
    flexDirection: 'row',
  },
  label: {
    fontSize: 20,
    fontWeight: '500',
  },
  levelGage: {
    marginTop: 12,
    height: 20,
    width: '100%',
    backgroundColor: '#F6344C',
  },
  nextLevelContainer: {
    marginTop: 8,
    width: '100%',
    flexDirection: 'row-reverse'
  },
  recordTitleContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    width: '100%'
  }
});

export default App;
