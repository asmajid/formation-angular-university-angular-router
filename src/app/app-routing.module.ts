import {Component, NgModule} from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, UrlSerializer } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChatComponent } from './chat/chat.component';
import { error } from 'console';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/courses",
    pathMatch: 'full'
  },
  {
    path: "courses",
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: 'helpdesk-chat',
    component: ChatComponent,
    outlet: 'chat'
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      paramsInheritanceStrategy: 'always',
      relativeLinkResolution: 'corrected',
      malformedUriErrorHandler:
        (error: URIError, urlSerializer: UrlSerializer, url: string) =>
        urlSerializer.parse("/page-not-found")
    })

  ],
  exports: [RouterModule],
  providers: [

  ]
})
export class AppRoutingModule {


}
