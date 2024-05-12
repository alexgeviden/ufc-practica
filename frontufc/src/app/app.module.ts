import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { EventosComponent } from './eventos/eventos.component';
import { CombatesComponent } from './combates/combates.component';
import { LuchadoresComponent } from './luchadores/luchadores.component';
import { SugerenciasComponent } from './sugerencias/sugerencias.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventosComponent,
    CombatesComponent,
    LuchadoresComponent,
    SugerenciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleteModule
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
