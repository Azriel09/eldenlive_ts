import "./Timestamps-styles.css";
interface TalentNameProps {
  selectedTalent: string;
}

export default function TalentName({ selectedTalent }: TalentNameProps) {
  const borderColor = (selectedTalent: string) => {
    switch (selectedTalent) {
      case "Amelia Watson":
        return "ame";
      case "Mori Calliope":
        return "calli";
      case "Gawr Gura":
        return "gura";
      case "Ninomae Ina'nis":
        return "ina";
      case "IRyS":
        return "irys";
      case "Ouro Kronii":
        return "kronii";
      default:
        return undefined;
    }
  };
  
  return (
    <div className="talent-header">
      <div className={borderColor(selectedTalent)}>{selectedTalent}</div>
    </div>
  );
}
