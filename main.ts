type Grade = 'All' | 12 | 15 | 18;
type Genre = 'drama' | 'adventure' | 'horror' | 'romance' | 'animation' | 'thriller';

interface Movie {
	title: string;
	grade: Grade;
	genre: Genre;
	isSubtitle: boolean;
	vid?: string;
}

const movieData: Movie[] = [
	{ title: 'One piece', grade: 15, genre: 'adventure', isSubtitle: true, vid: 'url' },
	{ title: 'Squeed Game', grade: 18, genre: 'thriller', isSubtitle: true },
	{ title: 'Litter Mermade', grade: 12, genre: 'animation', isSubtitle: false, vid: 'url' },
];

const createList = (data: Movie[]) => {
	//return JSX
};

createList(movieData);
