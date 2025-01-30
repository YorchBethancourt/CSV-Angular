import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // ✅ Importa RouterModule
import { CsvUploaderComponent } from './csv-uploader/csv-uploader.component'; // ✅ Importa el componente CSV

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CsvUploaderComponent],  // ✅ Agrega RouterModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mi Aplicación Angular';
}
