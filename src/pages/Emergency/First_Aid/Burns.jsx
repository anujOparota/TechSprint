import AidTemplate from "./Template.jsx";

export default function Burns() {
  return (
    <AidTemplate
      title="Burns – First Aid"
      accent="aid-accent-burns"
      steps={[
        "Move away from source of burn",
        "Cool burn under running water for 20 minutes",
        "Do not apply ice",
        "Cover with sterile dressing",
        "Seek medical help if severe",
      ]}
    />
  );
}
