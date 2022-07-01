import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [MatToolbarModule, MatButtonModule, MatInputModule, MatIconModule],
  exports: [MatToolbarModule, MatButtonModule, MatInputModule, MatIconModule],
})
export class MaterialModule {}
