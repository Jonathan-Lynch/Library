import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ibook } from '../interfaces/ibook';
import { BookComponent } from '../book/book.component';
import { ReadBookComponent } from '../read-book/read-book.component';
import { ReadingBookComponent } from '../reading-book/reading-book.component';

@Injectable({
    providedIn: 'root'
  })
  export class BookService {

    books: Ibook[];
    statuses = ['Want to Read', 'Reading', 'Read'];

    constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

    public async getBook(): Promise<Ibook[]> {
      return this.httpClient.get<Ibook[]>(`${this.baseUrl}book`).toPromise();
    }

    public async addBook(book: Ibook): Promise<Ibook> {
      return this.httpClient.post<Ibook>(`${this.baseUrl}book`, book).toPromise();
    }
}
