import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {

  newTask:Todo={} as Todo;
  filter:string='';
  editTask:string='';
  display:boolean = false;
  list:Todo[]=[
    {
      task:"test1",
      completed:true
    },
    {
      task:"Dishes",
      completed:false
    },
    {
      task:"Workout",
      completed:false
    },
  ]
  filteredList:Todo[]=this.list;

  completeTask(item:Todo):void{
    let index = this.list.findIndex((t:Todo)=> t == item);
    this.list[index].completed = !item.completed;
  }

  AddTask():void{
    this.newTask.completed = false;
    this.list.push(this.newTask);
    this.newTask={} as Todo;
  }

  AllComplete():boolean{
    
    if(this.list.every((t:Todo)=> t.completed == true)){
      return false;
    }
    else{
      return true;
    }
  }

  DeleteTask(item:Todo):void{
    let index = this.list.findIndex((t:Todo)=> t == item);
    this.list.splice(index,1);
  }

  // do filter task
  FilterTask():void{
    this.filteredList=this.list.filter((b)=>b.task.toLowerCase().includes(this.filter.toLowerCase()));
    this.filter='';
  }

  ToggleDisplay():void{
    this.display=!this.display
  }
  // EditTask(item:Todo):void{
  //   let index = this.list.findIndex((t:Todo)=> t == item);
  //   this.list[index].task=this.editTask;
  //   this.editTask='';
  // }
}
