export interface Movie {
    id: number;
    title: string;
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;

}

export interface TrendingMovie {
    movie_id: number;
    title: string;
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_url: string;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}


export interface TrendingCardProps {
    movie: TrendingMovie,
    index: number,
}

export interface MovieDetails {
    movie_id: number;
    title: string;
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    runtime: number;
    overview: string;
    genres: string;
    budget: number;
    revenue: number;
    production_companies: string;
}