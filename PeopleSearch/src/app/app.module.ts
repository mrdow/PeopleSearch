import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonSearchComponent } from './person-search/person-search.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { PersonListComponent } from './person-list/person-list.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { InterestListComponent } from './interest-list/interest-list.component';
import { InterestsFormComponent } from './interests-form/interests-form.component';
import { PersonCardComponent } from './person-card/person-card.component';

library.add(faSpinner);

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PersonSearchComponent,
    PersonFormComponent,
    PersonListComponent,
    AddressFormComponent,
    InterestListComponent,
    InterestsFormComponent,
    PersonCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
