import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title:string = 'bases';

  counter:number = 0

  funcionalidad(value: number): void {
    if(this.counter + value >= 0 ){
      this.counter += value
    }
  }

  reset(){
    this.counter = 0
    console.log(this.counter);
    
  }
}
