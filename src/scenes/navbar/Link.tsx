import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;
    selectedPage: string;
    setselectedPage: (value: string) => void;
}

const Link = ({
    page,
    selectedPage,
    setselectedPage,
}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "")

  return (
    <AnchorLink
        /* by having no class the selestedPage value will be black */
        className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
            transition duration-500 hover:text-primary-300`}
        href={`#${lowerCasePage}`}
        onClick={() => setselectedPage(lowerCasePage)}
    >
        {page}
    </AnchorLink>
  )
}

export default Link
