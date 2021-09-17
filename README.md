# Gimlyid-qr-code-scanner
A GimlyID QR code scanner component for React-Native.

### Example
 ```js
import GimlyIDQRCodeScanner, {CameraType} from 'gimlyid-qr-code-scanner';

function App() {
  return (
    <View>
      <GimlyIDQRCodeScanner style={{flex: 1, width: '100%'}} type={CameraType.FRONT} onRead={content => console.log(content)}/>
    </View>
  );
}
 ```

### API
| prop                 | type                         | default value | description                                                                                |
| -------------------- | ---------------------------- | ------------- | ------------------------------------------------------------------------------------------ |
| `style`              | `React.CSSProperties`        |               | Sets the styling of the qr code scanner.                                                   |
| `type`               | `CameraType`                 | 'BACK'        | Sets which camera type should be used.                                                     |
| `onRead`             | `Function`                   |               | The onRead will be called when the QR code is read and will have access to the QR content. |

### Usage

#### Android

You must add the following permissions to android/app/src/main/AndroidManifest.xml:
 ```xml
<uses-permission android:name="android.permission.CAMERA" />
 ```

You’ll also need to set the dimension strategy in android/app/build.gradle. It has no default and you’ll get an error if you don’t define it:
 ```xml
defaultConfig {
  applicationId "com.cameraexample"
  minSdkVersion rootProject.ext.minSdkVersion
  missingDimensionStrategy 'react-native-camera', 'general'
  targetSdkVersion rootProject.ext.targetSdkVersion
  versionCode 1
  versionName "1.0"
 ```

Note: The dimension strategy should normally be set to general as above. However, you can set it to mlkit instead, if you’d like to use MLKit for QR recognition.

#### iOS

You must update Info.plist with a usage description for camera

 ```
...
<key>NSCameraUsageDescription</key>
<string>Your own description of the purpose</string>
...
 ```

### Installation
```shell
yarn add gimlyid-qr-code-scanner
```

### Build
```shell
yarn build
```

### Utility scripts
There are other utility scripts that help with development.

* `yarn fix` - runs `eslint --fix` as well as `prettier` to fix code style.
