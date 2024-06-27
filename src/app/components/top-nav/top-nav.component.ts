import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchBarService } from 'src/app/services/searchBar.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit{
  public isSearchFieldVisible: boolean = false;
  constructor(private router: Router, private sb: SearchBarService){}
  ngOnInit(): void {
    this.sb.isSearchVisible.subscribe(status => {
      this.isSearchFieldVisible = status;
    })
  }
  onNavigateToLogin(){
    this.router.navigate(['/','login']);
  }
}
