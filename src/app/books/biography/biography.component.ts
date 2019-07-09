import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule }  from '@angular/forms';

import {Books} from '../../Services/books.model';
import {ListbooksService} from '../../Services/listbooks.service'
import { Subscription } from 'rxjs';
import { BookoperationsService } from 'src/app/Services/bookoperations.service';
@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.css']
})
export class BiographyComponent implements OnInit {

  form:FormGroup;
  imagePreview;
  submited:boolean=false;
  search="";

  checkedtags=[];
  tags=[
    {
      id:0,
      value:"None"
    },
    {
      id:1,
      value:"Trending"
    },
    {
      id:2,
      value:"Most Popular"
    },
    {
      id:3,
      value:"New"
    },
    {
      id:4,
      value:"BestSeller"
    },
    {
      id:5,
      value:"Editor's Choice"
    }
  ];
  constructor(private booklist:ListbooksService, private delete_edit:BookoperationsService) { }
  public books:Books[]=[]
  bookSubscription:Subscription
  public count=1;
  public bookid:string;

  public editablebook
  

  ngOnInit() {
     this.count=1;
    this.booklist.biographies();
    this.bookSubscription=this.booklist.updatebooks()
    .subscribe((response)=>{
      this.books=response.books;
      this.editablebook=response.books[0];
     // console.log("TS",response.books)
    })

    //Update View/Edit Form Modal View FormGroup
    this.form = new FormGroup({
      name:new FormControl(null, {validators:[Validators.required]} ),
      author:new FormControl(null, {validators:[Validators.required]}),
      image:new FormControl(null,{validators:[Validators.required]}),
      content:new FormControl(null,{validators:[Validators.required]}),
      tags:new FormControl(null),
      price:new FormControl(null,{validators:[Validators.required]}),
      rating: new FormControl(null,{validators:[Validators.required]}),
      PDF: new FormControl(null)
    });
    
  }
  increment(){
    if(this.books.length<this.count)
    this.count=1;
    return this.count++;

  }

  getid(id:string){
    console.log(id);
    this.bookid=id;
  }
  
  deletebook(){
    this.delete_edit.deletebook("biographies",this.bookid)
    .subscribe(()=>{
      this.booklist.biographies();
    })
  }

  viewbook(id:string){
    this.bookid=id;
    for(let i=0; i<this.books.length; i++){
       //console.log(this.books[i]._id)
      if(id==this.books[i]._id){
        this.editablebook=this.books[i];
        console.log(this.editablebook);
          this.form.patchValue({name:this.editablebook.bookName,
                                author:this.editablebook.bookAuthor,
                                image:this.editablebook.image,
                                content:this.editablebook.content,
                                price:this.editablebook.price,
                                rating:this.editablebook.rating,
                                tags:this.editablebook.tag,
                                PDF:this.editablebook.PDF})
                                this.imagePreview=this.editablebook.image
      }
    }
  }

  checked(value){
    const taglist= this.editablebook.tag;
    return taglist.includes(value);
  }

  tagSelect(options,event){
   
    if(event.target.checked){
      this.form.value.tags.push(options.value)
    }else{
      for(let i=0; i<this.form.value.tags.length; i++){
        if(this.form.value.tags[i]===options.value)
        this.form.value.tags.splice(i,1);
      }
    }
    console.log(this.form.value.tags)
}

  updatebook(){
    this.delete_edit.updatebook("biographies",this.bookid,this.form.value)
    .subscribe((response)=>{
      alert(response.message);
        console.log(response);
        this.booklist.biographies();
        // this.booklist.updatebooks()
        // .subscribe(response=>{
        //   this.books=response.books;
        // })
    });
    
  }

  // searchbook(){
  //   this.booklist.biographies_search(this.search);
  //   this.bookSubscription=this.booklist.updatebooks()
  //   .subscribe((response)=>{
  //     console.log("Search res",response);
  //     // this.booklist.updatebooks()
  //     // .subscribe(response=>{
  //     //   this.books=response.books;
  //     // })
  // });
  // }

  onKey(event: any) { 
    console.log(this.search);
    console.log(this.search.toString().trim())
  //   this.booklist.biographies_search(this.search);
  //   this.bookSubscription=this.booklist.updatebooks()
  //   .subscribe((response)=>{
  //     console.log("Search res",response);
  //     // this.booklist.updatebooks()
  //     // .subscribe(response=>{
  //     //   this.books=response.books;
  //     // })
  // });
  this.booklist.biographies_search(this.search);
  }



}
