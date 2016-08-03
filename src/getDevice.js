import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import parseUa from 'ua-parser-js';

export default () => ({
  name: DeviceInfo.getDeviceName(),
  uniqueId: DeviceInfo.getUniqueID(),
  deviceId: DeviceInfo.getDeviceId(),
  manufacturer: DeviceInfo.getManufacturer(),
  model: DeviceInfo.getModel(),
  system: {
    name: DeviceInfo.getSystemName(),
    version: DeviceInfo.getSystemVersion(),
  },
  app: {
    bundleId: DeviceInfo.getBundleId(),
    version: DeviceInfo.getVersion(),
    build: DeviceInfo.getBuildNumber(),
  },
  userAgent: {
    ...parseUa(DeviceInfo.getUserAgent()),
  },
  locale: DeviceInfo.getDeviceLocale(),
  country: DeviceInfo.getDeviceCountry(),
  // only available on android, prevent throw
  ...Platform.select({
    ios: () => ({ instanceId: undefined }),
    android: () => ({ instanceId: DeviceInfo.getInstanceID() }),
  })(),
});
