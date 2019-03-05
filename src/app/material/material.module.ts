import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule
  ],
  exports: [
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule
  ]
})
export class MaterialModule {}
