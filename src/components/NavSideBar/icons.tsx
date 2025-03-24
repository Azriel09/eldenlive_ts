import GuraPic from "../../assets/talent-icons/gura.png";
import AmePic from "../../assets/talent-icons/ame.png";
import CalliPic from "../../assets/talent-icons/calli.png";
import InaPic from "../../assets/talent-icons/ina.png";
import IrysPic from "../../assets/talent-icons/irys.png";
import KroniiPic from "../../assets/talent-icons/kronii.png";
import BijouPic from "../../assets/talent-icons/biboo.jpg";
// import OkayuPic from "../images/talent-icons/okayu.png";
// import FlarePic from "../images/talent-icons/flare.png";
// import LuiPic from "../images/talent-icons/lui.png";
// import LunaPic from "../images/talent-icons/luna.png";
// import MikoPic from "../images/talent-icons/miko.png";
// import ChloePic from "../images/talent-icons/chloe.png";
// import KoyoriPic from "../images/talent-icons/koyori.png";
// import LamyPic from "../images/talent-icons/lamy.png";
// import BotanPic from "../images/talent-icons/botan.png";
// import PekoraPic from "../images/talent-icons/pekora.png";
// import NoelPic from "../images/talent-icons/noel.png";
// import AkirosePic from "../images/talent-icons/aki.png";
// import MoonaPic from "../images/talent-icons/moona.png";
// import ReinePic from "../images/talent-icons/reine.png";
interface TalentIconProps {
  src: string;
  alt: string;
}
interface TalentIconByNameProps {
  name: string;
}
type TalentName =
  | "gura"
  | "ame"
  | "calli"
  | "ina"
  | "irys"
  | "kronii"
  | "bijou";

const TALENT_ICONS: Record<TalentName, string> = {
  gura: GuraPic,
  ame: AmePic,
  calli: CalliPic,
  ina: InaPic,
  irys: IrysPic,
  kronii: KroniiPic,
  bijou: BijouPic,
};

const TalentIcon = ({ src, alt }: TalentIconProps) => (
  <img src={src} alt={alt} style={{ borderRadius: "50%", width: "35px" }} />
);
export const TalentIconByName = ({ name }: TalentIconByNameProps) => (
  <TalentIcon src={TALENT_ICONS[name.toLowerCase() as TalentName]} alt={name} />
);

// export function OkayuIcon() {
//   return <img src={OkayuPic} style={{ borderRadius: "50%", width: "35px" }} />;
// }

// export function FlareIcon() {
//   return <img src={FlarePic} style={{ borderRadius: "50%", width: "35px" }} />;
// }
// export function LuiIcon() {
//   return <img src={LuiPic} style={{ borderRadius: "50%", width: "35px" }} />;
// }
// export function LunaIcon() {
//   return <img src={LunaPic} style={{ borderRadius: "50%", width: "35px" }} />;
// }
// export function MikoIcon() {
//   return <img src={MikoPic} style={{ borderRadius: "50%", width: "35px" }} />;
// }
// export function ChloeIcon() {
//   return <img src={ChloePic} style={{ borderRadius: "50%", width: "35px" }} />;
// }
// export function KoyoriIcon() {
//   return <img src={KoyoriPic} style={{ borderRadius: "50%", width: "35px" }} />;
// }
// export function ReineIcon() {
//   return <img src={ReinePic} style={{ borderRadius: "50%", width: "35px" }} />;
// }
// export function LamyIcon() {
//   return <img src={LamyPic} style={{ borderRadius: "50%", width: "35px" }} />;
// }
// export function BotanIcon() {
//   return <img src={BotanPic} style={{ borderRadius: "50%", width: "35px" }} />;
// }
// export function PekoraIcon() {
//   return <img src={PekoraPic} style={{ borderRadius: "50%", width: "35px" }} />;
// }
// export function NoelIcon() {
//   return <img src={NoelPic} style={{ borderRadius: "50%", width: "35px" }} />;
// }
// export function AkiroseIcon() {
//   return (
//     <img src={AkirosePic} style={{ borderRadius: "50%", width: "35px" }} />
//   );
// }
// export function MoonaIcon() {
//   return <img src={MoonaPic} style={{ borderRadius: "50%", width: "35px" }} />;
// }
