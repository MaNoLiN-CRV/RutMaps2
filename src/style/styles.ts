import { StyleSheet } from "react-native";

export const detailCardStyles = (theme: any) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: theme.cardBackground,
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
    color: theme.text,
    marginBottom: 8,
  },
  detail: {
    fontSize: 16,
    color: theme.detailText,
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
export const mapStyle = (theme: any) => StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

// Styles for the CountryComponent
export const countryComponentStyles = (theme: any) => StyleSheet.create({
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
    color: theme.text,
  },
});
// Styles for the ContinentComponent
export const continentComponentStyles = (theme: any) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    backgroundColor: theme.background,
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
    backgroundColor: theme.cardBackground,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
});
// Styles for the HomeScreen
export const homeScreenStyles = (theme: any) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.cardBackground,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
    borderRadius: 150,
  }, 
  text: {
    fontSize: 24,
    marginBottom: 20,
    color: theme.text,
  },

});

