import AidTemplate from "./Template.jsx";

export default function Choking() {
  return (
    <AidTemplate
      title="Choking – First Aid"
      accent="aid-accent-choking"
      steps={[
        "Ask if the person can speak",
        "Encourage coughing",
        "Perform abdominal thrusts if needed",
        "Call emergency services",
        "Continue until help arrives",
      ]}
    />
  );
}
