import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    flex: 1,
    padding: 8,
    borderRadius: 5,
  },
  listContainer: {
    flex: 1,
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
  },
});