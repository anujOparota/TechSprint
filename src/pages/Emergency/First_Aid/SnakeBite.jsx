import AidTemplate from "./Template.jsx";

export default function SnakeBite() {
  return (
    <AidTemplate
      title="Snake Bite – First Aid"
      accent="aid-accent-snake"
      steps={[
        "Keep the victim calm and still",
        "Do not cut or suck the wound",
        "Remove tight items",
        "Immobilize the bitten limb",
        "Go to hospital immediately",
      ]}
    />
  );
}
