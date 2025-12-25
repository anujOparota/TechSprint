import { useNavigate } from "react-router-dom";
import "./FirstAidCommon.css";

export default function AidTemplate({ title, steps, accent = "" }) {
  const navigate = useNavigate();

  return (
    <div className={`aid-container ${accent}`}>
      
      {/* Back Button */}
      <button
        className="aid-back"
        onClick={() => navigate(-1)}
        aria-label="Go back"
      >
        ← Back
      </button>

      <h1 className="aid-title">{title}</h1>

      <div className="aid-warning">
        Follow these steps only until professional medical help arrives.
      </div>

      <ul className="aid-steps">
        {steps.map((step, index) => (
          <li key={index} className="aid-step">
            <span className="aid-step-number">{index + 1}</span>
            <p>{step}</p>
          </li>
        ))}
      </ul>

      <div className="aid-emergency-btn">
        <a href="tel:112">🚑 Call Emergency</a>
      </div>
    </div>
  );
}
