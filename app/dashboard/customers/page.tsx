"use client"
import ExperienceCard from "@/app/ui/experience-card"
import Button from "@/app/ui/button-figma"
import Tabs from "@/app/ui/tabs-mdc";
import FAQ from "@/app/ui/faq";
import FAQFigma from "@/app/ui/faq-figma";
import FAQNavbar2025B from "@/app/ui/faq-navbar2025b";
import FAQNavbar2025C from "@/app/ui/faq-navbar2025c";
import React,{useState} from "react";
import { PaymentSolutionsCard } from "@/app/ui/payment-solutions-card";
import SimpleFormFigma from "@/app/ui/simple-form-figma";
import BlogPostCard from "@/app/ui/blog-post-card";
const imgVector = "http://localhost:3845/assets/b444b22a6567dce3054746ca21ee526bafe33e35.svg";
const imgVector1 = "http://localhost:3845/assets/44d08b46ee344ded5b17da9e407502f5c9d62df8.svg";
const imgSubtract = "http://localhost:3845/assets/fdc879d0a9cba89abe0a16c2b8b48efab42b57d4.svg";
const imgEllipse81 = "http://localhost:3845/assets/2b574b66951173b8bea8b09f96a71aeb163dc919.svg";
const imgEllipse82 = "http://localhost:3845/assets/07734f6fe083745682b3f768933d00c1ec36e9f7.svg";
const imgVector44 = "http://localhost:3845/assets/88f17f6bfdc69b2e13ced5f2654a2820f76fecb3.svg";
const imgVector45 = "http://localhost:3845/assets/86b2d80f96231281a9f4d96a2db098ef139e9886.svg";
const imgVector48 = "http://localhost:3845/assets/ab899bb59a0da3f2cfc3afb840a72845ff5a0f3c.svg";
const imgVector49 = "http://localhost:3845/assets/0f4948a0fd15139970013afefffb4da61d41d66e.svg";
const imgVector2 = "http://localhost:3845/assets/f268f693119a518222198254986cea61255281a9.svg";
const imgVector3 = "http://localhost:3845/assets/681392eed554bf9f3025791e0c58f6c6c9755e91.svg";
const imgUnion = "http://localhost:3845/assets/be4e93b228a77109afbe1263091aaaac8b623f03.svg";
const imgGroup1686553303 = "http://localhost:3845/assets/a1f2b1394ee70c4dfab6a1f6f4b594cd7f2a9245.svg";
export default function Page() {
  const [activeTab, setActiveTab] = useState(0);



  const items = [
    { label: "Item 1" },
    { label: "Item 2" },
    { label: "Item 3"},
    { label: "Item 4" },
  ];

  const sections = [
    {
      icon: (
        <span className="block w-6 h-6 relative" style={{ minWidth: 24, minHeight: 24 }}>
          <img src={imgVector} alt="Payment Gateway" className="absolute left-0 top-0 w-full h-full" style={{ width: 24, height: 24 }} />
          <img src={imgVector1} alt="Vector1" className="absolute left-[7px] top-[8px] w-[17px] h-[11px]" style={{ width: 17, height: 11 }} />
          <img src={imgSubtract} alt="Subtract" className="absolute left-[7px] top-[10px] w-[17px] h-[1px]" style={{ width: 17, height: 1 }} />
          <span className="absolute left-[1px] top-[3px] bg-[#a55cff] w-[13px] h-[1px]" style={{ background: '#a55cff', width: 13, height: 1 }} />
        </span>
      ),
      title: "Payment Gateway",
      description: "Collect Payments on your web/app",
      actions: [
        { label: "Payment Links" },
        { label: "Payment Forms" },
        { label: "Payment Buttons" },
      ],
    },
    {
      icon: (
        <span className="block w-6 h-6 relative" style={{ minWidth: 24, minHeight: 24 }}>
          <img src={imgEllipse81} alt="Ellipse" className="absolute left-[4px] top-[4px] w-[17px] h-[17px]" style={{ width: 17, height: 17 }} />
          <img src={imgEllipse82} alt="Ellipse2" className="absolute left-[13px] top-0 w-[11px] h-[11px]" style={{ width: 11, height: 11 }} />
          <img src={imgEllipse82} alt="Ellipse2" className="absolute left-0 top-[13px] w-[11px] h-[11px]" style={{ width: 11, height: 11 }} />
          <img src={imgVector44} alt="Vector44" className="absolute left-[4px] top-[7px] w-[15px] h-[2px]" style={{ width: 15, height: 2 }} />
          <img src={imgVector45} alt="Vector45" className="absolute left-[5px] top-[17px] w-[15px] h-[2px]" style={{ width: 15, height: 2 }} />
          <img src={imgVector48} alt="Vector48" className="absolute left-[9px] top-[4px] w-[4px] h-[18px]" style={{ width: 4, height: 18 }} />
          <img src={imgVector49} alt="Vector49" className="absolute left-[13px] top-[4px] w-[4px] h-[18px]" style={{ width: 4, height: 18 }} />
          <img src={imgVector2} alt="Vector2" className="absolute left-[17px] top-[3px] w-[3px] h-[7px]" style={{ width: 3, height: 7 }} />
          <img src={imgVector3} alt="Vector3" className="absolute left-[17px] top-[3px] w-[3px] h-[7px]" style={{ width: 3, height: 7 }} />
          <img src={imgUnion} alt="Union" className="absolute left-[2px] top-[17px] w-[7px] h-[7px]" style={{ width: 7, height: 7 }} />
        </span>
      ),
      title: "International Payments",
      description: "Accept payments with ease",
      actions: [
        { label: "Collect from India" },
        { label: "Collect from the World" },
      ],
    },
    {
      icon: (
        <span className="block w-6 h-6 relative" style={{ minWidth: 24, minHeight: 24 }}>
          <img src={imgVector} alt="Checkout Vector" className="absolute left-0 top-0 w-full h-full" style={{ width: 24, height: 24 }} />
          <img src={imgGroup1686553303} alt="Group" className="absolute left-[5px] top-[7px] w-[15px] h-[11px]" style={{ width: 15, height: 11 }} />
          <span className="absolute left-[1px] top-[3px] bg-[#a55cff] w-[13px] h-[1px]" style={{ background: '#a55cff', width: 13, height: 1 }} />
        </span>
      ),
      title: "Checkout Solutions",
      description: "Accept and send payments worldwide with ease",
      actions: [
        { label: "OneClickCheckout",active:true },
        { label: "Shopify PG" },
      ],
    },
  ];

  return (
    <div>
      {/* <ExperienceCard/>
      <hr /> */}
      <Button variant="primary" size="md">Continue</Button>
      <hr />
      <Button variant="default" size="md">Default</Button>
      <hr />
      {/* <Button variant="withIcon" size="md">Login with Email</Button> */}
      <hr />
      <Button variant="danger" size="md">Delete</Button>

      <br />
      <br />

      <div>
      <Tabs
        items={items}
        activeIndex={activeTab}
        onChange={setActiveTab}
      />
      {/* You can show tab content below */}
      <div style={{ marginTop: 24 }}>
        {`Current tab: ${items[activeTab].label}`}
      </div>
    </div>
    
    <PaymentSolutionsCard sections={sections} />
    <br />
    <br />

    <FAQ/>
    <FAQFigma/>
    <FAQNavbar2025B/>
    <FAQNavbar2025C/>
    <SimpleFormFigma/>
    <BlogPostCard/>

    </div>
  )
}