import React from 'react';
import { Document,
     Page,
     Text,
     View,
     StyleSheet,
      } from '@react-pdf/renderer';

// Estilos para el PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center'
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
    borderCollapse: 'collapse',
    marginBottom: 10
  },
  tableRow: {
    flexDirection: 'row'
  },
  tableCell: {
    margin: 'auto',
    fontSize: 12,
    padding: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
    textAlign: 'center'
  }
});

const UserListPDF = ({ users }) => (

    <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Lista de Usuarios</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>ID</Text>
            <Text style={styles.tableCell}>Nombre</Text>
            <Text style={styles.tableCell}>Apellido</Text>
            <Text style={styles.tableCell}>Email:</Text>
          </View>
          {console.log(users)}
          {(Array.isArray(users))
            ?(users.map((user,index) => {
                return <View key={index} style={styles.tableRow}>
                <Text style={styles.tableCell}>{user._id}</Text>
                <Text style={styles.tableCell}>{user.name}</Text>
                <Text style={styles.tableCell}>{user.lastName}</Text>
                <Text style={styles.tableCell}>{user.email}</Text>
              </View>

              })):
              console.log("La variable users no es un array.")
              }

        </View>
      </View>
    </Page>
  </Document>
);

export default UserListPDF;
