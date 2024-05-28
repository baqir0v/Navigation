import { StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import BottomSheet from '@gorhom/bottom-sheet'

const About = () => {
  const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);

  return (
    <View style={styles.container}>
      <BottomSheet index={1} snapPoints={snapPoints}>
        <View style={styles.contentContainer}>
          <Text style={styles.containerHeadline}>Salam Tagi</Text>
        </View>
      </BottomSheet>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center'
  },
  containerHeadline: {
    fontSize: 24,
    fontWeight: '600',
    padding: 20
  }
});