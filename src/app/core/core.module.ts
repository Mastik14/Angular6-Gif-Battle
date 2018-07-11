import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from 'app/core/components/footer/footer.component';
import { HeaderComponent } from 'app/core/components/header/header.component';
import { RouterModule } from '@angular/router';
import { GifService } from 'app/core/services/gif.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    GifService
  ],
  declarations: [FooterComponent, HeaderComponent],
  exports: [FooterComponent, HeaderComponent]
})
export class CoreModule { }
