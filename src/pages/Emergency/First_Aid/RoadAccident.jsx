import AidTemplate from "./Template.jsx";

export default function RoadAccident() {
  return (
    <AidTemplate
      title="Road Accident – First Aid"
      accent="aid-accent-road"
      steps={[
        "Ensure scene safety",
        "Call emergency services",
        "Do not move injured person unnecessarily",
        "Control bleeding",
        "Stay until help arrives",
      ]}
    />
  );
}
