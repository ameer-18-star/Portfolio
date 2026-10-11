import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Renders the PNG logo; if it 404s or fails to decode, falls back to the
// FontAwesome icon instead of a broken-image glyph.
const ToolCard = ({ tool }) => {
  const [broken, setBroken] = useState(false);

  return (
    <div className="tool-card">
      <div className="tool-logo">
        {broken ? (
          <FontAwesomeIcon icon={tool.fallbackIcon} />
        ) : (
          <img src={tool.logo} alt={`${tool.name} logo`} loading="lazy" onError={() => setBroken(true)} />
        )}
      </div>
      <span className="font-mono text-[11px] text-muted">{tool.name}</span>
    </div>
  );
};

export default ToolCard;
