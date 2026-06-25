import { useCallback, useState } from 'react'
import AIDiagram from './AIDiagram'
import HiringModal from './HiringModal'
import './MasteringAI.css'

export default function MasterAISection() {
  const [selectedSector, setSelectedSector] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSectorClick = useCallback((sector) => {
    setSelectedSector(sector)
    setIsModalOpen(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  return (
    <>
      <section className="masteringaaiisss">
        <div className="container-fluid">
          <div className="materingaiissmainnnss">
            <div className="masterignaiissheads">
              <h2>
                Mastering AI multiplies <br /> <span>your opportunities</span>
              </h2>
              <p>
                AI is transforming the world and every industry is investing
                heavily in it.{' '}
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
      </section>

      <HiringModal
        sector={selectedSector}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}
