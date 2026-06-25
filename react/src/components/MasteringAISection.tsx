import { useCallback, useState } from "react";
import type { Sector } from "../data/sectors";
import AIDiagram from "./AIDiagram";
import HiringModal from "./HiringModal";

export default function MasteringAISection() {
  const [selectedSector, setSelectedSector] = useState<Sector | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSectorClick = useCallback((sector: Sector) => {
    setSelectedSector(sector);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <>
      <secton className="masteringaaiisss">
        <div className="container-fluid">
          <div className="materingaiissmainnnss">
            <div className="masterignaiissheads">
              <h2>
                Mastering AI multiplies <br /> <span>your opportunities</span>
              </h2>
              <p>
                AI is transforming the world and every industry is investing
                heavily in it.{" "}
              </p>
              <p>
                Not just to grow revenue, but to eliminate manual work, generate
                accurate insights, and drive predictable business outcomes
              </p>
            </div>

            <div className="masteraidiagrramms">
              <AIDiagram onSectorClick={handleSectorClick} />
            </div>
          </div>
        </div>
      </secton>

      <HiringModal
        sector={selectedSector}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
