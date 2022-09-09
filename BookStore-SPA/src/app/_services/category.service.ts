import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../_models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
private baseurl : string = environment.baseUrl + 'api/';
  constructor(private http : HttpClient)
   { }

   public addCategory(category : Category){
    return this.http.post(this.baseurl + 'Categories',category);
   }

   public updateCategory(id: number,category : Category){
    return this.http.put(this.baseurl + 'categories/id',category);
   }

   public getCategories() : Observable<Category[]>{
    return this.http.get<Category[]>(this.baseurl + 'categories');
   }

   public getCategoryById(id: number): Observable<Category>{
    return this.http.get<Category>(this.baseurl + 'categories/' + id);
  }

  public deleteCategory(id: number) {
    return this.http.delete(this.baseurl + 'categories/' + id);
}

public search(name: string): Observable<Category[]> {
  return this.http.get<Category[]>(`${this.baseurl}categories/search/${name}`);
}
   
}
