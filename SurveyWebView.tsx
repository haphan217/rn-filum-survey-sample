import React from 'react';
import {Image, Modal, StyleSheet, TouchableOpacity, View} from 'react-native';
import {WebView} from 'react-native-webview';

interface Props {
  visible: boolean;
  campaignId: string;
  userPhone?: string;
  userEmail?: string;
  transactionId?: string;
  onClose?: () => void;
}

const SurveyWebview = ({
  visible,
  campaignId,
  userEmail,
  userPhone,
  transactionId,
  onClose,
}: Props) => {
  const uri = `https://survey.filum.asia/${campaignId}?User Phone=${userPhone}&User Email=${userEmail}&Transaction ID=${transactionId}&Source=mobile`;

  return (
    <Modal
      presentationStyle="pageSheet"
      // transparent={true}
      animationType="slide"
      visible={visible}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '95%',
            marginBottom: 10,
            height: '30%',
            borderRadius: 10,
            overflow: 'hidden',
          }}>
          <WebView
            source={{
              uri,
            }}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.closeIconWrapper} onPress={onClose}>
        <Image
          style={styles.closeIcon}
          src="https://img.icons8.com/?size=256&id=8112&format=png"
        />
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  closeIcon: {
    width: 14,
    height: 14,
  },
  closeIconWrapper: {
    position: 'absolute',
    right: 0,
    bottom: '25%',
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SurveyWebview;
