import { StyleSheet } from 'react-native';

// Styles for the CountryDetailsCard component
export const detailCardStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'rgba(128,128,128,0.2)',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  left: {
    flex: 1,
  },
  right: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  detail: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  flag: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 16,
  },
});
 // Styles for the MapComponent
export const mapStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

// Styles for the CountryComponent
export const countryComponentStyles = StyleSheet.create({
  button: {
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  icon: {
    width: 24,
    height: 24,
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
});
// Styles for the ContinentComponent
export const continentComponentStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
});
// Styles for the HomeScreen
export const homeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    marginBottom: 20,
    borderRadius: 150,
  }
})

