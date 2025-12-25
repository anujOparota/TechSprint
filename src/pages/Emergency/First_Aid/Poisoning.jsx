import AidTemplate from "./Template.jsx";

export default function Poisoning() {
  return (
    <AidTemplate
      title="Poisoning – First Aid"
      accent="aid-accent-poison"
      steps={[
        "Remove from poison source",
        "Do not induce vomiting",
        "Check breathing",
        "Call emergency services",
        "Provide poison details if known",
      ]}
    />
  );
}
