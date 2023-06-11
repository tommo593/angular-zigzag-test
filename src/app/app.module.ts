import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BreedListComponent } from './breed-list/breed-list.component';
import { BreedDetailComponent } from './breed-detail/breed-detail.component';
import { BreedService } from './breed.service';

@NgModule({
  declarations: [AppComponent, BreedListComponent, BreedDetailComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'breeds', component: BreedListComponent },
      { path: 'breeds/:id', component: BreedDetailComponent },
      { path: '', redirectTo: '/breeds', pathMatch: 'full' },
      { path: '**', redirectTo: '/breeds' }
    ])
  ],
  providers: [BreedService],
  bootstrap: [AppComponent]
})
export class AppModule {}
