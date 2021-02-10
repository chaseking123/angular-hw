import { CoursesService } from './courses.service';
import { Component } from "@angular/core";

@Component({
    selector: 'courses', // <courses>
    template: `
        <h2>{{ getCourseCount() + getTitle() }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>    
    `
})
export class CoursesComponent {
    title = " courses";
    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    getTitle() {
        return this.title;
    }

    getCourseCount() {
        return this.courses.length;
    }
}