import AidTemplate from "./Template.jsx";

export default function Bleeding() {
  return (
    <AidTemplate
      title="Bleeding – First Aid"
      accent="aid-accent-bleeding"
      steps={[
        "Apply firm pressure to stop bleeding",
        "Use a clean cloth or bandage",
        "Elevate injured area if possible",
        "Do not remove embedded objects",
        "Seek medical help if bleeding continues",
      ]}
    />
  );
}
