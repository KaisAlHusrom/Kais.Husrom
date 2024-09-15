import { Helmet } from "react-helmet-async";


interface SeoProps {
    title: string,
    description: string,
    name: string,
    type: string,
    canonical: string,
    author?: string,
    keywords?: string
}

const Seo = (props: SeoProps) => {
    const {
        title,
        description,
        name,
        type,
        author,
        keywords,
        canonical,
    } = props;



    return (
        <Helmet>
            { /* Standard metadata tags */ }
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="author" content={author || ""} />
            <meta name="keywords" content={keywords || ""} />

            {/* links */}
            <link rel="canonical" content={canonical} />

            
            { /* End standard metadata tags */ }

            { /* Facebook tags */ }
            <meta property="og:url" content={"test"} />
            <meta property="og:image" content={"test image"} />
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            { /* End Facebook tags */ }


            { /* Twitter tags */ }
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content={type} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            { /* End Twitter tags */ }
        </Helmet>
    )
}

export default Seo