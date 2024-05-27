interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _key: string;
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

interface Block {
    _key: string;
    _type: "block";
    children: {
        _key: string;
        _type: "span";
        marks: [];
        text: string;
    }[];
    markDefs: [];
    style: string;

}

interface Slug {
    _type: "slug";
    current: string;
}

export interface HomeInfo extends SanityBody {
    _type: "home";
    location: string;
    homeImage: Image;
}

export interface AboutInfo extends SanityBody {
    _type: "about";
    aboutImage: Image;
    aboutText: Block;
}

export interface VideosInfo extends SanityBody {
    _type: "videos";
    videosText: Block;
    videoLinks: string[];
}

export interface Album extends SanityBody {
    _type: "albums";
    albumName: string;
    slug: Slug;
    coverImage: Image;
}

export interface SingleAlbumInfo extends SanityBody {
    _type: "albums";
    albumName: string;
    slug: Slug;
    images: Image[];
}

export interface ContactInfo extends SanityBody {
    _type: "contact";
    phoneNumber: string;
    email: string;
    facebook: string;
    instagram: string;
    twitter: string;
    youtube: string;
}