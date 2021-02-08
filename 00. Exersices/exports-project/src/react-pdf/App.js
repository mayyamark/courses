import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  table: {
    width: '100%',
    border: '1px solid #dddddd',
  },
  tableRow: {
    textAlign: 'left',
    padding: '8px',
  },
  tableCol: {
    textAlign: 'left',
    padding: '8px'
  },
  tableCell: {
    color: 'black'
  }
});

// // Create Document Component
// const MyDocument = () => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <View style={styles.section}>
//         <Text>Section #1</Text>
//       </View>
//       <View style={styles.section}>
//         <Text>Section #2</Text>
//       </View>
//     </Page>
//   </Document>
// );

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
    <View style={styles.table}> 
  {/* TableHeader */} 
  <View style={styles.tableRow}> 
    <View style={styles.tableCol}> 
      <Text style={styles.tableCell}>
        Product
      </Text> 
    </View> 
    <View style={styles.tableCol}> 
      <Text style={styles.tableCell}>
        Type
      </Text> 
    </View> 
    <View style={styles.tableCol}> 
      <Text style={styles.tableCell}>
        Period
      </Text> 
    </View> 
    <View style={styles.tableCol}> 
      <Text style={styles.tableCell}>
        Price
      </Text> 
    </View> 
    </View> 
    {/* TableContent */} 
    <View style={styles.tableRow}> 
      <View style={styles.tableCol}> 
        <Text style={styles.tableCell}>
          React-PDF
        </Text> 
      </View> 
      <View style={styles.tableCol}> 
        <Text style={styles.tableCell}>
          3 User 
        </Text> 
      </View> 
      <View style={styles.tableCol}> 
        <Text style={styles.tableCell}>
          2019-02-20 - 2020-02-19
        </Text>
      </View> 
      <View style={styles.tableCol}> 
        <Text style={styles.tableCell}>
          5€
        </Text> 
      </View> 
    </View> 
  </View>

    </Page>
  </Document>
);

const App = () => (
  <div>
    <PDFDownloadLink document={<MyDocument />} fileName="react-pdf.pdf">
    {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'react-pdf: Export a PDF')}
    </PDFDownloadLink>
  </div>
);

export default App;


