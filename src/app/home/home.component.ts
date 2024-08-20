import { DrastnaComponent } from './../drastna/drastna.component';
import { HomesliderComponent } from './../homeslider/homeslider.component';
import { Component } from '@angular/core';
import { TargetedComponent } from '../targeted/targeted.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomesliderComponent, TargetedComponent ,DrastnaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
