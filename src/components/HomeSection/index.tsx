import { ConfigProvider, Spin } from "antd";
import CardList from "../CardList";
import MainButton from "../MainButton";
import MainTitle from "../MainTitle";


interface HomeSectionProps {
    title: string;
    items: any[];
    loading: boolean;
    CardComponent: React.FC<{item: any}>;
    link: string;
    text: string;
}

const HomeSection: React.FC<HomeSectionProps> = ({title, items, loading, CardComponent, link, text}) =>{
    return (
        <section className={`margint_default marginb_default`}>
            <MainTitle text = {title} />
            {loading ?(
                <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: "#0cd7e9",
                  },
                }}
              >
                <Spin size="large" style={{ display: 'block', margin: 'auto' }} />
              </ConfigProvider>
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