import { QRContent } from 'gimly-id-qr-code';
import React, { FC } from 'react';
import { BarCodeReadEvent, RNCamera } from 'react-native-camera';

import { QRScannerProps } from '../types';

export const GimlyIDQRCodeScanner: FC<QRScannerProps> = (props: QRScannerProps) => {
  const { style, onRead, type } = props;

  return (
    <RNCamera
      style={style}
      type={type}
      barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
      captureAudio={false}
      onBarCodeRead={(event: BarCodeReadEvent) => read(event, onRead)}
    />
  );
};

const read = (event: BarCodeReadEvent, onRead: (props: QRContent) => void) => {
  if (onRead) {
    try {
      const content: QRContent = JSON.parse(`{${event.data}}`);
      onRead(content);
    } catch (error) {
      return;
    }
  }
};
