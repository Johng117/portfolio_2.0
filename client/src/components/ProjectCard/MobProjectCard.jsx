import { useState } from "react";
import ProjectSummary from "./ProjectSummary";
import ProjectDetail from "./ProjectDetail";

const MobProjectCard = () => {
  const [switchCard, setSwitchCard] = useState({ status: "summary" });

  const handleCardStatus = (e) => {
    console.log(e.target.id);
    setSwitchCard({ status: e.target.id });
  };
  return (
    <section className="mobile-card">
      {switchCard.status === "summary" ? (
        <ProjectSummary handleCardStatus={handleCardStatus} />
      ) : (
        <ProjectDetail handleCardStatus={handleCardStatus} />
      )}
    </section>
  );
};

export default MobProjectCard;
