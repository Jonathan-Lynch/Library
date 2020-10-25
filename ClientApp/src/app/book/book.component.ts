import { Component, OnInit } from '@angular/core';
import { Ibook } from '../interfaces/ibook';
import { BookService } from '../service/book-service.service';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  public bookList: Ibook[];
  statuses;
  newStatus: Ibook[] = [];
  public newBook: Ibook = {
    id: undefined,
    title: '',
    author: '',
    genre: '',
    chapters: 0,
    yearOfPublish: null,
    description: '',
    status: '',
  };
books: Ibook[];
something: string[];

  constructor(private bookService: BookService, private router: Router) {
    this.statuses = bookService.statuses;
  }

  async ngOnInit() {
    this.bookList = await this.bookService.getBook();
    this.newStatus = this.bookList.filter(b => b.status === 'New');
  }

  public async addBook() {
    const newBook = await this.bookService.addBook(this.newBook);
    this.bookList.push(newBook);
  }

  public async deleteBook(id) {
    await this.bookService.DeleteBook(id);
    this.bookList = await this.bookService.getBook();
    this.router.navigate(['/']);

  }
}
