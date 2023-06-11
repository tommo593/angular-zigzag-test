import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreedService } from '../breed.service';

@Component({
  selector: 'app-breed-detail',
  templateUrl: './breed-detail.component.html',
  styleUrls: ['./breed-detail.component.css']
})
export class BreedDetailComponent implements OnInit {
  breed: any;

  constructor(
    private route: ActivatedRoute,
    private breedService: BreedService
  ) {}

  ngOnInit() {
    const breedId = this.route.snapshot.paramMap.get('id');
    if (breedId) {
      this.breedService.getBreedById(Number(breedId)).subscribe(data => {
        this.breed = data;
      });
    }
  }
}