import { Component, OnInit } from '@angular/core';
import { Ibook } from '../interfaces/ibook';
import { BookService } from '../service/book-service.service';

@Component({
  selector: 'app-read-book',
  templateUrl: './read-book.component.html',
  styleUrls: ['./read-book.component.css']
})
export class ReadBookComponent implements OnInit {

  public bookList: Ibook[];

  constructor(private bookService: BookService) { }

  async ngOnInit() {
    this.bookList = await this.bookService.getBook();
  }

}
