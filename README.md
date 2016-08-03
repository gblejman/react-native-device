## react-native-device

https://github.com/rebeccahughes/react-native-device-info + extras

Extras:
- user agent parsing

## Installation

```shell
npm i @gblejman/react-native-device --save
```

```shell
rnpm link react-native-device-info
```

## Usage

```javascript
import getDevice from '@gblejman/react-native-device';
console.log(getDevice());
```

```json
{
  "name": "iPhone Simulator",
  "uniqueId": "AAD6AC4D-86CD-435D-BEDA-C579D5932BC2",
  "deviceId": "x86_64",
  "manufacturer": "Apple",
  "model": "Simulator",
  "system": {
    "name": "iPhone OS",
    "version": "9.3"
  },
  "bundleId": "org.reactjs.native.example.app",
  "version": "1.0",
  "build": "1",
  "userAgent": {
    "ua": "Mozilla\/5.0 (iPhone; CPU iPhone OS 9_3 like Mac OS X) AppleWebKit\/601.1.46 (KHTML, like Gecko) Mobile\/13E230",
    "browser": {
      "name": "WebKit",
      "version": "601.1.46",
      "major": "601"
    },
    "engine": {
      "version": "601.1.46",
      "name": "WebKit"
    },
    "os": {
      "name": "iOS",
      "version": "9.3"
    },
    "device": {
      "model": "iPhone",
      "vendor": "Apple",
      "type": "mobile"
    },
    "cpu": {}
  },
  "locale": "en-US",
  "country": "US"
}
```

## Requirements

- React Native >= 0.28.0 (RN now ships with rnpm)
