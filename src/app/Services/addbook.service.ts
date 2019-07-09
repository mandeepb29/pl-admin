import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
    providedIn:'root'
})
export class AddbookService{

    constructor(private http:HttpClient){}
//To Add Biographies Book
    biographies(temp:any){

        const listoftags=temp.tags;
        const bookdata= new FormData();
    
        bookdata.append("name",temp.name) 
        bookdata.append("author",temp.author)
        bookdata.append("image",temp.image)
        bookdata.append("content",temp.content)
        bookdata.append("price",temp.price)
        bookdata.append("PDF",temp.PDF)
        bookdata.append("rating",temp.rating)

        for(let i=0;i<listoftags.length;i++)
        {
            bookdata.append('tags',listoftags[i]);
            console.log(listoftags[i]);
        }
        
        this.http.post<{message:string}>('https://sheltered-forest-787.herokuapp.com/biographies',bookdata)
                 .subscribe((response)=>{
                     console.log(response);
                     alert(response.message);
                 })
 
     }
 
     //To Add Novel Book
     novel(temp:any){
        const listoftags=temp.tags;
        const bookdata= new FormData();
    
        bookdata.append("name",temp.name) 
        bookdata.append("author",temp.author)
        bookdata.append("image",temp.image)
        bookdata.append("content",temp.content)
        bookdata.append("price",temp.price)
        bookdata.append("PDF",temp.PDF)
        bookdata.append("rating",temp.rating)

        for(let i=0;i<listoftags.length;i++)
        {
            bookdata.append('tags',listoftags[i]);
            console.log(listoftags[i]);
        }

         this.http.post<{message:string}>('https://sheltered-forest-787.herokuapp.com/novel',bookdata)
                  .subscribe((response)=>{
                     alert(response.message);
                 })
     }
 //To Add Science Book
     science(temp:any){
              const listoftags=temp.tags;
        const bookdata= new FormData();
    
        bookdata.append("name",temp.name) 
        bookdata.append("author",temp.author)
        bookdata.append("image",temp.image)
        bookdata.append("content",temp.content)
        bookdata.append("price",temp.price)
        bookdata.append("PDF",temp.PDF)
        bookdata.append("rating",temp.rating)

        for(let i=0;i<listoftags.length;i++)
        {
            bookdata.append('tags',listoftags[i]);
            console.log(listoftags[i]);
        }

             this.http.post<{message:string}>('https://sheltered-forest-787.herokuapp.com/science',bookdata)
                      .subscribe((response)=>{
                          alert(response.message);
                      })
     }
 //To Add Buisness Book
     buisness(temp:any){
          const listoftags=temp.tags;
        const bookdata= new FormData();
    
        bookdata.append("name",temp.name) 
        bookdata.append("author",temp.author)
        bookdata.append("image",temp.image)
        bookdata.append("content",temp.content)
        bookdata.append("price",temp.price)
        bookdata.append("PDF",temp.PDF)
        bookdata.append("rating",temp.rating)

        for(let i=0;i<listoftags.length;i++)
        {
            bookdata.append('tags',listoftags[i]);
            console.log(listoftags[i]);
        }
 
             this.http.post<{message:string}>('https://sheltered-forest-787.herokuapp.com/buisness',bookdata)
                 .subscribe((response)=>{
                     alert(response.message);
                 })
     }
 //To Add Technology Book
     technology(temp:any){
        const listoftags=temp.tags;
        const bookdata= new FormData();
    
        bookdata.append("name",temp.name) 
        bookdata.append("author",temp.author)
        bookdata.append("image",temp.image)
        bookdata.append("content",temp.content)
        bookdata.append("price",temp.price)
        bookdata.append("PDF",temp.PDF)
        bookdata.append("rating",temp.rating)

        for(let i=0;i<listoftags.length;i++)
        {
            bookdata.append('tags',listoftags[i]);
            console.log(listoftags[i]);
        }
 
             this.http.post<{message:string}>('https://sheltered-forest-787.herokuapp.com/technology',bookdata)
                 .subscribe((response)=>{
                     console.log(response)
                     alert(response.message);
                 })
     }
 
     //To Add Selfhelp Book
     selfhelp(temp:any){
        const listoftags=temp.tags;
        const bookdata= new FormData();
    
        bookdata.append("name",temp.name) 
        bookdata.append("author",temp.author)
        bookdata.append("image",temp.image)
        bookdata.append("content",temp.content)
        bookdata.append("price",temp.price)
        bookdata.append("PDF",temp.PDF)
        bookdata.append("rating",temp.rating)

        for(let i=0;i<listoftags.length;i++)
        {
            bookdata.append('tags',listoftags[i]);
            console.log(listoftags[i]);
        }
 
         this.http.post<{message:string}>('https://sheltered-forest-787.herokuapp.com/selfhelp',bookdata)
             .subscribe((response)=>{
                     console.log(response);
                     alert(response.message);
             })
     }

}