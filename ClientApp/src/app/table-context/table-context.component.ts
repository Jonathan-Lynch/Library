import { Component, OnInit } from '@angular/core';
import { Ibook } from '../interfaces/ibook';
import { BookService } from '../service/book-service.service';

@Component({
  selector: 'app-table-context',
  templateUrl: './table-context.component.html',
  styleUrls: ['./table-context.component.css']
})
export class TableContextComponent implements OnInit {

  public bookList: Ibook[];

  constructor(private bookService: BookService) { }

  async ngOnInit() {
    this.bookList = await this.bookService.getBook();
  }

}