import { Component, OnInit } from '@angular/core';
import { Ibook } from '../interfaces/ibook';
import { BookService } from '../service/book-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './bookEdit.component.html',
  styleUrls: ['./bookEdit.component.css']
})
export class BookEditComponent implements OnInit {

  public bookList: Ibook[];
  updateBook: Ibook;
  something: string[];
  book: Ibook;

  constructor(private bookService: BookService) { }

  async ngOnInit() {
    this.bookList = await this.bookService.getBook();
    this.something = this.bookService.statuses;
    this.book = await this.bookService.GetBooks(this.book.id);
  }

  async save(): Promise<void> {
    await this.bookService.updateBook(this.updateBook, this.updateBook.id);
  }
}
