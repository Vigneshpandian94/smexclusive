// import React from 'react';
// import Navigation from './src/navigation/Navigation';

// const App = () => {
//   return <Navigation />;
// };

// export default App;
import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import Navigation from './src/navigation/Navigation';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content" 
        backgroundColor="white" 
        translucent={false} 
      />
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
