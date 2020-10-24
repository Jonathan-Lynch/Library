import { Component, OnInit } from '@angular/core';
import { Ibook } from '../interfaces/ibook';
import { BookService } from '../service/book-service.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  public bookList: Ibook[];
  statuses;
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

  constructor(private bookService: BookService) {
    this.statuses = bookService.statuses;
  }

  async ngOnInit() {
    this.bookList = await this.bookService.getBook();
  }

  public async addBook() {
    const newBook = await this.bookService.addBook(this.newBook);
    this.bookList.push(newBook);
  }
}
