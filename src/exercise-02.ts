import { title } from 'process';
// exercise 2

export type Movie = { id: string, title: string; };

export class Exercise2 {
    #movies: Record<string, Movie[]> = {}; // example: { thriller: [{ id: '1', title: 'The American'}, { id: '2', title: 'Arcadian'}] }

    add_movie_in_genre(genre: string, new_movie: Movie): boolean {
        // add movie if movie id does not exist
        if (!this.#movies[genre]) {
            this.#movies[genre] = [];
        }
        const movieExists = this.#movies[genre].some(movie => movie.id === new_movie.id);
        if (movieExists) {
            return false; 
        }

      
        this.#movies[genre].push(new_movie);
        return true;
    }

    update_movie_title_by_genre_and_movie_id(genre: string, movie_id: string, new_title: string): boolean {
        // update a movie within a certain genre
        // return true if the movie's title is updated successfully, false otherwise
        if (!this.#movies[genre]) {
            return false;
        }
        const movie = this.#movies[genre].find(movie => movie.id === movie_id);
        if (!movie) {
            return false;
        }

        movie.title = new_title;
        return true; 
    }

    delete_movie_by_genre_and_movie_id(genre: string, movie_id: string): boolean {
        // delete movie 
        // return true if the movie is delete successfully, false otherwise
       // Check if the genre exists
       if (!this.#movies[genre]) {
        return false; 
    }
    const movieIndex = this.#movies[genre].findIndex(movie => movie.id === movie_id);
    if (movieIndex === -1) {
        return false; }

    
    this.#movies[genre].splice(movieIndex, 1);
    return true; 
}


get_movie_title_by_id(genre: string, movie_id: string): string {
 
    if (!this.#movies[genre]) {
        return ''; 
    }

    const movie = this.#movies[genre].find(movie => movie.id === movie_id);
    if (!movie) {
        return '';
    }

  
    return movie.title;
}
}