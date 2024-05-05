import SingleAlbum from "@/components/album/SingleAlbum"
import { SingleAlbumInfo, Slug } from "@/typings"
import { fetchSlugs } from "@/utils/fetchAlbumSlugs"
import { fetchAlbumsWithImages } from "@/utils/fetchAlbums"

export async function generateStaticParams() {
  const slugs: Slug[] = await fetchSlugs()
  return slugs.map((slug) => ({
    params: {
      slug: slug.current
    }
  }))
}

const Albumpage = async ({ params }: any) => {
  const album: SingleAlbumInfo = await fetchAlbumsWithImages(params.slug)
  return (
    <>
      <SingleAlbum album={album}/>
    </>
  )
}

export default Albumpage