import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.css']
})
export class VillainsComponent implements OnInit{
  showVillain = 0;
  showInput = 0;
  submitted = 0;
  tempName = '';
  tempId = 0;
  submitmsg = '';
  names: string[] = ["Thanos", "Loki", "Ultron", "Venom"];

  onShowVillain(){
    this.showVillain++;
  }

  onInput(){
    this.showInput++;
  }

  onMouseEnter(villainName: HTMLElement){
    villainName.style.color="red";
  }

  onMouseOut(villainName: HTMLElement){
    villainName.style.color="black";
  }

  ngOnInit(): void {
  }

  getName(val:string){
    this.tempName = val;
  }

  getId(val: number){
    this.tempId = val;
  }

  submit(){
    this.submitted++;
    this.submitmsg = 'You added villain ' + this.tempName + ' with request id ' + this.tempId;
    this.names.push(this.tempName);
  }

}
