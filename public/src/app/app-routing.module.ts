import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewsComponent } from "./reviews/reviews.component";
import { DetailsComponent } from './details/details.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path : 'products' , component : ProductsComponent , children : [
    { path : 'details/:id', component : DetailsComponent }
  ]},
  { path : 'reviews', component : ReviewsComponent, children : [
    { path : 'details/:id', component : DetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
