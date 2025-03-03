type Student = { student_id: string, firstname: string; lastname: string; grade: number; };
type Course = Record<string, { title: string, students: Student[]; }>; // example: { 'CS472': { title: 'Web Application Programming', students: [] }}

export class Exercise3 {
    #courses: Course = {};

    add_course(course_code: string, course_title: string): boolean {
        // Check if the course code already exists
        if (this.#courses[course_code]) {
            return false; // Course already exists
        }

        // Add the new course
        this.#courses[course_code] = { title: course_title, students: [] };
        return true; // Course added successfully
    }

    update_course_title(course_code: string, new_course_title: string): boolean {
        // Check if the course exists
        if (!this.#courses[course_code]) {
            return false; // Course does not exist
        }

        // Update the course title
        this.#courses[course_code].title = new_course_title;
        return true; // Title updated successfully
    }

    delete_course(course_code: string): boolean {
        // Check if the course exists
        if (!this.#courses[course_code]) {
            return false; // Course does not exist
        }

        // Delete the course
        delete this.#courses[course_code];
        return true; // Course deleted successfully
    }

    get_course_title_by_code(course_code: string): string {
        // Check if the course exists
        if (!this.#courses[course_code]) {
            return ''; // Course does not exist
        }

        // Return the course title
        return this.#courses[course_code].title;
    }

    enroll_student_in_course(course_code: string, student: Partial<Student>): boolean {
        // Check if the course exists
        if (!this.#courses[course_code]) {
            return false; // Course does not exist
        }

        // Check if the student is already enrolled
        const isEnrolled = this.#courses[course_code].students.some(s => s.student_id === student.student_id);
        if (isEnrolled) {
            return false; // Student is already enrolled
        }

        // Enroll the student with a default grade of 0
        const newStudent: Student = {
            student_id: student.student_id!,
            firstname: student.firstname!,
            lastname: student.lastname!,
            grade: 0, // Default grade
        };
        this.#courses[course_code].students.push(newStudent);
        return true; // Student enrolled successfully
    }

    remove_student_from_course(course_code: string, student_id: string): boolean {
        // Check if the course exists
        if (!this.#courses[course_code]) {
            return false; // Course does not exist
        }

        // Find the index of the student in the course
        const studentIndex = this.#courses[course_code].students.findIndex(s => s.student_id === student_id);
        if (studentIndex === -1) {
            return false; // Student not found
        }

        // Remove the student from the course
        this.#courses[course_code].students.splice(studentIndex, 1);
        return true; // Student removed successfully
    }

    update_student_grade(course_code: string, student_id: string, grade: number): boolean {
        // Check if the course exists
        if (!this.#courses[course_code]) {
            return false; // Course does not exist
        }

        // Find the student in the course
        const student = this.#courses[course_code].students.find(s => s.student_id === student_id);
        if (!student) {
            return false; // Student not found
        }

        // Update the student's grade
        student.grade = grade;
        return true; // Grade updated successfully
    }

    get_student_grade(course_code: string, student_id: string): number {
        // Check if the course exists
        if (!this.#courses[course_code]) {
            return -1; // Course does not exist
        }

        // Find the student in the course
        const student = this.#courses[course_code].students.find(s => s.student_id === student_id);
        if (!student) {
            return -1; //
        }

        // Return the student's grade
        return student.grade;
    }
}