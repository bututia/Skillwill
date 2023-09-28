import React, { createElement, useState } from "react";
import { Button, SafeAreaView, TextInput, StyleSheet, Text } from "react-native";
import contacts, { compareNames } from "./contacts";
import ContactsList from "./ContactsList";


export default function App() {
  const [showContacts, setShowContacts] = useState(false);
  const [sortedContacts, setSortedContacts] = useState(contacts);

  const toggleContacts = () => {
    setShowContacts((prev) => !prev);
  };

  const sort = () => {
    setSortedContacts((prev) => [...prev.sort(compareNames)]);
  };

  const handleSearch = (input) => {
    !input ? setSortedContacts(contacts) : setSortedContacts((prev) => prev.filter(child => child.name.toLowerCase().includes(input.toLocaleLowerCase())))
  }

  return (
    <SafeAreaView>
      <Button title="toggle contacts" onPress={toggleContacts} />
      <Button title="sort" onPress={sort} />
      <TextInput
        placeholder="search..."
        style={styles.input}
        onChangeText={(input) => handleSearch(input)}
        autoCorrect={false}
      />
      {!sortedContacts.length ? <Text style={{margin: 10, color: 'gray'}}>No Results</Text> : null}
      {showContacts && <ContactsList contacts={sortedContacts} />}
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderColor: '#c9c9c9',
    borderRadius: 5,
  },
});