import { Component, OnInit } from '@angular/core';
import { BreedService } from '../breed.service';

@Component({
  selector: 'app-breed-list',
  templateUrl: './breed-list.component.html',
  styleUrls: ['./breed-list.component.css']
})
export class BreedListComponent implements OnInit {
  breeds: any[] = [];

  constructor(private breedService: BreedService) {}

  ngOnInit() {
    this.breedService.getBreeds().subscribe(data => {
      this.breeds = data;
    });
  }
}