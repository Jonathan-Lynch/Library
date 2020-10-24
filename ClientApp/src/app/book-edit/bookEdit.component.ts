import { Component, OnInit } from '@angular/core';
import { Ibook } from '../interfaces/ibook';
import { BookService } from '../service/book-service.service';


@Component({
  selector: 'app-book',
  templateUrl: './bookEdit.component.html',
  styleUrls: ['./bookEdit.component.css']
})
export class BookEditComponent implements OnInit {

  public bookList: Ibook[];
  updateBook: Ibook;

  constructor(private bookService: BookService) { }

  async ngOnInit() {
    this.bookList = await this.bookService.getBook();
  }

  async save(): Promise<void> {
    await this.bookService.updateBook(this.updateBook, this.updateBook.id);
  }
}
