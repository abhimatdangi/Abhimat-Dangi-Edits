import React from "react";

const ToolBadge: React.FC<{ kind: "pr" | "ae"; label: string }> = ({ kind, label }) => (
  <div className="flex items-center gap-3 glass-surface border rounded-lg p-4">
    <div className={`h-10 w-10 grid place-items-center rounded-md text-white ${kind === "pr" ? "badge-adobe-pr" : "badge-adobe-ae"}`}>
      {kind === "pr" ? "Pr" : "Ae"}
    </div>
    <div>
      <p className="text-sm font-medium">{label}</p>
      <p className="text-xs text-muted-foreground">Adobe {label}</p>
    </div>
  </div>
);

const ToolStack: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl mb-4 font-semibold">Tool Stack</h2>
      <p className="text-muted-foreground mb-6 max-w-prose">
        I work primarily in a red and cream themed pipeline with industry-standard tools.
      </p>
      <div className="grid sm:grid-cols-2 gap-4 max-w-xl">
        <ToolBadge kind="pr" label="Premiere Pro" />
        <ToolBadge kind="ae" label="After Effects" />
      </div>
    </div>
  );
};

export default ToolStack;
