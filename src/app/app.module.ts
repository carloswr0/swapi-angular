import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/home/home.component';

import { ListComponent } from './components/home/list/list.component';

import { FilmsComponent } from './components/lists/films/films.component';
import { PeopleComponent } from './components/lists/people/people.component';
import { PlanetsComponent } from './components/lists/planets/planets.component';
import { SpeciesComponent } from './components/lists/species/species.component';
import { StarshipsComponent } from './components/lists/starships/starships.component';
import { VehiclesComponent } from './components/lists/vehicles/vehicles.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { SearchbarComponent } from './components/home/searchbar/searchbar.component';
import { LoadingAnimationComponent } from './components/shared/loading-animation/loading-animation.component';
import { HighlightSearch } from './pipes/highlight.pipe';
import { FilmdetailsComponent } from './components/filmdetails/filmdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ListComponent,
    PeopleComponent,
    PlanetsComponent,
    SpeciesComponent,
    StarshipsComponent,
    VehiclesComponent,
    NotFoundComponent,
    SearchbarComponent,
    FilmsComponent,
    LoadingAnimationComponent,
    HighlightSearch,
    FilmdetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
