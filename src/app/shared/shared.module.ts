import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorsComponent } from './pages/errors/errors.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    ErrorsComponent,
    NavBarComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent, NavBarComponent],
})
export class SharedModule {}
