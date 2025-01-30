import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { CsvUploaderComponent } from './app/csv-uploader/csv-uploader.component';  // ✅ Importa el componente

// ✅ Define las rutas
const routes: Routes = [
  { path: '', component: CsvUploaderComponent }, // Ruta principal
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) // ✅ Provee las rutas
  ]
}).catch(err => console.error(err));
