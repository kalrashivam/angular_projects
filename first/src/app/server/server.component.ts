import {Component,OnInit} from '@angular/core';

@Component({
	selector:'app-server',
	templateUrl:'./server.component.html'
})

export class ServerComponent implements OnInit{
 serverstatus:String = 'Offline';
 serverId:number = 2323;
 allowserver = 'false';

 constructor(){
 	setTimeout(() => {
     this.allowserver ='true';
 	}, 1000)
 }

 getServerStatus(){
 	return this.serverstatus;
 }

 ngOnInit() {

 }
}