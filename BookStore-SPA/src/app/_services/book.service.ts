import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../_models/Book';
import { map, filter, switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseurl : string = environment.baseUrl + 'api/';

  constructor(private http : HttpClient) { }

  public addBook(book : Book){
    return this.http.post(this.baseurl + 'books', book);
  }

  public updateBook(id: number, book: Book) {
    return this.http.put(this.baseurl + 'books/' + id, book);
  }

  public getBooks() : Observable<Book[]>{
    return this.http.get<Book[]>(this.baseurl + 'books');
  }

  public deleteBook(id: number){
    this.http.delete(this.baseurl + 'books/' + id).pipe(map((response: any) => response.json()));
  }

  public getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(this.baseurl + 'books/' + id);
}

public searchBooksWithCategory(searchedValue: string): Observable<Book[]> {
  return this.http.get<Book[]>(`${this.baseurl}books/search-book-with-category/${searchedValue}`);
}
}
