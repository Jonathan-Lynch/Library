import { Component, OnInit } from '@angular/core';
import { Ibook } from '../interfaces/ibook';
import { BookService } from '../service/book-service.service';

@Component({
  selector: 'app-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

    public bookList: Ibook[];
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

  constructor(private bookService: BookService) { }

  async ngOnInit() {
    this.bookList = await this.bookService.getBook();
    this.something = this.bookService.statuses;
    this.newBook = {title: '', author: '', genre: '', chapters: 0, yearOfPublish: null, description: '', status: '' };
  }

  public async addBook() {
    this.bookService.addBook(this.newBook);
    this.bookList.push(this.newBook);
    this.newBook = {title: '', author: '', genre: '', chapters: 0, yearOfPublish: null, description: '', status: '' };
  }
}
