// exercise 2

export type Movie = { id: string, title: string; };

export class Exercise2 {
    #movies: Record<string, Movie[]> = {}; // example: { thriller: [{ id: '1', title: 'The American'}, { id: '2', title: 'Arcadian'}] }

    add_movie_in_genre(genre: string, new_movie: Movie): boolean {
        // add movie if movie id does not exist
        // return true if the movie is added successfully, false otherwise
        return true;
    }

    update_movie_title_by_genre_and_movie_id(genre: string, movie_id: string, new_title: string): boolean {
        // update a movie within a certain genre
        // return true if the movie's title is updated successfully, false otherwise
        return true;
    }

    delete_movie_by_genre_and_movie_id(genre: string, movie_id: string): boolean {
        // delete movie 
        // return true if the movie is delete successfully, false otherwise
        return true;
    }


    get_movie_title_by_id(genre: string, movie_id: string): string {
        // return the movie title 
        return '';
    }
}
