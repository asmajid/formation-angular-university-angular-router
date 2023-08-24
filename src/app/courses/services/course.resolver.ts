import { CoursesService } from './courses.service';
import { Course } from './../model/course';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';

@Injectable()
export class CourseResolver implements Resolve<Course> {

  constructor(private courses: CoursesService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {
    const courseUrl = route.paramMap.get("courseUrl");
    return this.courses.loadCourseByUrl(courseUrl);
    }
}
