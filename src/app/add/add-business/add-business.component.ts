import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AddbookService} from '../../Services/addbook.service';
@Component({
  selector: 'app-add-business',
  templateUrl: './add-business.component.html',
  styleUrls: ['./add-business.component.css']
})
export class AddBusinessComponent implements OnInit {
  form:FormGroup;
  imagePreview;
  submited:boolean=false;
  constructor(private book:AddbookService) { }

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


  ngOnInit() {
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

  tagSelect(option, event) {
    if(event.target.checked) {
      this.checkedtags.push(option.value);
    } else {
    for(var i=0 ; i < this.tags.length; i++) {
      if(this.checkedtags[i] == option.value) {
        this.checkedtags.splice(i,1);
     }
   }
 }
 //console.log(this.checkedtags);
}
  onImageSelect(event:Event){

    const file=(event.target as HTMLInputElement).files[0];
    this.form.patchValue({image:file});
    this.form.get('image').updateValueAndValidity();

    const filepath=new FileReader();

    filepath.onload=()=>{
      this.imagePreview=filepath.result;
    };
    filepath.readAsDataURL(file);

  }

  addNewBook(){
    this.submited=true;
    if(this.form.invalid){
      console.log(this.form.invalid.valueOf())
      return;
    }
    if(this.form.value.rating>0 && this.form.value.rating<=100)
    {
      if(this.checkedtags.length>0) this.form.value.tags=this.checkedtags;
      else this.form.value.tags=["None"]
      if(this.form.value.PDF==='')this.form.value.PDF=null;
        console.log(this.form.value);
        this.book.buisness(this.form.value);
    }
    else{
      return alert("Rating should be between 0 to 100");
    }
  }

}
