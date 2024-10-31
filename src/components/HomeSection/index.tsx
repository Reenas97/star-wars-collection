import CardList from "../CardList";
import MainButton from "../MainButton";
import MainTitle from "../MainTitle";


interface HomeSectionProps {
    title: string;
    items: any[];
    loading: boolean;
    CardComponent: React.FC<{name: string; imageUrl: string; homeworldName: string}>;
    link: string;
    text: string;
}

const HomeSection: React.FC<HomeSectionProps> = ({title, items, loading, CardComponent, link, text}) =>{
    return (
        <section className={`margint_default marginb_default`}>
            <MainTitle text = {title} />
            {loading ?(
                <div>Loading...</div>
            ) : (
                <CardList 
                    items= {items}
                    CardComponent={CardComponent}
                />
            )}
            <MainButton 
                link = {link}
                text = {text}
            />
        </section>
    )
}

export default HomeSection