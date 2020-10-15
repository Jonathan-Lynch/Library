import { Component, OnInit } from '@angular/core';
import { Ibook } from '../interfaces/ibook';
import { BookService } from '../service/book-service.service';

@Component({
  selector: 'app-reading-book',
  templateUrl: './reading-book.component.html',
  styleUrls: ['./reading-book.component.css']
})
export class ReadingBookComponent implements OnInit {

  public bookList: Ibook[];

  constructor(private bookService: BookService) { }

  async ngOnInit() {
    this.bookList = await this.bookService.getBook();
  }

}
