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
        return "#ff0000";
      case "Gawr Gura":
        return "#008ffb";
      case "Ninomae Ina'nis":
        return "#9400d3";
      case "IRyS":
        return "#ff00ff";
      case "Ouro Kronii":
        return "#0000ff";
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
