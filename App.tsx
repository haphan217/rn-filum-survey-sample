import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import SurveyWebView from 'react-native-filum-survey';

function App(): React.JSX.Element {
  const [webviewVisible, setWebviewVisible] = useState(false);

  return (
    <SafeAreaView style={styles.centeredView}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setWebviewVisible(true)}>
        <Text>Show</Text>
      </TouchableOpacity>
      <SurveyWebView
        visible={webviewVisible}
        onClose={() => setWebviewVisible(false)}
        campaignId="77360f5e-dd01-434f-ab48-c58bf5104a39"
        userEmail="ha@filum.ai"
        userPhone="123123123"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    elevation: 3,
    zIndex: 1,
  },
});

export default App;
