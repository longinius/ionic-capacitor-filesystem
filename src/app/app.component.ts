import { Directory, Filesystem } from '@capacitor/filesystem';

import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AppComponent {
  protected async download(): Promise<void> {
    await Filesystem.downloadFile({
      url: 'https://images.unsplash.com/photo-1510158105534-9b01f2462ce1',
      path: '/path/to/file/image.jpg',
      directory: Directory.Cache,
      recursive: true,
    });
  }
}
