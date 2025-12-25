import AidTemplate from "./Template.jsx";

export default function Heart() {
  return (
    <AidTemplate
      title="Heart Emergency – First Aid"
      accent="aid-accent-heart"
      steps={[
        "Call emergency services immediately",
        "Help the person sit and rest",
        "Loosen tight clothing",
        "If prescribed, assist with medication",
        "Begin CPR if person becomes unresponsive",
      ]}
    />
  );
}
