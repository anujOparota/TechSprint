import AidTemplate from "./Template.jsx";

export default function Unconscious() {
  return (
    <AidTemplate
      title="Unconsciousness – First Aid"
      accent="aid-accent-unconscious"
      steps={[
        "Check responsiveness",
        "Call emergency services",
        "Place in recovery position",
        "Loosen tight clothing",
        "Do not give food or drink",
      ]}
    />
  );
}
