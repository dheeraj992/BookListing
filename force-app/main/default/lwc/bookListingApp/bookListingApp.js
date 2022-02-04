import { LightningElement } from 'lwc';
const book_url='https://www.googleapis.com/books/v1/volumes?q=';
export default class BookListingApp extends LightningElement {

    books;
    searchKey='Man'
    timer;
    connectedCallback(){
        this.fetchBook()
    }

    fetchBook(){
     fetch(book_url+this.searchKey).
     then(response=>response.json()).
     then(data=>{    
        console.log(data)
        this.books=data;
    }).
     catch(error=>console.error(error))   
    }

    fetchBooksHandler(event){
        this.searchKey=event.target.value;
        window.clearTimeout(this.timer);
        this.timer=setTimeout(()=>{
          this.fetchBook()  
        },1000)
    }
}