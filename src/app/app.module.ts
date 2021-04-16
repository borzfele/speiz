import { ShoppingListService } from './services/shopping-list-service/shopping-list.service';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { ShoppingListPageComponent } from './pages/shopping-list-page/shopping-list-page.component';
import { AddProductFormComponent } from './components/add-product-form/add-product-form.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { ShoppingListState } from './store/shopping-list.state';
import { HeaderComponent } from './components/header/header.component';
import { FoodContainerComponent } from './components/icons/food-container/food-container.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import {MatListModule} from '@angular/material/list';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListPageComponent,
    AddProductFormComponent,
    HeaderComponent,
    FoodContainerComponent,
    NavigatorComponent,
    AppNavComponent
  ],
  imports: [
    NgxsModule.forRoot([ShoppingListState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    MatListModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
