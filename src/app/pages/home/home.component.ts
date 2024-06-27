import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchBarService } from 'src/app/services/searchBar.service';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public songCards: any[] = [];
public albumCards: any[] = [];
  constructor(private sb: SearchBarService, private songService: SongService) {}

  ngOnInit(): void {
    this.songService.getSongs().subscribe(data => {
      if (data && data.albums && data.albums.items) {
        this.songCards = data.albums.items.map((album: any) => ({
          song_id: album.id,
          thumbnail: album.images[0]?.url || '',
          title: album.name,
          description: album.artists.map((artist: any) => artist.name).join(', '),
          song_link: 'assets/Chamba1.mp3' 
        }));
      }
    });
    this.songService.getAlbums().subscribe(data => {
      if (data && data.albums && data.albums.items) {
        this.albumCards = data.albums.items.map((album: any) => ({
          album_id: album.id,
          thumbnail: album.images[0]?.url || '',
          title: album.name,
          description: album.artists.map((artist: any) => artist.name).join(', '),
          album_link: album.external_urls.spotify
        }));
      }
    });
  }

  @ViewChild('scrollContainer1', { static: false }) scrollContainer1!: ElementRef;
  @ViewChild('scrollContainer2', { static: false }) scrollContainer2!: ElementRef;

  ngAfterViewInit() {
    this.addHorizontalScroll(this.scrollContainer1.nativeElement);
    this.addHorizontalScroll(this.scrollContainer2.nativeElement);
  }

  addHorizontalScroll(container: HTMLElement) {
    container.addEventListener('wheel', (event: WheelEvent) => {
      if (event.deltaY !== 0) {
        event.preventDefault();
        container.scrollLeft += event.deltaY;
      }
    });
  }

  onNavigate(pageName: string){
    if(pageName === 'search'){
      this.sb.isSearchVisible.next(true);
    }else{
      this.sb.isSearchVisible.next(false);
    }
  }
}
