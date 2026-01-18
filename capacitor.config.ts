
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.weconnect.app',
  appName: '微连 WeConnect',
  webDir: '.',
  server: {
    androidScheme: 'https',
    cleartext: true
  }
};

export default config;
