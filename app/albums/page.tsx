import { fetchAlbums } from "@/utils/fetchAlbums";
import { Album } from "@/typings";
import Albums from "@/components/album/Albums";

const AlbumsPage = async () => {
  const albums: Album[] = await fetchAlbums();

  return (
   <>
    <Albums albums={albums}/>
   </>
  )
}

export default AlbumsPage