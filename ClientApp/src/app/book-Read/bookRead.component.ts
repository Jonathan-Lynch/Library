import { Component, OnInit } from '@angular/core';
import { Ibook } from '../interfaces/ibook';
import { BookService } from '../service/book-service.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-book',
  templateUrl: './bookRead.component.html',
  styleUrls: ['./bookRead.component.css']
})
export class BookReadComponent implements OnInit {

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

  constructor(private bookService: BookService) {
    this.statuses = bookService.statuses;
  }

  async ngOnInit() {
    this.bookList = await this.bookService.getBook();
    this.newStatus = this.bookList.filter(b => b.status === 'Read');
  }

  public async addBook() {
    const newBook = await this.bookService.addBook(this.newBook);
    this.bookList.push(newBook);
  }
}
