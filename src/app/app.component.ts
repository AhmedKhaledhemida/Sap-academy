import { HcmComponent } from './hcm/hcm.component';
import { PpComponent } from './pp/pp.component';
import { BasisComponent } from './basis/basis.component';
import { MmComponent } from './mm/mm.component';
import { SdComponent } from './sd/sd.component';
import { PmComponent } from './pm/pm.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomesliderComponent } from './homeslider/homeslider.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AbapComponent } from './abap/abap.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,FooterComponent,HomeComponent,HomesliderComponent,ContactUsComponent,PmComponent,SdComponent
  ,MmComponent,BasisComponent,PpComponent,AbapComponent,HcmComponent,RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sapacademy2';
}
