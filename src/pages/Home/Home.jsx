import Banner from "../../Components/Banner/Banner"
import { BannerData } from "../../Components/Banner/BannerData"
import Main_Heading from "../../Components/Common/Main_Heading/Main_Heading"
import Footer from "../../Components/Footer/Footer"
import { FooterImages } from "../../Components/Footer/FooterData"
import Main_Header from "../../Components/Main_Header/Main_Header"
import New_Arrival from "../../Components/New_Arrival/New_Arrival"
import { Pre_HeaderData } from "../../Components/Pre_Header/Pre_HeaderData"
import PreHeader from "../../Components/Pre_Header/PreHeader"
import PreFooter from "../../Components/PreFooter/PreFooter"
import { icons, PreFooterData } from "../../Components/PreFooter/PreFooterData"
import ProductBanner from "../../Components/ProductBanner/ProductBanner"
import Subscribe from "../../Components/Subscribe/Subscribe"
import TopSelling from "../../Components/TopSelling/TopSelling"
import UserFeedback from "../../Components/userFeedback/userFeedback"

const Home = () => {
  return (
    <div>
        <PreHeader data={Pre_HeaderData}/>
        <Main_Header/>
        <Banner data={BannerData}/>
        <Main_Heading text="NEW ARRIVALS"/>
        <New_Arrival/>
        <Main_Heading text="TOP SELLING"/>
        <TopSelling/>
        <ProductBanner/>
        <Main_Heading text="OUR HAPPY CUSTOMERS"/>
        <UserFeedback/>
        <Subscribe/>
        <PreFooter data={PreFooterData} iconData={icons}/>
        <Footer data={FooterImages}/>
    </div>
  )
}

export default Home