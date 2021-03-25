import { Button } from "./Button";

import "../styles/sidebar.scss";

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface GenreProps {
  genres: GenreResponseProps[];
  genreId: number;
  handleButtonGenreClick: (id: number) => void;
}

export function SideBar({
  genres,
  genreId,
  handleButtonGenreClick,
}: GenreProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleButtonGenreClick(genre.id)}
            selected={genreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
