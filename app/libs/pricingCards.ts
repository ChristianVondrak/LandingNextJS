import { ImgProps } from "next/dist/shared/lib/get-img-props";

interface IPricingCard {
    price:number;
    title:string;
    benefits:String[];
    id:number;
    oneliner:string;
}

const pricingCards:IPricingCard[] = [
    {
        price:49,
        title:"Basic Plan",
        benefits: [
            "+50 pre-recorded classes",
            "Direct communication with me",
            "Unique resources "
        ],
        id:1,
        oneliner: "Everything you need to boost your brand"
    },
    {
        price:99,
        title:"Full Plan",
        benefits: [
            "+150 pre-recorded classes",
            "Direct communication with me 24 hours",
            "Unique resources ",
            "Online meetings with me"
        ],
        id:2,
        oneliner: "Everything you need to boost your brand and much more"
    }


]