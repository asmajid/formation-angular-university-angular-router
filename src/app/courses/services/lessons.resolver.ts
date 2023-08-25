import { RouterStateSnapshot } from '@angular/router';
import { CoursesService } from "./courses.service";
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { LessonSummary } from '../model/lesson-summary';


@Injectable()
export class LessonsResolver {

  constructor(private  courses: CoursesService) {

  }




    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LessonSummary[]> {
      const courseUrl = route.paramMap.get("courseUrl");
      return this.courses.loadAllCourseLessonsSummary(courseUrl);
    }
  }
