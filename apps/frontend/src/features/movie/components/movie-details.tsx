import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();

  return <div>Movie Details Component {id}</div>;
};
