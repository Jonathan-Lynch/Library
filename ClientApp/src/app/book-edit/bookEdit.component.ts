import { Component, OnInit } from '@angular/core';
import { Ibook } from '../interfaces/ibook';
import { BookService } from '../service/book-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './bookEdit.component.html',
  styleUrls: ['./bookEdit.component.css']
})
export class BookEditComponent implements OnInit {

  public bookList: Ibook[];
  updateBook: Ibook;
  something: string[];
  bookId: number;

  constructor(private bookService: BookService, private route: ActivatedRoute) {

   }

  async ngOnInit() {
    this.bookList = await this.bookService.getBook();
    this.something = this.bookService.statuses;
    this.bookId = this.route.snapshot.params.id;
    this.updateBook = await this.bookService.GetBooks(this.bookId);
  }

  async save(): Promise<void> {
    await this.bookService.updateBook(this.updateBook, this.bookId);
  }
}
