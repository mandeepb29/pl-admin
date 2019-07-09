import { Injectable } from '@angular/core';
import {HttpParams, HttpClient} from '@angular/common/http';
import { ListbooksService } from './listbooks.service';
@Injectable({
    providedIn:"root"
})
export class BookoperationsService{

    constructor(private http:HttpClient, private booklist:ListbooksService){}

    deletebook(category:string,id:string){
        const book={
            category:category,
            id:id
        }

        return this.http.post<{message:string}>('https://sheltered-forest-787.herokuapp.com/delete',book)
                
    }

    updatebook(category:string,id:string,temp){
        console.log(temp)
        const listoftags=temp.tags;
        // const bookdata= new FormData();
    
        // bookdata.append("id",id)
        // bookdata.append("name",temp.name) 
        // bookdata.append("author",temp.author)
        // bookdata.append("content",temp.content)
        // bookdata.append("price",temp.price)
        // bookdata.append("PDF",temp.PDF)
        // bookdata.append("rating",temp.rating)
        const bookdata={
            id:id,
            name:temp.name,
            author:temp.author,
            content:temp.content,
            price:temp.price,
            PDF:temp.PDF,
            rating:temp.rating,
            tags:temp.tags,
            category:category
        }

        // for(let i=0;i<listoftags.length;i++){
        //     bookdata.append('tags',listoftags[i]);
        // }
        // console.log("Bookdata",bookdata.get('id'));
         return this.http.patch<{message:string}>('https://sheltered-forest-787.herokuapp.com/update',bookdata);
         
                
    }

}