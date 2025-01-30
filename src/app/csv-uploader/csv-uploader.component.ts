import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-csv-uploader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './csv-uploader.component.html',
  styleUrls: ['./csv-uploader.component.scss']
})
export class CsvUploaderComponent {
  csvData: any[] = []; // ✅ Variable para almacenar el CSV
  file: File | null = null; // ✅ Variable para almacenar el archivo

  // ✅ Método para seleccionar el archivo
  onFileSelected(event: any) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      this.file = selectedFile;
      this.readFile();
    }
  }

  // ✅ Método para leer el CSV
  readFile() {
    if (!this.file) return;
    
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const text = e.target.result;
      this.csvData = this.parseCSV(text);
    };
    reader.readAsText(this.file);
  }

  // ✅ Método para convertir el CSV a JSON
  parseCSV(csvText: string): any[] {
    const lines = csvText.split('\n');
    const headers = lines[0].split(',').map(header => header.trim());
    const rows = lines.slice(1).map(row => row.split(',').map(value => value.trim()));

    return rows.map(row => {
      let obj: any = {};
      headers.forEach((header, index) => {
        obj[header] = row[index] || '';
      });
      return obj;
    });
  }

  // ✅ Método para subir el archivo (Simulado)
  uploadFile() {
    console.log('Archivo subido:', this.csvData);
    alert('Archivo procesado correctamente');
  }
}
