import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import UserListPDF from './UserListPDF';

const ListaPDF = ({ users=[] }) => (

  <>
    {/* Botón para descargar el PDF */}
    {console.log(`lista user ${users}`)}
    <PDFDownloadLink document={<UserListPDF users={users} />} fileName="lista_usuarios.pdf">
      {({ loading }) => (loading ? 'Generando PDF...' : 'Descargar PDF')}
    </PDFDownloadLink>
  </>
);

export default ListaPDF;
