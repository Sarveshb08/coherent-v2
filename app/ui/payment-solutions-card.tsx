// PaymentSolutionsCard.tsx
import React from "react";

// Image asset constants
const imgVector = "http://localhost:3845/assets/b444b22a6567dce3054746ca21ee526bafe33e35.svg";
const imgVector1 = "http://localhost:3845/assets/44d08b46ee344ded5b17da9e407502f5c9d62df8.svg";
const imgSubtract = "http://localhost:3845/assets/fdc879d0a9cba89abe8a16c2b8b48efab42b57d4.svg";
const imgEllipse81 = "http://localhost:3845/assets/2b574b66951173b8bea8b09f96a71aeb163dc919.svg";
const imgVector43 = "http://localhost:3845/assets/d9b21c7227c10acdfc0ed7d0009b44e481997d42.svg";
const imgVector44 = "http://localhost:3845/assets/88f17f6bfdc69b2e13ced5f2654a2820f76fecb3.svg";
const imgVector46 = "http://localhost:3845/assets/6ccc81cc0e6b45032d007d8243c5e85d03067bbf.svg";
const imgVector47 = "http://localhost:3845/assets/a59167f41f026123e9ff8f70034fc3f8fcebb53c.svg";
const imgVector45 = "http://localhost:3845/assets/86b2d80f96231281a9f4d96a2db098ef139e9886.svg";
const imgVector48 = "http://localhost:3845/assets/ab899bb59a0da3f2cfc3afb840a72845ff5a0f3c.svg";
const imgVector49 = "http://localhost:3845/assets/0f4948a0fd15139970013afefffb4da61d41d66e.svg";
const imgEllipse82 = "http://localhost:3845/assets/07734f6fe083745682b3f768933d00c1ec36e9f7.svg";
const imgVector2 = "http://localhost:3845/assets/f268f693119a518222198254986cea61255281a9.svg";
const imgVector3 = "http://localhost:3845/assets/681392eed554bf9f3025791e0c58f6c6c9755e91.svg";
const imgUnion = "http://localhost:3845/assets/be4e93b228a77109afbe1263091aaaac8b623f03.svg";
const imgGroup1686553303 = "http://localhost:3845/assets/a1f2b1394ee70c4dfab6a1f6f4b594cd7f2a9245.svg";

export type Action = {
  label: string;
  active?: boolean;
};

export type Section = {
  icon: React.ReactNode;
  title: string;
  description: string;
  actions: Action[];
};

export type PaymentSolutionsCardProps = {
  sections: Section[];
  onActionClick?: (sectionIdx: number, actionIdx: number) => void;
};



export const PaymentSolutionsCard: React.FC<PaymentSolutionsCardProps> = ({
sections,
onActionClick,
}) => {
  const [activeSection, setActiveSection] = React.useState<number | null>(null);
  const [activeAction, setActiveAction] = React.useState<number | null>(null);

  // Update section/actions to reflect active state
  const updatedSections = sections.map((section, sIdx) => ({
    ...section,
    actions: section.actions.map((action, aIdx) => ({
      ...action,
      active: activeSection === sIdx && activeAction === aIdx,
    })),
  }));

  return (
    <div className="bg-acme-white rounded-[20px] flex flex-col gap-10 py-10 px-8 w-full shadow-[0_4px_32px_0_rgba(44,45,58,0.08)]">
      {/* Force Tailwind to generate all color classes */}
      {updatedSections.map((section, idx) => {
        const isSectionActive = section.actions.some(a => a.active);
        return (
          <div
            key={idx}
            className={`px-0 py-6 flex flex-col gap-5 w-full rounded-[16px] transition-colors duration-150 border border-transparent`}
            style={isSectionActive ? {
              background: 'linear-gradient(90deg, #F1ECFF 0%, #F1ECFF 100%)',
            } : {}}
          >
            <div className="flex flex-row gap-6 items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-acme-purpleLight rounded-xl">
                {section.icon}
              </div>
              <div>
                <div className={`font-semibold text-[18px] leading-[28px] tracking-tight ${isSectionActive ? 'text-acme-purple' : 'text-acme-dark'}`}>{section.title}</div>
                <div className={`font-normal text-[15px] leading-[22px] tracking-tight ${isSectionActive ? 'text-acme-purple' : 'text-acme-dark2'}`}>{section.description}</div>
              </div>
            </div>
            <div className="flex flex-row gap-4 pl-20">
              {section.actions.map((action, i) => (
                <button
                  key={i}
                  className={`relative border rounded-xl px-6 py-2.5 font-semibold text-[15px] text-nowrap transition-colors duration-150
                    ${action.active
                      ? ' bg-acme-purpleLight text-acme-purple'
                      : 'bg-acme-offwhite  text-acme-dark'}
                  `}
                //   style={action.active ? {
                //     boxShadow: '0px 0px 0px 4px #A55CFF',
                //   } : {}}
                  type="button"
                  onClick={() => {
                    setActiveSection(idx);
                    setActiveAction(i);
                    if (onActionClick) onActionClick(idx, i);
                  }}
                >
                  {action.label}
                  {action.active && (
                    <span className="absolute inset-0 rounded-xl border-2 border-acme-purple pointer-events-none"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};


// Example usage (remove or move to your page/component):
// Example usage:
/*
import { PaymentSolutionsCard } from "./payment-solutions-card";

const sections = [
  {
    icon: <img src={imgVector} alt="Payment Gateway" />,
    title: "Payment Gateway",
    description: "Collect Payments on your web/app",
    actions: [
      { label: "Payment Links" },
      { label: "Payment Forms" },
      { label: "Payment Buttons" },
    ],
  },
  {
    icon: <img src={imgEllipse81} alt="International Payments" />,
    title: "International Payments",
    description: "Accept payments with ease",
    actions: [
      { label: "Collect from India" },
      { label: "Collect from the World" },
    ],
  },
  {
    icon: <img src={imgGroup1686553303} alt="Checkout Solutions" />,
    title: "Checkout Solutions",
    description: "Accept and send payments worldwide with ease",
    actions: [
      { label: "OneClickCheckout" },
      { label: "Shopify PG" },
    ],
  },
];

<PaymentSolutionsCard sections={sections} />
*/

