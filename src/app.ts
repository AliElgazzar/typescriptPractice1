import { get_items, add_item, update_item_title_by_id, delete_item_by_id, get_item_title_by_id } from './exercise-01';
import { Exercise2 } from './exercise-02';
import { Exercise3 } from './exercise-03';

console.log('Testing Exercise 1:');

console.log('Adding items:');
console.log(add_item({ id: '1', title: 'Item 1' }));
console.log(add_item({ id: '2', title: 'Item 2' }));
console.log(add_item({ id: '1', title: 'Item 1 Duplicate' }));
console.log('Current items:', get_items());

console.log('Updating item title:');
console.log(update_item_title_by_id('1', 'Updated Item 1'));
console.log(update_item_title_by_id('3', 'Non-existent Item'));
console.log('Current items:', get_items());

console.log('Deleting item:');
console.log(delete_item_by_id('2'));
console.log(delete_item_by_id('3'));
console.log('Current items:', get_items());

console.log('Getting item title by ID:');
console.log(get_item_title_by_id('1'));
console.log(get_item_title_by_id('2'));
console.log(get_item_title_by_id('3'));

console.log('\nTesting Exercise 2:');
const exercise2 = new Exercise2();

console.log('Adding movies to genre "thriller":');
console.log(exercise2.add_movie_in_genre('thriller', { id: '1', title: 'The American' }));
console.log(exercise2.add_movie_in_genre('thriller', { id: '2', title: 'Arcadian' }));
console.log(exercise2.add_movie_in_genre('thriller', { id: '1', title: 'Duplicate Movie' }));
console.log(exercise2.add_movie_in_genre('action', { id: '3', title: 'Mission Impossible' }));

console.log('Updating movie title:');
console.log(exercise2.update_movie_title_by_genre_and_movie_id('thriller', '1', 'The American Updated'));
console.log(exercise2.update_movie_title_by_genre_and_movie_id('thriller', '3', 'Non-existent Movie'));

console.log('Deleting movie:');
console.log(exercise2.delete_movie_by_genre_and_movie_id('thriller', '2'));
console.log(exercise2.delete_movie_by_genre_and_movie_id('thriller', '3'));

console.log('Getting movie title by ID:');
console.log(exercise2.get_movie_title_by_id('thriller', '1'));
console.log(exercise2.get_movie_title_by_id('thriller', '2'));
console.log(exercise2.get_movie_title_by_id('action', '3'));

console.log('\nTesting Exercise 3:');
const exercise3 = new Exercise3();

console.log('Adding courses:');
console.log(exercise3.add_course('CS472', 'Web Application Programming'));
console.log(exercise3.add_course('CS472', 'Duplicate Course'));

console.log('Updating course title:');
console.log(exercise3.update_course_title('CS472', 'Advanced Web Programming'));
console.log(exercise3.update_course_title('CS101', 'Non-existent Course'));

console.log('Deleting course:');
console.log(exercise3.delete_course('CS472'));
console.log(exercise3.delete_course('CS101'));

console.log('Getting course title by code:');
console.log(exercise3.get_course_title_by_code('CS472'));
console.log(exercise3.get_course_title_by_code('CS101'));

console.log('Enrolling students:');
console.log(exercise3.add_course('CS472', 'Web Application Programming'));
console.log(exercise3.enroll_student_in_course('CS472', { student_id: '1', firstname: 'John', lastname: 'Doe' }));
console.log(exercise3.enroll_student_in_course('CS472', { student_id: '1', firstname: 'John', lastname: 'Doe' }));
console.log(exercise3.enroll_student_in_course('CS101', { student_id: '2', firstname: 'Jane', lastname: 'Doe' }));

console.log('Removing students:');
console.log(exercise3.remove_student_from_course('CS472', '1'));
console.log(exercise3.remove_student_from_course('CS472', '2'));

console.log('Updating student grade:');
console.log(exercise3.enroll_student_in_course('CS472', { student_id: '1', firstname: 'John', lastname: 'Doe' }));
console.log(exercise3.update_student_grade('CS472', '1', 95));
console.log(exercise3.update_student_grade('CS472', '2', 85));

console.log('Getting student grade:');
console.log(exercise3.get_student_grade('CS472', '1'));
console.log(exercise3.get_student_grade('CS472', '2'));