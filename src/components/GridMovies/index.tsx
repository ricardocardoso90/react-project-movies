import './styles.css';
import { Movie } from '../../Types';

type Props = {
  itemProp: Movie;
};

export const GridMovies = ({ itemProp }: Props) => {
  return (
    <div className='grid-movies'>
      <img src={itemProp.avatar} alt="" width={170} />
      {/* {item.titulo} */}
    </div>
  )
};