import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string; 
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;
  posts:Post[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) {
    console.log('contstructor ran..');
   }

  ngOnInit() {
    console.log('ngOnInit ran...');

    this.name = 'Xavier Walker';
    this.age = 26;
    this.email = 'xwalk91@gmail.com';
    this.address = {
      street:'50 main street',
      city: 'Atlanta',
      state:'GA'
    }
    this.hobbies = ['Guild Wars 2', 'Reddit', 'Writing Code'];
    this.hello="hello";

    this.dataService.getPosts().subscribe((posts) => {
      // 
      this.posts = posts;
    });


  }
    
  onClick(){
    this.name='LOWME$A';
    this.hobbies.push('New hobby');
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    for(let i = 0; i < this.hobbies.length;i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}

interface Address{
    street: string
    city: string;
    state: string;
  }

  interface Post{
    id: number,
    title:string,
    body:string,
    userId: number
  }
