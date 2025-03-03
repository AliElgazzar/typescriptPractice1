// exercise 3

type Student = { student_id: string, firstname: string; lastname: string; grade: number; };
type Course = Record<string, { title: string, students: Student[]; }>; // example: { 'CS472': { title: 'Web Application Programming', students: [] }}

export class Exercise3 {
    #courses: Course[] = [];

    add_course(course_code: string, course_title: string): boolean {
        // add if course code does not exist
        // return true if the course is added successfully, false otherwise
        return true;
    }

    update_course_title(course_code: string, new_course_title: string): boolean {
        // return true if the course's title is updated successfully, false otherwise
        return true;
    }

    delete_course(course_code: string): boolean {
        // return true if the course is delete successfully, false otherwise
        return true;
    }

    get_course_title_by_code(course_code: string): string {
        // return the course title
        return '';
    }

    enroll_student_in_course(course_code: string, student: Partial<Student>): boolean {
        // enroll if student hasn't been previously enrolled, note that you will receive a student object without grade, set the grade to 0
        // return true if the student is enrolled successfully, false otherwise
        return true;
    }

    remove_student_from_course(course_code: string, student_id: string): boolean {
        // return true if the student is removed from course successfully, false otherwise
        return true;
    }

    update_student_grade(course_code: string, student_id: string, grade: number): boolean {
        // update the student grade
        // return true if the student's grade is updated successfully, false otherwise
        return true;
    }

    get_student_grade(course_code: string, student_id: string): number {
        return 0;
    }
}
