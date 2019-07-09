import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Books} from './books.model';
import { Subject } from 'rxjs';
@Injectable({
    providedIn:"root"
})
export class ListbooksService {

    private categorybooks:Books[]=[];
    private updateBook= new Subject<{books:Books[]}>();


    constructor(private http:HttpClient){}
    
    biographies(){
        this.http.get<{books:Books[]}>('https://sheltered-forest-787.herokuapp.com/biographies')
                .subscribe((response)=>{
                    console.log(response);
                    this.categorybooks=response.books

                    this.updateBook.next({
                        books:this.categorybooks
                    })
                })
    }

    buisness(){
        this.http.get<{books:Books[]}>('https://sheltered-forest-787.herokuapp.com/buisness')
                .subscribe((response)=>{
                    console.log(response);
                    this.categorybooks=response.books

                    this.updateBook.next({
                        books:this.categorybooks
                    })
                })
    }

    technology(){
        this.http.get<{books:Books[]}>('https://sheltered-forest-787.herokuapp.com/technology')
                .subscribe((response)=>{
                    console.log(response);
                    this.categorybooks=response.books

                    this.updateBook.next({
                        books:this.categorybooks
                    })
                })
    }

    selfhelp(){
        this.http.get<{books:Books[]}>('https://sheltered-forest-787.herokuapp.com/selfhelp')
                .subscribe((response)=>{
                    console.log(response);
                    this.categorybooks=response.books

                    this.updateBook.next({
                        books:this.categorybooks
                    })
                })
    }

    science(){
        this.http.get<{books:Books[]}>('https://sheltered-forest-787.herokuapp.com/science')
                .subscribe((response)=>{
                    console.log(response);
                    this.categorybooks=response.books

                    this.updateBook.next({
                        books:this.categorybooks
                    })
                })
    }

    novel(){
        this.http.get<{books:Books[]}>('https://sheltered-forest-787.herokuapp.com/novel')
                .subscribe((response)=>{
                    console.log(response);
                    this.categorybooks=response.books

                    this.updateBook.next({
                        books:this.categorybooks
                    })
                })
    }
    updatebooks(){
        return this.updateBook.asObservable();
    }

    //This function is for searching for a particular Book
    
    biographies_search(search:string){
        console.log(search);
        const input: string = (search || '').toLowerCase().trim();
    
        this.updateBook.next({
            books:this.categorybooks.filter(i => i.bookName.toLowerCase().indexOf(input) != -1)
        })  
        console.log(this.categorybooks);
    }

    novel_search(search:string){
        console.log(search);
        const input: string = (search || '').toLowerCase().trim();
    
        this.updateBook.next({
            books:this.categorybooks.filter(i => i.bookName.toLowerCase().indexOf(input) != -1)
        })  
        console.log(this.categorybooks);
    }

    buisness_search(search:string){
        console.log(search);
        const input: string = (search || '').toLowerCase().trim();
    
        this.updateBook.next({
            books:this.categorybooks.filter(i => i.bookName.toLowerCase().indexOf(input) != -1)
        })  
        console.log(this.categorybooks);
    }

    science_search(search:string){
        console.log(search);
        const input: string = (search || '').toLowerCase().trim();
    
        this.updateBook.next({
            books:this.categorybooks.filter(i => i.bookName.toLowerCase().indexOf(input) != -1)
        })  
        console.log(this.categorybooks);
    }

    technology_search(search:string){
        console.log(search);
        const input: string = (search || '').toLowerCase().trim();
    
        this.updateBook.next({
            books:this.categorybooks.filter(i => i.bookName.toLowerCase().indexOf(input) != -1)
        })  
        console.log(this.categorybooks);
    }

    selfhelp_search(search:string){
        console.log(search);
        const input: string = (search || '').toLowerCase().trim();
    
        this.updateBook.next({
            books:this.categorybooks.filter(i => i.bookName.toLowerCase().indexOf(input) != -1)
        })  
        console.log(this.categorybooks);
    }


}