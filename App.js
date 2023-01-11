// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import AppLovinMAX from "react-native-applovin-max";

// export default function App() {

//     AppLovinMAX.initialize("xxx", (configuration) => {
//         // SDK is initialized, start loading ads
//     });
//     const BANNER_AD_UNIT_ID = Platform.select({
//       android: 'xxx',
//       // ios: 'YOUR_IOS_BANNER_AD_UNIT_ID',
//   });
  

//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app, Captain Eboy!</Text>
//       <AppLovinMAX.AdView adUnitId={BANNER_AD_UNIT_ID} adFormat={AppLovinMAX.AdFormat.BANNER} style={styles.banner} />

//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   banner: {
//     // Set background color for banners to be fully functional
//     backgroundColor: '#000000',
//     position: 'absolute',
//     width: '100%',
//     height: AppLovinMAX.isTablet() ? 90 : 50,
//     bottom:  Platform.select({
//       ios: 36, // For bottom safe area
//       android: 0,
//     })
//   }
// });


import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLovinMAX from "react-native-applovin-max";

export default function App() {

  const [isInitialized, setIsInitialized] = React.useState(false);

  React.useEffect(() => {
    AppLovinMAX.setVerboseLogging(true);

    AppLovinMAX.initialize("xxx", (configuration) => {
      // SDK is initialized, start loading ads
      setIsInitialized(true);
    });
  }, []);


  const BANNER_AD_UNIT_ID = Platform.select({
    android: 'xxx',
    // ios: 'YOUR_IOS_BANNER_AD_UNIT_ID',
  });

  return (
    <View style={styles.container}>

      {
        isInitialized &&
          <AppLovinMAX.AdView adUnitId={BANNER_AD_UNIT_ID}
                              adFormat={AppLovinMAX.AdFormat.BANNER}
                              style={styles.banner} />
      }

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    // Set background color for banners to be fully functional
    backgroundColor: '#000000',
    position: 'absolute',
    width: '100%',
    height: AppLovinMAX.isTablet() ? 90 : 50,
    bottom: Platform.select({
      ios: 36, // For bottom safe area
      android: 0,
    })
  }
});
