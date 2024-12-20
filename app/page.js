import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";


export default function Page() {
  return (
    <div className="md:flex">
      <h1 className='justify-self-auto text-2xl'>HelloWorld</h1>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
}

// export const HeaderDesktop = () => {
//   return (
//     <div className="relative w-[1440px] h-[100px] bg-[#01d75880] border-b [border-bottom-style:solid] border-[#01d758]">
//       <img
//         className="absolute w-[130px] h-[100px] -top-px -left-px object-cover"
//         alt="Element"
//         src={N1RemovebgPreview1}
//       />

//       <Lien
//         className="!absolute !left-[722px] !top-[33px]"
//         divClassName="!text-system-colors-miscellaneous-floating-tab-pill-fill !tracking-[var(--headline-letter-spacing)] !text-[length:var(--headline-font-size)] ![font-style:var(--headline-font-style)] !font-[number:var(--headline-font-weight)] !font-headline !leading-[var(--headline-line-height)]"
//         text="Accueil"
//       />
//       <Lien
//         className="!absolute !left-[903px] !top-[33px]"
//         divClassName="!text-system-colors-miscellaneous-floating-tab-pill-fill !tracking-[var(--headline-letter-spacing)] !text-[length:var(--headline-font-size)] ![font-style:var(--headline-font-style)] !font-[number:var(--headline-font-weight)] !font-headline !leading-[var(--headline-line-height)]"
//         text="Covoiturages"
//       />
//       <Lien
//         className="!absolute !left-[1084px] !top-[33px]"
//         divClassName="!text-system-colors-miscellaneous-floating-tab-pill-fill !tracking-[var(--headline-letter-spacing)] !text-[length:var(--headline-font-size)] ![font-style:var(--headline-font-style)] !font-[number:var(--headline-font-weight)] !font-headline !leading-[var(--headline-line-height)]"
//         text="Connexion"
//       />
//       <Lien
//         className="!absolute !left-[1265px] !top-[33px]"
//         divClassName="!text-system-colors-miscellaneous-floating-tab-pill-fill !tracking-[var(--headline-letter-spacing)] !text-[length:var(--headline-font-size)] ![font-style:var(--headline-font-style)] !font-[number:var(--headline-font-weight)] !font-headline !leading-[var(--headline-line-height)]"
//         text="Contact"
//       />
//     </div>
//   );
// };

