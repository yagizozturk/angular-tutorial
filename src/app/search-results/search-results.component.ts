import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  results = [];
  images = [];
  news = [];

  ngOnInit() {
    this.getWebPageResults();
  }

  getWebPageResults(): void {
    let keyword: string = '';
    keyword = this.route.snapshot.paramMap.get('keyword');
    console.log('search result page --> ' + keyword);
    this.getJSON().subscribe(data => {      
      this.results = data.webPageResults;
      this.images = data.imageResults;
      this.news = data.newsResults;
    });
  }

  getJSON(): Observable<any>{
    return this.http.get('./assets/webSearchResults.json');
  }

  next() : void {
    alert("test");
    var el = document.getElementById("next");
    //el.next();
  }
}