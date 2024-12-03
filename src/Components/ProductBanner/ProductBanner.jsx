import BrowserBanner from "../Common/BrowserBanner/BrowserBanner"
import { BrowserBannerData1} from "../Common/BrowserBanner/BrowserBannerData"
import Main_Heading from "../Common/Main_Heading/Main_Heading"
import "./Responsive.css";

const ProductBanner = () => {
  return (
    <div className=" w-[98%] p-4 rounded-xl my-7 m-auto bg-slate-400">
        <Main_Heading text="BROWSE BY DRESS STYLE"/>
        <BrowserBanner data={BrowserBannerData1}/>
    </div>
  )
}

export default ProductBanner