import React, { useState } from "react";

function Modals() {
    const [model, setModel] = useState(false);

    const toggleModal = () => {
        setModel(!model);
    };

    return (
        <div>
            <button onClick={toggleModal} className="overlay">Open</button>
            {model && (
                <div className="modal">
                    <div className="modal-container">
                        <div className="modal-header">
                            <h2>Modal Header</h2>
                            <p>jhsdgyedfj ihydgshud hgyusvdj hgvihb</p>
                            <button onClick={toggleModal} className="closeBtn">CLOSE</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Modals;
